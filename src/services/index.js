import FireDB from './FireDB'
import CONFIG from '../config'

export const db = new FireDB(`${CONFIG.firebaseURL}/cards`)