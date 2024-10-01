function ejercicio1() {
    let numeros = [1,2,3,4,5]
    let numerosDuplicados = numeros.map((numero)=>{
        return numero * 2
    })
    document.write('los numeros son:' + numeros + "<br>" +'los numeros duplicados son:' + numerosDuplicados)
}

function ejercicio2() {
    let celsius = [0, 10, 20, 30, 40]
    let farenheit = celsius.map(function(celsius) {
        return (celsius * 9/5) + 32
    })
    document.write("los grados celsius son: " + celsius + "<br>"+ "los grados farenheit son: "+ farenheit)
}

function ejercicio3() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let impares = numeros.filter(function(numero){
        if (numero % 2 == 1 ) {
            return numero
        }
    })        
    document.write("los numeros pares son: "+ numeros+ "<br>" + "los numeros impares son: " + impares )
}

function ejercicio4() {
    let numeros =  [10, 25, 32, 8, 5, 42, 17]
    let mayores = numeros.filter(function(numero){
        if (numero > 20) {
            return numero
        }
    })
    document.write("los numeros son: "+ numeros+"<br>"+ "los numeros mayores a 20 son: "+ mayores)
}

function ejercicio5() {
    let numeros = [15, 25, 35, 45, 55, 65]
    let mayor = numeros.find(function(numero){
        if (numero>50) {
            return numero
        }
    })
    document.write("los numeros son: "+ numeros+"<br>"+ "el primer numero mayor de 50 es: "+ mayor)
}

function ejercicio6() {
    let nombres = ['casa', 'arbol', 'estrella', 'sol']
    let mayusculas = nombres.map(function(nombre){
        return nombre.toUpperCase()
    })
    document.write("los nombres son: "+ nombres+"<br>"+ "los nombres en mayuscula son: "+ mayusculas)
}

function ejercicio7() {
    let  nombres = ['rojo', 'azul', 'verde']
    let asterisco = nombres.map(function(nombre){
        return nombre + "*"
    })
    document.write("los nombres son: "+ nombres+"<br>"+ "los nombres con asteriscos son: " + asterisco)
}

function ejercicio8() {
    let palabras = ['casa', 'arbol', 'estrella', 'sol']
    let cortas = palabras.filter(function(palabra){
        if (palabra .length < 5) {
            return palabra
        }
    })
    document.write("las palabras son: "+ palabras+"<br>"+ "las palabras cortas son: " + cortas)
}

function ejercicio9() {
    let numeros =  [-5, 10, -2, 4, 0, -1]
    let negativos = numeros.filter(function(numero){
        return numero<0
    })
    document.write("los numeros son: "+ numeros+"<br>"+ "los negativos son: " + negativos)
}

function ejercicio10() {
    let nombres =  ['luna', 'estrella', 'cometa', 'galaxia']
    let primer = nombres.find(function(nombre){
        return nombre.length>5
    })
    document.write("los nombres son: "+ nombres+ "<br>"+ "el primer nombre mayor de 5 letras es: "+ primer)
}

function ejercicio11() {
    let numeros = [1,2,3,4,5]
    let numerosDuplicados = numeros.map((numero)=>{
        return numero * 3
    })
    document.write('los numeros son:' + numeros + "<br>" +'los numeros duplicados son:' + numerosDuplicados)
}

function ejercicio12() {
    let palabras = ['elefante', 'perro', 'espejo', 'gato']
    let palabrasConE = palabras.filter(function(palabra){
        if(palabra.charAt(0) == "e"){
            return palabra
        }
    })
    document.write('las palabras son:' + palabras + "<br>" + 'las palabras con que empiezan con e son: ' + palabrasConE)
}

function ejercicio13() {
    let  numeros = [5, 16, 20, 33, 40]
    let divisible = numeros.find(function(numero){
        return numero % 4 == 0
    })
    document.write('los numeros son:' + numeros + "<br>" +'el primer numero divisible por 4 es:' + divisible)
}

function ejercicio14() {
    let numeros =  [1.2, 2.5, 3.8, 4.1]
    let numerosRedondeados = numeros.map((numero)=>{
        return Math.round(numero)
    })
    document.write('los numeros son:' + numeros + "<br>" +'los numeros redondeados son:' + numerosRedondeados)
}

function ejercicio15() {
    let numeros =  [45, 60, 30, 80, 100]
    let mayores = numeros.filter(function(numero){
        return numero >= 50
    })
    document.write('los numeros son:' + numeros + "<br>" + 'los numeros mayores o iguales a 50 son: '+mayores)
}

