// Definir las unidades de temperatura y sus factores de conversión
const unidadesTemperatura = [
    {
      nombre: "Celsius",
      simbolo: "°C",
      aCelsius: function(valor) { return valor; },
      desdeCelsius: function(valor) { return valor; }
    },
    {
      nombre: "Fahrenheit",
      simbolo: "°F",
      aCelsius: function(valor) { return (valor - 32) / 1.8; },
      desdeCelsius: function(valor) { return (valor * 1.8) + 32; }
    },
    {
      nombre: "Kelvin",
      simbolo: "K",
      aCelsius: function(valor) { return valor - 273.15; },
      desdeCelsius: function(valor) { return valor + 273.15; }
    }
  ];
  
  // Obtener los elementos HTML
  const selectUnidadOrigen = document.getElementById("unidad-origen");
  const selectUnidadDestino = document.getElementById("unidad-destino");
  const inputValorOrigen = document.getElementById("valor-origen");
  const pValorDestino = document.getElementById("valor-destino");
  const btnConvertir = document.getElementById("btn-convertir");
  
  // Agregar las opciones a los selects
  unidadesTemperatura.forEach(function(unidad) {
    const optionOrigen = document.createElement("option");
    optionOrigen.value = unidad.nombre;
    optionOrigen.text = unidad.nombre + " (" + unidad.simbolo + ")";
    const optionDestino = document.createElement("option");
    optionDestino.value = unidad.nombre;
    optionDestino.text = unidad.nombre + " (" + unidad.simbolo + ")";
    selectUnidadOrigen.add(optionOrigen);
    selectUnidadDestino.add(optionDestino);
  });
  
  // Definir la función para convertir unidades
  function convertirTemperatura() {
    const unidadOrigen = unidadesTemperatura.find(function(unidad) {
      return unidad.nombre === selectUnidadOrigen.value;
    });
    const unidadDestino = unidadesTemperatura.find(function(unidad) {
      return unidad.nombre === selectUnidadDestino.value;
    });
    const valorOrigen = parseFloat(inputValorOrigen.value);
    const valorDestino = unidadDestino.desdeCelsius(unidadOrigen.aCelsius(valorOrigen));
    pValorDestino.textContent = valorDestino.toFixed(2) + " " + unidadDestino.simbolo;
  }
  
  // Asignar la función al botón de convertir
  btnConvertir.addEventListener("click", convertirTemperatura);
  