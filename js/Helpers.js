'use strict'

class Helpers {

    static getTimeFirstSeg(time) {
        return parseInt(time.substr(11, 5).split(":")[0]);
    }

    static getTime(time) {
        return time.substr(11, 5);
    }
}

export default Helpers;