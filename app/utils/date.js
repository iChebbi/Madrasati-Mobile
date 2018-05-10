const currDateObj = new Date()
const currYear = currDateObj.getFullYear()
const currMonth = ('0' + (currDateObj.getMonth() + 1)).slice(-2)
const currDay = currDateObj.getDate()

export const today = currYear + '/' + currMonth + '/' +  ('0' + currDay).slice(-2)
const tomorrow = currYear + '/' + currMonth + '/' + (('0' + (currDay +1)).slice(-2))
const yesterday = currYear + '/' + currMonth + '/' + (('0' + (currDay -1)).slice(-2))

export const timestampToDate = timestamp => {
  const dateObj = new Date(timestamp * 1000)
  const year = dateObj.getFullYear()
  const month = ('0' + (dateObj.getMonth() + 1)).slice(-2)
  const day = dateObj.getDate() + 1

  return year + '/' + month + '/' + day
}

export const timestampToTime = timestamp => {
  const dateObj = new Date(timestamp * 1000)
  return dateObj.getHours() + ':' + ('0' + (dateObj.getMinutes() + 1)).slice(-2)
}

export const parseDate = date => {
  switch (date) {
    case today:
      return 'اليوم'
    case tomorrow:
      return 'غدا'
    case yesterday:
      return 'البارحة'
    default:
      return date
  }
}
