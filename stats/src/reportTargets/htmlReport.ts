import { OutputTarget } from "../Summary";
import  fs from 'fs';

export class htmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <h1> Report Summary </h1>  
      <p>${report}</p>
    `
    fs.writeFileSync('reaport.html', html);
  }
}