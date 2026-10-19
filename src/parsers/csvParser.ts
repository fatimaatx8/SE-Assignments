
import fs from 'fs';
import { parse } from 'csv-parse';


export const parseCSV = (filePath: string): Promise<string[][]> => {
  return new Promise((resolve, reject) => {
    const results: string[][] = [];

    fs.createReadStream(filePath, { encoding: 'utf-8' })
      .on('error', (error) => {
        console.error('Error reading file %s: %o', filePath, error);
        reject(error);
      })
      .pipe(parse({ bom: true, skip_empty_lines: true, trim: true }))
      .on('data', (row: string[]) => results.push(row))
      .on('error', (error) => {
        console.error('Error parsing CSV %s: %o', filePath, error);
        reject(error);
      })
      .on('end', () => resolve(results));
  });
};