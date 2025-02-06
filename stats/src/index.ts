import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { htmlReport } from './reportTargets/htmlReport';
import { Summary } from './Summary';

// const csvFileReader = new CsvFileReader('football.csv')
// const matchReader = new MatchReader(csvFileReader)
const matchReader = MatchReader.CsvReader('football.csv')
matchReader.load();

// const summary = new Summary(new WinsAnalysis('Man City'), new htmlReport())
const summary = Summary.analysisReport('Man United')
summary.buildAndPrintReport(matchReader.matches)