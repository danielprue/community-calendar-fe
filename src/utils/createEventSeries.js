//when creating an event series, this function will be used in EventForm.jsx when creating an event
export default function createEventSeries(
  startDate,
  endDate,
  endSeriesDate,
  repeatFreq,
  week = '',
) {
  //this function takes in information about how many times to repeat the event and returns an array of dates to create the event for
  let eventStartDate = startDate
  let eventEndDate = endDate
  const eventDates = []
  let whichWeek = -1

  if (week === 'First week') whichWeek = 1
  else if (week === 'Second week') whichWeek = 2
  else if (week === 'Third week') whichWeek = 3
  else if (week === 'Fourth week') whichWeek = 4
  else if (week === 'Fifth week') whichWeek = 5

  console.log(eventStartDate.getDate())
  switch (repeatFreq) {
    case 'None':
      eventDates.push({eventStartDate, eventEndDate})
      break
    case 'Daily':
      //while eventDate <= endDate
      //add date to eventDates
      //add 1 day to eventDate
      eventStartDate.setDate(eventStartDate.getDate() + 1)
      eventEndDate.setDate(eventEndDate.getDate() + 1)
      while (eventStartDate <= endSeriesDate) {
        eventDates.push({
          start: new Date(eventStartDate),
          end: new Date(eventEndDate),
        })
        eventStartDate.setDate(eventStartDate.getDate() + 1)
        eventEndDate.setDate(eventEndDate.getDate() + 1)
      }
      break
    case 'Weekly':
      console.log('repeat Weekly')
      //while eventDate <= endDate
      //add date to eventDates
      //add 1 week to the eventDate
      eventStartDate.setDate(eventStartDate.getDate() + 7)
      eventEndDate.setDate(eventEndDate.getDate() + 7)
      while (eventStartDate <= endSeriesDate) {
        eventDates.push({
          start: new Date(eventStartDate),
          end: new Date(eventEndDate),
        })
        eventStartDate.setDate(eventStartDate.getDate() + 7)
        eventEndDate.setDate(eventEndDate.getDate() + 7)
      }
      break
    case 'Monthly':
      //while eventDate <= endDate
      //add date to eventDates
      //find next day that meets the monthly critera (i.e. 2nd tuesday)
      eventStartDate.setDate(eventStartDate.getDate() + 7)
      eventEndDate.setDate(eventEndDate.getDate() + 7)
      while (eventStartDate <= endSeriesDate) {
        if (Math.ceil(eventStartDate.getDate() / 7) === whichWeek)
          eventDates.push({
            start: new Date(eventStartDate),
            end: new Date(eventEndDate),
          })
        eventStartDate.setDate(eventStartDate.getDate() + 7)
        eventEndDate.setDate(eventEndDate.getDate() + 7)
      }
      break
    default:
      console.log('invalid repeatFreq')
  }
  console.log(eventDates)
  return eventDates
}
