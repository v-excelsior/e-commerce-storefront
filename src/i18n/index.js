import CONFIG from 'config'

import eng from './dictionaries/eng.json'
import rus from './dictionaries/rus.json'

const dictionaries = {
  'eng': eng,
  'rus': rus,
}

export default dictionaries[CONFIG.language]