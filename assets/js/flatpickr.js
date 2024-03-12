import flatpickr from "flatpickr";
import es from "flatpickr/dist/l10n/es.js"; // Importa el archivo de idioma español

document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#fecha-selector", {
        inline: true,
        locale: es, // Configura el idioma español
        weekStart: 1, // Configura para que las semanas empiecen en lunes (0 para domingo, 1 para lunes, etc.)
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

