import { addDays, getWeek, setWeek, startOfMonth, startOfWeek, startOfDay } from "date-fns"
import { range } from "lodash"

export const createCalendarMonthView = (today: Date): Date[][] => {
  const firstDayOfMonth = startOfMonth(today)
  const firstWeekOfMonth = getWeek(firstDayOfMonth, { weekStartsOn: 1 })
  const firstDayOfFirstWeekOfMonth = startOfWeek(setWeek(firstDayOfMonth, firstWeekOfMonth), { weekStartsOn: 1 })

  // +1 because lodash's range is non inclusive
  const weeks = range(1, 6 + 1).map((week) => {
    return range(1, 7 + 1).map((day) => {
      return addDays(setWeek(firstDayOfFirstWeekOfMonth, firstWeekOfMonth + week - 1, {weekStartsOn: 1}), day - 1)
    })
  })

  return weeks
}