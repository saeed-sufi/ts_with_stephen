import { CsvFileReader } from './CsvFileReader';
import { MatchResults } from './matchResults';

const csvFilerReader = new CsvFileReader('football.csv')
csvFilerReader.read()

let manUnitedWins = 0
csvFilerReader.data.forEach(match => {
  if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
    manUnitedWins++
  }
});
console.log(manUnitedWins)
