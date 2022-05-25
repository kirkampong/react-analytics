import { emissionsCalcUtil } from 'utils/emissionsCalculator';

class chartDataUtil {
  static chartData = (baseModel, record, tripData) => {
    return (
      [
        {name: 'Jan', s:emissionsCalcUtil.calcSavings(baseModel, record, tripData['Jan'])},
        {name: 'Feb', s:emissionsCalcUtil.calcSavings(baseModel, record, tripData['Feb'])},
        {name: 'Mar', s:emissionsCalcUtil.calcSavings(baseModel, record, tripData['Mar'])},
        {name: 'Apr', s:emissionsCalcUtil.calcSavings(baseModel, record, tripData['Apr'])},
        {name: 'May', s:emissionsCalcUtil.calcSavings(baseModel, record, tripData['May'])},
        {name: 'Jun', s:emissionsCalcUtil.calcSavings(baseModel, record, tripData['Jun'])},
        {name: 'Jul', s:emissionsCalcUtil.calcSavings(baseModel, record, tripData['Jul'])},
        {name: 'Aug', s:emissionsCalcUtil.calcSavings(baseModel, record, tripData['Aug'])},
        {name: 'Sep', s:emissionsCalcUtil.calcSavings(baseModel, record, tripData['Sep'])},
        {name: 'Oct', s:emissionsCalcUtil.calcSavings(baseModel, record, tripData['Oct'])},
        {name: 'Nov', s:emissionsCalcUtil.calcSavings(baseModel, record, tripData['Nov'])},
        {name: 'Dec', s:emissionsCalcUtil.calcSavings(baseModel, record, tripData['Dec'])},
      ]
    );
  };
}

export {chartDataUtil}