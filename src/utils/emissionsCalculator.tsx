class emissionsCalcUtil {
  // Calculate emissions for Benchmark Model
  static calcBenchmark = (baseModel: { [x: string]: any; }, milesDriven: number) => {
    const mpg = baseModel['Miles per gallon'];
    const baseCo2PerGallon = 19.59;
    return (milesDriven * baseCo2PerGallon) / mpg;
  };
  // Calculate emissions savings given milesDrived
  static calcSavings(baseModel: any, record: { [x: string]: number; }[], milesDriven: number) {
    const co2PerKwh = 0.90;
    const s = this.calcBenchmark(baseModel, milesDriven) - ((co2PerKwh * milesDriven) / record[0]['Miles per kWh']);
    return s;
  };
}

export {emissionsCalcUtil}