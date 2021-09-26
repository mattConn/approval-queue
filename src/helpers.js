const makeDate = (date) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const monthDayYear = date.split('/')
    const month = months[parseInt(monthDayYear[0])-1]
    const day = monthDayYear[1]
    const year = monthDayYear[2]

    return `${month} ${day}, ${year}`
}

export default makeDate