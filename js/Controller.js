'use strict'

import QuoteService from "./Services/QuoteService.js";
import TimeService from "./Services/TimeService.js";

class AppController {

    constructor(view) {
        this.view = view;
        this.quoteService = new QuoteService();
        this.timeService = new TimeService();
    }

    async setQuote() {
        const quote = await this.quoteService.fetchRandomQuote();
        this.view.renderQuoteToView(quote);
    }

    async setTime() {
        const time = await this.timeService.fetchCurrentTime();
        this.view.renderTimeToView(time);
    }
}

export default AppController;