function ejercicio16() {
    let palabras = ['sol', 'luna', 'estrella', 'cometa']
    let primera = palabras.find(function(palabra){
        return palabra.includes("a")
    })
    document.write('las palabras son:' + palabras + "<br>" + 'la palabra que empiezan con a son: ' + primera)
}

function ejercicio17() {
    let numeros =  [5, 10, 15, 20]
    let numerosSumados = numeros.map((numero)=>{
        return numero + 5
    })
    document.write('los numeros son:' + numeros + "<br>" +'los numeros duplicados son:' + numerosSumados)
}

function ejercicio18() {
    let nombres = ['Casa', 'ARbOl', 'Sol']
    let minuscula = nombres.map(function(nombre){
        return nombre.toLowerCase()
    })
    document.write("los nombres son: "+ nombres+"<br>"+ "los nombres en minuscula son: "+ minuscula)
}

function ejercicio19() {
    let numeros = [12, 3, 5, 7, 10, 20, 25]
    let numerosPares = numeros.filter(function(numero){
        return numero % 2 == 0
    })
    document.write('los numeros son:' + numeros + "<br>" +'los numeros pares son:' + numerosPares)
}

function ejercicio20() {
    let numeros = [5, 10, -3, 2, -8, 7]
    let numeroNegativo = numeros.find(function(numero){
        return numero < 0
    })
    document.write('los numeros son:' + numeros + "<br>" +'el primer numero negativo es:' + numeroNegativo)
}

function ejercicio21() {
    let numeros = [10, 20, 30, 40]
    let numerosDivididos = numeros.map((numero)=>{
        return numero / 2
    })
    document.write('los numeros son:' + numeros + "<br>" +'los numeros dividos son:' + numerosDivididos)
}

function ejercicio22() {
    let palabras =  ['camino', 'casa', 'edificio', 'ciudad']
    let palabrasLargas = palabras.filter(function(palabra){
        return palabra.length > 6
    })
    document.write('las palabras son:' + palabras + "<br>" + 'las palabras largas son: '+palabrasLargas)
}

function ejercicio23() {
    let numeros = [4, 9, 13, 22, 31]
    let numeroImpar = numeros.find(function(numero){
        return numero > 10 && numero % 2==1
    })
    document.write('los numeros son:' + numeros + "<br>" + 'el primer numero impar despues de 10 es: '+numeroImpar)
}

function ejercicio24() {
    let frutas = ['manzana', 'naranja', 'pera']
    let palabraFrutas = frutas.map(function(fruta){
        return "fruta "+fruta
    })
    document.write('las frutas son:' + frutas + "<br>" + 'las frutas son: ' + palabraFrutas)
}

function ejercicio25() {
    let numeros = [10, 20, 30, 40, 50, 60]
    let numerosPromedio = numeros.filter(function(numero){
        let promedio = numeros.reduce((a, b) => a + b, 0) / numeros.length;
        return numero > promedio
    })
    document.write('los numeros son:' + numeros + "<br>" + 'los numeros mayores al promedio son: ' +numerosPromedio)
}

let opcion = Number(prompt('Ingresa un ejercicio (1-25)'))


switch (opcion) {
    case 1:
        ejercicio1()
        
        break;
    case 2:
        ejercicio2()
        break;
    case 3:
        ejercicio3()
        break;
    case 4:
        ejercicio4()
        break;
    case 5:
        ejercicio5()
        break;
    case 6:
        ejercicio6()
        break;
    case 7:
        ejercicio7()
        break;
    case 8:
        ejercicio8()
        break;
    case 9:
        ejercicio9()
        break;
    case 10:
        ejercicio10()
        break;
    case 11:
        ejercicio11()
        break;
    case 12:
        ejercicio12()
        break;
    case 13:
        ejercicio13()
        break;
    case 14:
        ejercicio14()
        break;
    case 15:
        ejercicio15()
        break;
    case 16:
        ejercicio16()
        break;
    case 17:
        ejercicio17()
        break;
    case 18:
        ejercicio18()
        break;
    case 19:
        ejercicio19()
        break;
    case 20:
        ejercicio20()
        break;
    case 21:
        ejercicio21()
        break;
    case 22:
        ejercicio22()
        break;
    case 23:
        ejercicio23()
        break;
    case 24:
        ejercicio24()
        break;
    case 25:
        ejercicio25()
        break;
    default:

        break;
}