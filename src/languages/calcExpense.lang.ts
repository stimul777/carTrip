//
//*Поля для калькулятора расхода
//
const calcExpenseLang = {
  en: {
    calcExpense: {
      header: 'Expense',
      fuelVolumeInLiters: {
        value: 'The amount of fuel in the gas tank',
        description: null
      },
      driveOnFuel: {
        value: 'I drove on this fuel',
        description: null
      },
      fuelConsumption: {
        value: 'Fuel consumption per 100km: ',
        description: null
      }
    }
  },
  ru: {
    calcExpense: {
      header: 'Расход',
      fuelVolumeInLiters: {
        value: 'Сколько залил топлива в бак',
        description: null
      },
      driveOnFuel: { value: 'Расход топлива на 100км: ', description: null },
      fuelConsumption: {
        value: 'Расход топлива на 100км: ',
        description: null
      }
    }
  }
}

export default calcExpenseLang
