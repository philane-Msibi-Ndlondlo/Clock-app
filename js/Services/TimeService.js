'use strict'

import Constants from "../constants.js";

class TimeService {

    constructor() {
        this.time = null;
    }

    async fetchCurrentTime() {

        if (this.time !== null) return this.time;
        
        try {
            const time_req = await fetch(Constants.TIME_API);
            const time = await time_req.json();
            this.time = time;
            return this.time;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

export default TimeService;