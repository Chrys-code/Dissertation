const isCurrentYear = (date, inputData) => {
    let res;
    Object.entries(inputData).forEach(([key, value]) => {
        if (key === 'departure_year' && value == date.getFullYear()) {
            res = value
        }
    })
    if (res == date.getFullYear()) {
        return true
    } else {
        return false
    }
}

const isCurrentMonth = (date, inputData) => {
    let res;
    Object.entries(inputData).forEach(([key, value]) => {
        if (key === 'departure_month' && value == (date.getMonth() + 1)) {
            res = value
        }
    })
    if (res == (date.getMonth() + 1)) {
        return true
    } else {
        return false
    }
}

const isDepartureYear = (inputData) => {
    let arrivalyear;
    let departureyear;
    Object.entries(inputData).forEach(([key, value]) => {
        if (key === 'arrival_year') {
            arrivalyear = value
        }
        if (key === 'departure_year') {
            departureyear = value
        }
    })
    if (arrivalyear == departureyear) {
        return true
    } else {
        return false
    }
}

const isDepartureMonth = (inputData) => {
    let arrivalmonth;
    let departuremonth;
    Object.entries(inputData).forEach(([key, value]) => {
        if (key === 'arrival_month') {
            arrivalmonth = value
        }
        if (key === 'departure_month') {
            departuremonth = value
        }
    })
    if (arrivalmonth == departuremonth) {
        return true
    } else {
        return false
    }
}


const getDepartureDates = (inputData) => {
    let departureYear;
    let departureMonth;
    let departureDay;
    Object.entries(inputData).forEach(([key, value]) => {
        if (key === 'departure_year') {
            departureYear = value
        }
        if (key === 'departure_month') {
            departureMonth = value
        }
        if (key === 'departure_day') {
            departureDay = value
        }
    })
    return { departureYear: departureYear || '', departureMonth: departureMonth || '', departureDay: departureDay || '' }
}



const selectableDate = { isCurrentYear, isCurrentMonth, getDepartureDates, isDepartureYear, isDepartureMonth }

export default selectableDate;