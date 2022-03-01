'use strict'

import Constants from './constants.js';
import Helpers from './Helpers.js';

class AppView {

    constructor(view) {

        this.moreBtn = document.getElementById("moreBtn");
        this.moreBtnText = document.getElementById("moreBtnText");
        this.moreBtnIcon = document.getElementById("moreBtnIcon");
        this.timezoneMore = document.getElementById("timezone__more");

        this.quote = document.getElementById("quote");
        this.quoteAuthor = document.getElementById("author");

        this.time = document.getElementById("time");
        this.city = document.getElementById("city");
        this.timezone = document.getElementById("timezone");
        this.dayOfWeek = document.getElementById("dayOfWeek");
        this.dayOfYear = document.getElementById("dayOfYear");
        this.weekNumber = document.getElementById("weekNumber");
        this.timezone__unit = document.getElementById("timezone__unit");
        this.welcome_icon = document.getElementById("welcome_icon");

        this.body = document.getElementsByTagName('body')[0];

        this.greeting = document.getElementById("greeting");
        this.registerEvents();
    }

    registerEvents() {
        
        this.moreBtn.addEventListener("click", (e) => {
            e.preventDefault();

            this.timezoneMore.classList.toggle("hide__timezone__more");

            this.moreBtnIcon.src = Constants.ARROW_UP;
            this.moreBtnText.textContent = "LESS";

            if (this.timezoneMore.classList.contains("hide__timezone__more")) {
                this.moreBtnIcon.src = Constants.ARROW_DOWN;
                this.moreBtnText.textContent = "MORE";
            }
        })
    }

    renderQuoteToView(quote) {
        this.quote.textContent = quote.en;
        this.quoteAuthor.textContent = quote.author;
    }

    renderTimeToView(time) {
        
        if (time === null) this.resetView();

        this.time.textContent = Helpers.getTime(time.datetime);
        this.welcome_icon.src = Constants.SUN_ICON;
        this.greeting.textContent = Constants.DAY_GREETING;

        const time_seg = Helpers.getTimeFirstSeg(time.datetime);

        if (time_seg >= Constants.NIGHT_START && time_seg <= Constants.NIGHT_END) {
            this.body.classList.add("nightTime");
            this.welcome_icon.src = Constants.MOON_ICON;
            this.greeting.textContent = Constants.NIGHT_GREETING;
        }

        this.timezone.textContent = time.timezone;
        this.dayOfWeek.textContent = time.day_of_week;
        this.dayOfYear.textContent = time.day_of_year;
        this.timezone__unit.textContent = time.abbreviation;
        this.city.textContent = time.timezone.split("/")[1];
        this.weekNumber.textContent = time.week_number;
    }

    resetView() {

        this.time.textContent = "";
        this.welcome_icon.src = "";
        this.greeting.textContent = "Loading...";
        this.timezone.textContent = "Loading...";
        this.dayOfWeek.textContent = "Loading...";
        this.dayOfYear.textContent = "Loading...";
        this.timezone__unit.textContent = "Loading...";
        this.city.textContent = "Loading...";
        this.weekNumber.textContent = "Loading...";
        return;
    }
}

export default AppView;