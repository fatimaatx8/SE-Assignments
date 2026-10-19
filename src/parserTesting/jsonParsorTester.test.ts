
import { parseJson } from '../parsers/jsonParser'
import { mkdtemp, writeFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'

describe('parseJson', () => {
  let tempDir: string

  beforeEach(async () => {
    tempDir = await mkdtemp(path.join(tmpdir(), 'json-test-'))
  }
)

  afterEach(async () => {


    await rm(tempDir, { recursive: true, force: true })


  }
)

  test('testing a valid json file', async () => {

    const filePath = path.join(tempDir, 'data.json')


    await writeFile(

      filePath,
      JSON.stringify({
        id: 101,
      name: 'Alice',
      active: true,
      skills: ['JavaScript', 'TypeScript'],
      })
    )

    const result = await parseJson(filePath);

    expect(result).toEqual({
       id: 101,
       name: 'Alice',
      active: true,
      skills: ['JavaScript', 'TypeScript'],
    });
  });

  test('throws error if file is empty', async () => {
    const filePath = path.join(tempDir, 'empty.json')
    await writeFile(filePath, '')

    await expect(parseJson(filePath)).rejects.toThrow(
      `json file "${filePath}" is empty`
    )
  }
)



  test('throws error if the json is invalid', async () => {

    const filePath = path.join(tempDir, 'invalid.json')

    await writeFile(filePath, '{"name": "Alice",}')

    await expect(parseJson(filePath)).rejects.toThrow(
      `invalid json format in "${filePath}"`
    )


  }


)

  test('throws error if file doesnt exist', async () => {
    const filePath = path.join(tempDir, 'missing.json')

    await expect(parseJson(filePath)).rejects.toThrow(
      `unable to read json file "${filePath}"`
    )
  })
})
