import moment from "moment"

const today = moment()

export function calculateDueDates(date){
    const dateObj = moment(date)
    
    if ( isBeforeToday(dateObj) ){
        return false
    }

    const restultingDates = [
        calculateRelativeDate(dateObj, 6, 'months'),
        calculateRelativeDate(dateObj, 3, 'months'),
        calculateRelativeDate(dateObj, 6, 'weeks')
    ]

    restultingDates.forEach((date,i) => {
        if ( isBeforeToday(date) )
            restultingDates[i] = false
    })

    return restultingDates

}

export function isBeforeToday(date){
    return moment(date).isBefore(today)
}

export function calculateRelativeDate(date, offset, unit){
    return moment(date).subtract(offset, unit).format('MMM DD YYYY')
}