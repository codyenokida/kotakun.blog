// January 1st, 2010 , friday
const startDate = 20100102;

// every 7 days is a friday

const projectedCount = 666;

function getYear(date) {
    return Math.floor(Math.floor(date / 100) / 100);
}

console.log(getYear(startDate));
