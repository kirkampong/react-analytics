class recordsFilterUtil {
  //Filters input to return record(s) based on the make/trip selected
  static filterInputByTrip = (records: any[], make: string) => {
    switch(make.toLowerCase()) {
      case 'audi':
        //console.log(records);
        return records.filter((record: { Make: string; Year: number; Series: string; Model: string; Style: string; }) => {
          return (
            record.Make.toLowerCase() === 'audi'
            && record.Year === 2020
            && record.Series.toLowerCase() === 'premium plus'
            && record.Model.toLowerCase() === 'q5'
            && record.Style.toLowerCase() === '4d suv 2.0t phev'
          )
        });
      case 'tesla':
        return records.filter((record: { Make: string; Year: number; Series: string; Model: string; Style: string; }) => {
          return (
            record.Make.toLowerCase() === 'tesla'
            && record.Year === 2020
            && record.Series.toLowerCase() === 'performance'
            && record.Model.toLowerCase() === 'model y'
            && record.Style.toLowerCase() === '4d suv'
          )
        });
      case 'volvo':
        return records.filter((record: { Make: string; Year: number; Series: string; Model: string; Style: string; }) => {
          return (
            record.Make.toLowerCase() === 'volvo'
            && record.Year === 2021
            && record.Series.toLowerCase() === 't8 - polestar'
            && record.Model.toLowerCase() === 'xc60'
            && record.Style.toLowerCase() === '4d suv phev'
          )
        });
      case 'toyota':
        return records.filter((record: { Make: string; Year: number; Series: string; Model: string; Style: string; }) => {
          return (
            record.Make.toLowerCase() === 'toyota'
            && record.Year === 2014
            && record.Series.toLowerCase() === 'ev'
            && record.Model.toLowerCase() === 'rav4'
            && record.Style.toLowerCase() === '4d suv fwd'
          )
        });
      default:
        return records
    }

  }
}

export {recordsFilterUtil}