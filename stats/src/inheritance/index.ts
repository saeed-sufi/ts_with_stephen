import { MatchReader } from './MatchReader';
import { MatchResults } from '../matchResults';

const csvFileReader = new MatchReader('football.csv')
csvFileReader.read()

let manUnitedWins = 0
csvFileReader.data.forEach(match => {
  if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
    manUnitedWins++
  }
});
console.log(manUnitedWins)
