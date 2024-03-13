import flatpickr from "flatpickr";
import { Spanish } from "flatpickr/dist/l10n/es.js";

document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#fecha-selector", {
	maxDate: "today",
	minDate: "2024-01-01",
        inline: true,
	locale: Spanish,
        onChange: function(selectedDates, dateStr, instance) {
            redirectToPage(dateStr);
        }
    });

    function redirectToPage(dateStr) {
        var formattedDate = dateStr.split("-").join("/");
        var pageURL = "/diario/" + formattedDate;
        window.location.href = pageURL;
    }
});

