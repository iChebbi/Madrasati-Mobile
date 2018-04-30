const currDateObj = new Date()
const currYear = currDateObj.getFullYear()
const currMonth = ('0' + (currDateObj.getMonth() + 1)).slice(-2)
const currDay = currDateObj.getDate()

export const today = currYear + '/' + currMonth + '/' + currDay
const tomorrow = currYear + '/' + currMonth + '/' + (currDay + 1)
const yesterday = currYear + '/' + currMonth + '/' + (currDay - 1)

export const timestampToDate = timestamp => {
  const dateObj = new Date(timestamp)
  const year = dateObj.getFullYear()
  const month = ('0' + (dateObj.getMonth() + 1)).slice(-2)
  const day = dateObj.getDate() + 1

  return year + '/' + month + '/' + day
}

export const timestampToTime = timestamp => {
  const dateObj = new Date(timestamp)
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
