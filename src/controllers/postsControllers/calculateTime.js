const calculateTime = (timeStamp) => {
    const time = new Date(Date.now().valueOf() - new Date(timeStamp).valueOf());
    const date = {
        years: {
            value: time.getUTCFullYear() - 1970,
            symbol: 'Y'
        },
        months: {
            value: time.getUTCMonth(),
            symbol: 'M'
        },
        days: {
            value: Math.floor(time.getTime() / (1000 * 60 * 60 * 24)),
            symbol: 'd'
        },
        hours: {
            value: time.getUTCHours(),
            symbol: 'h'
        },
        minutes: {
            value: time.getUTCMinutes(),
            symbol: 'm'
        },
        seconds: {
            value: time.getUTCSeconds(),
            symbol: 's'
        }
    };
    for (let part in date) {
        const temp = date[part];
        if (temp['value'] !== 0)
            return temp['value'] + temp['symbol'];
    }
};

module.exports = calculateTime;