import langMapView from '@/languages/cardWithMap.lang'
import calcDistanceLang from '@/languages/calcDistance.lang'
import calcExpenseLang from '@/languages/calcExpense.lang'

const messages = {
  ru: {},
  en: {}
}

Object.assign(messages.ru, langMapView.ru, calcDistanceLang.ru, calcExpenseLang.ru)
Object.assign(messages.en, langMapView.en, calcDistanceLang.en, calcExpenseLang.en)

export default messages
