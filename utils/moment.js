/// 2023.01.01 타입
export default function moment(tdate) {
  const now = new Date(tdate)
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const date = now.getDate()

  return `${year}.${month >= 10 ? month : '0' + month}.${
    date >= 10 ? date : '0' + date
  }`
}

/// 2023-01-01 타입
export function currentMoment(tdate) {
  const now = new Date(tdate)
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const date = now.getDate()
  return `${year}-${month >= 10 ? month : '0' + month}-${
    date >= 10 ? date : '0' + date
  }`
}
