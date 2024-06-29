# Requisitos juego Adivina el numero secreto
- **FEATURE:** Jugar juego numero secreto
    
    **COMO:** Usuario
    
    **QUIERO:** un video juego
    
    **PARA:** adivinar un numero secreto y pasar un rato divertido
    
    **BACKGROUND**
    
    **DADO**: Que estoy en la aplicación del video juego “Numero secreto”
    
    **ENTONCES**: Se ve un input (desactivado), un boton de “verificar” (desactivado) y un boton de “nuevo juego”
    
    **ESCENARIO**: Numero secreto aleatorio
    
    **CUANDO**: doy click en el boton “nuevo juego”
    
    **ENTONCES**: se crea un numero secreto aleatorio entre 1 y 10, desconocido para el usuario
    
    **Y**: se activa el input y el boton “Verificar”
    
    **ESCENARIO**: Numero mayor al numero secreto
    
    **CUANDO**: Ingreso un numero mayor al numero secreto
    
    **Y**: Doy click en el boton verificar
    
    **ENTONCES**: Se muestra el mensaje “el numero secreto es menor”
    

**ESCENARIO**: Numero menor al numero secreto

**CUANDO**: Ingreso un numero menor al numero secreto

**Y**: Doy click en el boton “verificar”

**ENTONCES**: Se muestra el mensaje “el numero secreto es mayor”

**ESCENARIO**: nuevo juego

**CUANDO**: doy click en el boton “nuevo juego”

**ENTONCES**: inicia un nuevo juego

**ESCENARIO**: Numero adivinado (exitoso)

**CUANDO**: El numero ingresado es igual al numero secreto

**ENTONCES**: Se muestra un mensaje de “Lo adivinaste en ‘x’ intentos”

**ESCENARIO**: Ingreso erroneo de caracteres

**CUANDO**: Ingreso un caracter diferente a numero

**ENTONCES**: no lo permite, solo puedes ingresar numeros del 1 al 10

PENDIENTES

**ESCENARIO**: Ingreso erroneo de numeros

**CUANDO**: Ingreso un numero menor a 0 y mayor a 10

**ENTONCES**: Se muestra un mensaje de “solo puedes ingresar numeros del 1 al 10”

**ESCENARIO**: Cantidad de ingresos maxima

**CUANDO**: he realizado 3 intentos sin adivinar el numero secreto

**ENTONCES**: Se muestra un mensaje de “El numero de intentos maximos es 3. Inicia un nuevo juego!”

**Y**: se activa el boton “Nuevo juego”
