//xml parser
import { promises as fs } from 'fs';
import { XMLParser, XMLValidator } from 'fast-xml-parser';


const parser = new XMLParser({
  ignoreAttributes: false,   
  attributeNamePrefix: '@_', 
  parseTagValue: true,       
  parseAttributeValue: true,
  trimValues: true,
});


export const parseXML = async(filePath: string): Promise<unknown> => {
  let rawfile: string;

  try {
    rawfile = await fs.readFile(filePath, 'utf-8');
  } catch (error) {
    console.error('error reading xml file %s: %o', filePath, error);
    throw new Error(
      `unable to read xml file "${filePath}": ${(error as Error).message}`
    );
  }



  if (rawfile.trim() === '') {
    const message = `XML file "${filePath}" is empty`;
    console.error(message);
    throw new Error(message);
  }

  const validation = XMLValidator.validate(rawfile)
  if (validation !== true) {
    const { msg, line } = validation.err
    console.error('invald xml in file %s: %s (line %d)', filePath, msg, line)
    throw new Error(`invalid xml in "${filePath}": ${msg} (line ${line})`)
  }

  return parser.parse(rawfile)
};