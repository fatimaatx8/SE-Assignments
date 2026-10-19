//json parser
import { readFile } from 'node:fs/promises';


export const parseJson = async (filePath: string): Promise<unknown> => {
    let rawfile: string;

    try {
        rawfile = await readFile(filePath, 'utf-8')
    }
    catch (error) {
        console.error('error reading json file %s: %o', filePath, error)
        throw new Error(
            `unable to read json file "${filePath}": ${(error as Error).message}`
        );
    }

    if (rawfile.trim() === '') {
        const message = `json file "${filePath}" is empty`
        console.error(message)
        throw new Error(message)
    }

    try {
        return JSON.parse(rawfile)
    }

    catch (error) {
        console.error('invalid json in file %s: %o', filePath, error)
        throw new Error(`invalid json format in "${filePath}": ${(error as Error).message}`)
    }




}