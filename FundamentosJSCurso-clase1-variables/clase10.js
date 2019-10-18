var kyo = {
	nombre : 'Kyo',
	apellido : 'Ito',
	edad : 19,
	ingeniero: false,
	cocinero: false,
	cantante: false,
	dj: false,
	guitarrista: false,
	drone: true
}
var asuka = {
	nombre: 'Asuka',
	apellido: 'Langley Sōryū',
	edad: 14,
	piloto: true
}

function imprimirProfesiones(persona) {
	console.log(`${persona.nombre} es: ` )
	//aplico template string
	//no hace falta preguntar si persona.ingeniero es === true por si ya persona.ingeniero = true dentro de un if ya 
	//va a dar que es true
	if (persona.ingeniero){
		console.log('Ingeniero')
	} else {
		console.log('No es ingeniero')
	}
	if (persona.cocinero){
		console.log('Cocinero')
	}
	if (persona.cantante){
		console.log('Cantante')
	}
	if (persona.dj){
		console.log('Dj')
	}
	if(persona.guitarrista){
		console.log('Guitarrista')
	}
	if (persona.drone) {
		console.log('Piloto de drone')
	}
}
function imprimirSiEsMayorDeEdad(persona){
	//var {nombre} = persona
	console.log(`¿Es menor o mayor de edad?`)
	if (persona.edad >= 18 ){

		console.log(`${persona.nombre} es mayor de edad`)
	} else {
		console.log(`${persona.nombre} es menor de edad`)
	}

}

function imprimirSiEresMayor(persona) {
	if (persona.edad >= 18) {
		console.log(`${persona.nombre} es mayor de edad`)
	} else {
		console.log(`${persona.nombre} es menor de edad`)
	}
}

imprimirProfesiones(kyo)
imprimirSiEsMayorDeEdad(kyo)
imprimirSiEresMayor(asuka)
