import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResults } from './matchResults';

type MatchData = [Date, string, string, number, number, MatchResults, string]
export class CsvFileReader {
  data: MatchData[] = [];
  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((row: string[]): MatchData => {
        return [dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResults,
          row[6]
      ]
      })
  }
}
