import CONFIG from 'config'

import eng from './dictionaries/eng.json'
import rus from './dictionaries/rus.json'


const dictionary = (() => {
  if (CONFIG.language === 'eng') {
    return eng
  }

  if (CONFIG.language === 'rus') {
    return rus
  }
})()

export default dictionary