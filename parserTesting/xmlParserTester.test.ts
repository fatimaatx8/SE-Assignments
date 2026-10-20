import { parseXML } from "../parsers/xmLParser";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

describe("parseXML", () => {
  let tempDir: string;

  beforeEach(async () => {
    tempDir = await mkdtemp(path.join(tmpdir(), "xml-test-"));
  });

  afterEach(async () => {
    await rm(tempDir, { recursive: true, force: true });
  });

  test("parses valid XML with nested elements and attributes", async () => {
    const filePath = path.join(tempDir, "data.xml");

    await writeFile(
      filePath,
      `<store>
        <product id="101">
          <name>Alice</name>
          <price>25</price>
          <active>true</active>
        </product>
      </store>`,
    );

    const result = await parseXML(filePath);

    expect(result).toEqual({
      store: {
        product: {
          "@_id": 101,
          name: "Alice",
          price: 25,
          active: true,
        },
      },
    });
  });

  test("throws an error if the file is empty", async () => {
    const filePath = path.join(tempDir, "empty.xml");
    await writeFile(filePath, "   \n  ");

    await expect(parseXML(filePath)).rejects.toThrow(
      `XML file "${filePath}" is empty`,
    );
  });

  test("throws an error if the XML is invalid", async () => {
    const filePath = path.join(tempDir, "invalid.xml");
    await writeFile(filePath, "<store><product></store>");

    await expect(parseXML(filePath)).rejects.toThrow(
      `invalid xml in "${filePath}"`,
    );
  });

  test("throws an error if the file does not exist", async () => {
    const filePath = path.join(tempDir, "missing.xml");

    await expect(parseXML(filePath)).rejects.toThrow(
      `unable to read xml file "${filePath}"`,
    );
  });
});
