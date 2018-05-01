import { baseURL } from '../utils/env'

export const pictureUrl = child =>
  child.image !== 'default.png'
    ? { uri: baseURL + '/images/' + child.image }
    : child.sexe === 'male'
      ? require('../assets/boy.png')
      : require('../assets/girl.png')