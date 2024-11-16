import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number,
    inputType: 'cel' | 'fah',
    outputType: 'cel' | 'fah'
  ): string {
    let val: number;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outputTransform: number;
    if (inputType === 'cel' && outputType === 'fah') {
      outputTransform = val * (9 / 5) + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      outputTransform = (val - 32) * (5 / 9);
    } else {
      outputTransform = val;
    }

    let symbol: 'C' | 'F';
    if (!outputType) {
      symbol = inputType === 'cel' ? 'C' : 'F';
    } else {
      symbol = outputType === 'fah' ? 'F' : 'C';
    }

    return `${outputTransform.toFixed(2)} ${symbol}`;
  }
}
