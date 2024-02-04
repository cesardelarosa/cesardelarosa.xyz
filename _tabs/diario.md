---
icon: fas fa-book
order: 1
---

<style>
    #fecha-selector {
        text-align: center;
        display: none;
        margin: 0 auto;
        width: 0%; /* Puedes ajustar el ancho según tus preferencias */
    }

    .flatpickr-calendar {
        display: block !important;
        box-shadow: none; /* Oculta la sombra de la barra superior */
        border: none; /* Oculta el borde de la barra superior */
    }

</style>

Comparto en entradas diarias mis reflexiones y actividades. En un internet dominado por el consumo de contenido.

Mantener un diario público actualizado cada día implica mantener una cierta autocensura y, por tanto, no es igual que escribir algo que sabes que solo vas a leer tú. Aún así, creo que puede ser útil e interesante compartir lo más interesante del día en un registro público.

Elige aquí la fecha del día que desees leer:

<input type="text" id="fecha-selector">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script>
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
</script>

