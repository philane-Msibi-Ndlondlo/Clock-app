'use strict'

import Constants from "../constants.js";

class QuoteService {

    constructor() {
        this.quote = null;
    }

    async fetchRandomQuote() {

        if (this.quote !== null) return this.quote;
        
        try {
            const quote_req = await fetch(Constants.QUOTE_API);
            const quote = await quote_req.json();
            this.quote = quote;
            return this.quote;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

export default QuoteService;