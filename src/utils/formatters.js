import { DAYS_OF_THE_WEEK, MONTHS_OF_THE_YEAR } from "./constants";

export const formatHour12 = (time) => {
    return time.toLocaleString('en-US', { hour: 'numeric', hour12: true });
}

export const getYearRange = (startYear, endYear) => {

    let years = [];
    for (let year = startYear; year <= endYear; year++) {
        years.push(year)
    }

    return years;
}

export const getDaysArray = (year, month) => {

    if (isNaN(month) && isNaN(year)) return
    const daysInMonth = new Date(year, month, 0).getDate();
    const daysArray = [];

    for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push({ value: i, label: i });
    }

    return daysArray;
}

export const getMonthsArray = () => {

    const monthsArray = [];

    for (let i = 0; i < 12; i++) {
        monthsArray.push({ value: i + 1, label: MONTHS_OF_THE_YEAR[i] });
    }

    return monthsArray;
}

export const getLastFiveYearsArray = () => {

    const currentYear = new Date().getFullYear();
    const yearsArray = [];

    for (let i = 0; i < 5; i++) {
        yearsArray.push({ value: currentYear - i, label: currentYear - i });
    }

    return yearsArray;
}

export const formatCategoryQuery = (categories) => {

    let categoryQuery = `AND MCI_CATEGORY IN`;
    let categoryItems = ``;

    if (categories) {

        for (let index = 0; index < categories.length; index++) {
            const title = categories[index].value;

            if (index === 0) {
                categoryItems = `'${title}'`;
            } else {
                categoryItems += `, '${title}'`;
            }

        }

        categoryQuery += ` (${categoryItems})`;

    }

    return categories.length > 0 ? categoryQuery : []
}

export const getPreviousMonth = (month) => {

    const months = getMonthsArray();
    let previousMonthIndex = months.findIndex(e => e.label === month) - 1;

    return previousMonthIndex < 0 ? months[months.length - 1] : months[previousMonthIndex];

}

export const formatMonthToNumber = (data) => {
    return new Date(Date.parse(data + " 1, 2000")).getMonth();
}

export const formatDaysOrder = (data) => {
    return data.sort((a, b) => DAYS_OF_THE_WEEK.indexOf(a.label) - DAYS_OF_THE_WEEK.indexOf(b.label));
}

export const getMinValue = (data) => {
    const clone = [...data];
    let result = clone.reduce((min, current) => {
        if (current.value !== null && (min.value === null || current.value < min.value)) {
            return current;
        } else {
            return min;
        }
    }, { label: "", value: null });

    return result
}

export const getMaxValue = (data) => {
    const clone = [...data];
    let result = clone.reduce((max, current) => {
        if (current.value !== null && (max.value === null || current.value > max.value)) {
            return current;
        } else {
            return max;
        }
    }, { label: "", value: null });

    return result
}

// Function to convert label value to 12-hour format
export const convertTo12Hour = (label) => {
    if (label === 0)
        return "12 AM";
    else if (label === 12)
        return "12 PM";
    else if (label < 12)
        return `${label} AM`;
    else
        return `${label - 12} PM`;
}

