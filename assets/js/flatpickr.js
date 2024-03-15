const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = isDarkMode ? "dark" : "light";
import flatpickr from "flatpickr";
import ("flatpickr/dist/themes/" + theme + ".css");

document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#fecha-selector", {
	maxDate: "today",
	minDate: "2024-01-01",
        inline: true,
	locale: {
		firstDayOfWeek: 1,
		weekdays: {
			shorthand: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
			longhand: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
		},
		months: {
			shorthand: ["Ene", "Fed", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
			longhand: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
		},
	},
        onChange: function(selectedDates, dateStr, instance) {
            redirectToPage(dateStr);
        },
    });

    function redirectToPage(dateStr) {
        var formattedDate = dateStr.split("-").join("/");
        var pageURL = "/diario/" + formattedDate;
        window.location.href = pageURL;
    }
});
