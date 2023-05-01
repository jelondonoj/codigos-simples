<!-- Calculadora básica creada usando PHP, HTML, CSS, JS -->

<!DOCTYPE html>
<html>

<head>
	<title>Calculadora</title>

    <!-- CSS -->
	<style type="text/css">
		body {
			background-color: #f2f2f2;
			font-family: Arial, sans-serif;
			font-size: 14px;
			padding: 20px;
		}
		h1 {
			margin-bottom: 20px;
		}
		input[type="button"] {
			background-color: #4CAF50;
			border: none;
			color: #ffffff;
			cursor: pointer;
			font-size: 18px;
			padding: 10px;
			width: 50px;
		}
		input[type="text"] {
			background-color: #ffffff;
			border: none;
			font-size: 18px;
			margin-bottom: 10px;
			padding: 10px;
			width: 250px;
		}
	</style>
    <!-- Fin CSS -->

        <!-- JS -->
	<script type="text/javascript">
		function calculadora() {
			var num1 = parseFloat(document.getElementById('num1').value);
			var num2 = parseFloat(document.getElementById('num2').value);
			var operacion = document.getElementById('operacion').value;
			var resultado;
			if (operacion == '+') {
				resultado = num1 + num2;
			} else if (operacion == '-') {
				resultado = num1 - num2;
			} else if (operacion == '*') {
				resultado = num1 * num2;
			} else if (operacion == '/') {
				resultado = num1 / num2;
			}
			document.getElementById('resultado').value = resultado;
		}
	</script>
    <!-- Fin JS -->

</head>

<body>
        <!-- HTML -->
	<h1>Calculadora</h1>
	<form>
		<input type="text" id="num1" placeholder="Primer número">
		<select id="operacion">
			<option value="+">+</option>
			<option value="-">-</option>
			<option value="*">*</option>
			<option value="/">/</option>
		</select>
		<input type="text" id="num2" placeholder="Segundo número">
		<input type="button" value="=" onclick="calculadora()">
		<input type="text" id="resultado" placeholder="Resultado">
	</form>
</body>
    <!-- Fin HTML -->

</html>
