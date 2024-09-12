document.addEventListener('DOMContentLoaded', () => {
    const temperatureInput = document.getElementById('temperature');
    const fromUnitSelect = document.getElementById('fromUnit');
    const toUnitSelect = document.getElementById('toUnit');
    const convertBtn = document.getElementById('convertBtn');
    const resultDiv = document.getElementById('result');

    // Función para habilitar/deshabilitar el botón de convertir
    function toggleConvertButton() {
        if (temperatureInput.value && fromUnitSelect.value && toUnitSelect.value) {
            convertBtn.disabled = false;
        } else {
            convertBtn.disabled = true;
        }
    }

    // Función para convertir las temperaturas
    function convertTemperature(temperature, fromUnit, toUnit) {
        let result;

        // Convertir a Celsius primero
        if (fromUnit === 'celsius') {
            result = temperature;
        } else if (fromUnit === 'fahrenheit') {
            result = (temperature - 32) * 5/9;
        } else if (fromUnit === 'kelvin') {
            result = temperature - 273.15;
        }

        // Convertir de Celsius a la unidad de destino
        if (toUnit === 'celsius') {
            return result;
        } else if (toUnit === 'fahrenheit') {
            return (result * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            return result + 273.15;
        }
    }

    // Verificar los cambios en los campos para habilitar/deshabilitar el botón
    temperatureInput.addEventListener('input', toggleConvertButton);
    fromUnitSelect.addEventListener('change', toggleConvertButton);
    toUnitSelect.addEventListener('change', toggleConvertButton);

    // Acción al hacer clic en el botón de convertir
    convertBtn.addEventListener('click', () => {
        const temperature = parseFloat(temperatureInput.value);
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;

        if (!isNaN(temperature)) {
            const convertedTemperature = convertTemperature(temperature, fromUnit, toUnit);
            resultDiv.textContent = `La temperatura convertida es: ${convertedTemperature.toFixed(2)}° ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
        } else {
            resultDiv.textContent = 'Por favor, ingresa un valor de temperatura válido.';
        }
    });
});
