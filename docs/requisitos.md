**Menú documentación**\
[Intro](https://github.com/Wilalz/App-juego-Adivina-el-numero-secreto/blob/d792c512f3488904c07ea319363d9187eccf3aec/docs/intro_documentacion.md) - - -  [Requisitos](https://github.com/Wilalz/App-juego-Adivina-el-numero-secreto/blob/main/docs/requisitos.md) - - -  [Próximas funcionalidades](proximas_funcionalidades.md)

---

# Requisitos juego Adivina el número secreto

**FEATURE:** Jugar al Juego del número secreto\
**Como:** Usuario\
**Quiero:** Un videojuego\
**Para:** Adivinar un número secreto y pasar un rato divertido


**BACKGROUND:**\
**Dado** Que estoy en la aplicación del videojuego “número secreto”\
**Entonces:** Veo un campo de entrada (desactivado), un botón “Verificar” (desactivado) y un botón “Nuevo Juego” (activado)

**Escenario:** Generación de un número secreto aleatorio\
**Cuando:** Hago clic en el botón “Nuevo Juego”\
**Entonces:** Se genera un número secreto aleatorio entre 1 y 10, desconocido para el usuario\
**Y:** Se activa el campo de entrada y el botón “Verificar”

**Escenario:** Intento con un número mayor al múmero secreto\
**Cuando:** Ingreso un número mayor al número secreto\
**Y:** Hago clic en el botón “Verificar”\
**Entonces:** Se muestra el mensaje “El número secreto es menor”

**Escenario:** Intento con un número menor al número secreto\
**Cuando:** Ingreso un número menor al número secreto\
**Y:** Hago clic en el botón “Verificar”\
**Entonces:** Se muestra el mensaje “El número secreto es mayor”

**Escenario:** Inicio de un nuevo juego\
**Cuando:** Hago clic en el botón “Nuevo Juego”\
**Entonces:** Se inicia un nuevo juego

**Escenario:** Adivinando el número correctamente (Éxito)\
**Cuando:** El número ingresado es igual al número secreto\
**Entonces:** Se muestra el mensaje “¡Lo adivinaste en ‘x’ intentos!”

**Escenario:** Ingreso erróneo de caracteres\
**Cuando:** Ingreso un carácter que no es un número\
**Entonces:** No se permite; solo se pueden ingresar números del 1 al 10

**Escenario:** Ingreso erróneo de números\
**Cuando:** Ingreso un número menor a 0 o mayor a 10\
**Entonces:** Se muestra un mensaje de “Solo puedes ingresar números del 1 al 10”

**Escenario:** Límite de intentos alcanzado\
**Cuando:** He realizado 3 intentos sin adivinar el número secreto\
**Entonces:** Se muestra el mensaje “El número máximo de intentos es 3. ¡Inicia un nuevo juego!”\
**Y:** Se activa el botón “Nuevo Juego”

**Escenario:** Hacer click en "Validar" sin haber ingresado un numero\
**Cuando:** No he ingresado ningun numero y hago click en el boton "Validar"\
**Entonces:** Debe mostar mensaje "Ingresa un numero del 1 al 10"

**Escenario:** Hacer click en "Validar" sin haber ingresado un numero\
**Cuando:** No he ingresado ningun numero y hago click en el boton "Validar"\
**Entonces:** Debe mostar mensaje "Ingresa un numero del 1 al 10"


