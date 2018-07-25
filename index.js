class SimpleDate {
    constructor() {
        this.simpleDate = new Date();
    }

    /**
     * Returns the UTC timestamp as a string
     */

    getUTCTimestamp() {
        return this.simpleDate.toISOString();
        
    }

    /**
     * Returns the Unix timestamp as a string
     * @returns {String}
     */

    getUnixTimestamp() {
        return String(this.simpleDate.getTime());
    }

    /**
     * Returns the date-time in the local time zone as a string
     * @returns {String}
     */

    getTimeInLocalTimeZone() {
        return this.simpleDate.toString();
    }
}

module.exports = SimpleDate;