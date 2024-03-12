import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#fecha-selector", {
        inline: true, // Esto hace que el calendario aparezca siempre
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

