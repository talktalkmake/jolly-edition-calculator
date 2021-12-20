import moment from "moment"

const today = moment()

export function calculateDueDates(date){
    const dateObj = moment(date, 'YYYY-MM-DD', true)

    const events = [
        {
            label: 'Save the Date',
            date: calculateRelativeDate(dateObj, 6, 'months'),
            impossible: false
        },
        {
            label: 'Invite',
            date: calculateRelativeDate(dateObj, 3, 'months'),
            impossible: false
        },
        {
            label: 'Day-of',
            date: calculateRelativeDate(dateObj, 6, 'weeks'),
            impossible: false
        }
    ]

    events.forEach((event,i) => {
        if ( isBeforeToday(event.date) ){
            event.impossible = true
        }
    })

    return events

}

export function isBeforeToday(date){
    return moment(date, 'YYYY-MM-DD').isBefore(today)
}

export function calculateRelativeDate(date, offset=6, unit='months'){
    return moment(date).subtract(offset, unit).format('MMM DD YYYY')
}