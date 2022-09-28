import dayjs from "dayjs"

export function formatMonthDay(date) {
  // dayjs传入一个日期
  return dayjs(date).format("MM月DD日")
}