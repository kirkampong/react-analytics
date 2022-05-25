class emissionsCalcUtil {
  //Calculate emissions for Benchmark Model
  static calcBenchmark = (baseModel, milesDriven) => {
    //console.log(record);
    const mpg = baseModel['Miles per gallon'];
    const baseCo2PerGallon = 19.59;
    return (milesDriven * baseCo2PerGallon) / mpg;
  };

  static calcSavings(baseModel, record, milesDriven) {
    const co2PerKwh = 0.90;
    const s = this.calcBenchmark(baseModel, milesDriven) - ((co2PerKwh * milesDriven) / record[0]['Miles per kWh']);
    return s;
  };
}

export {emissionsCalcUtil}