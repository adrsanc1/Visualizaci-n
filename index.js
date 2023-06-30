// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

// Cargar los datos del archivo CSV
d3.csv("./Carrefour_cleaning.csv", function(error, data) {
  if (error) throw error;

  // Convertir la columna 'order_date' a tipo 'date'
  data.forEach(function(d) {
    d.order_date = new Date(d.order_date + '-01');
  });

  // Configurar el gráfico interactivo con D3plus
  var visualization = d3plus
    .viz()
    .container("#chart")
    .data(data)
    .type("line")
    .id("category")
    .x("order_date")
    .y("value")
    .time("order_date")
    .title("Cantidad de productos vendidos por Categorías y Fecha")
    .ui([
      {
        method: "type",
        value: ["line", "scatter"],
        label: ["Línea", "Puntos"]
      }
    ])
    .draw();
});


