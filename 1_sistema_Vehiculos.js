// ! Ejercicio 1: Sistema básico de vehículos
// Crea un sistema de clases para representar diferentes tipos de vehículos. 

// 1. Una clase Vehiculo con propiedades: marca, modelo, año y un 
//   método obtenerDetalles() que devuelva un string con toda la información.
class Vehiculo{
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerDetalles(){
        console.log("La información del vehículo es: ");
        console.log("La marca es: ", this.marca);
        console.log("El modelo es: ", this.modelo);
        console.log("El año es: ", this.año);
    }
}

const vehiculo1 = new Vehiculo("Toyota", "RTX", 2024)
vehiculo1.obtenerDetalles()

//  2. Una clase Coche que herede de Vehiculo y añada la propiedad numeroPuertas.

// ! HERENCIA

class Coche extends Vehiculo{
    constructor(marca, modelo, año, numeroPuertas){
        super(marca, modelo, año)
        this.numeroPuertas = numeroPuertas;
    }
    obtenerDetalles(){
        console.log("La información del coche es: ");
        console.log("La marca es: ", this.marca);
        console.log("El modelo es: ", this.modelo);
        console.log("El año es: ", this.año);
        console.log("La cantidad de puertas es: ", this.numeroPuertas);
    }
}

const coche1 = new Coche("Toyota", "RTX", 2024, 2)
coche1.obtenerDetalles();

//  3. Una clase Moto que herede de Vehiculo y añada la propiedad cilindrada.

// ! HERENCIA

class Moto extends Vehiculo{
    constructor(marca, modelo, año, cilindrada){
        super(marca, modelo, año)
        this.cilindrada = cilindrada;
    }
    obtenerDetalles(){
        console.log("La información de la moto es: ");
        console.log("La marca es: ", this.marca);
        console.log("El modelo es: ", this.modelo);
        console.log("El año es: ", this.año);
        console.log("La cilindrada de la moto es: ", this.cilindrada);
    }
}

const moto1 = new Moto("Toyota", "RTX", 2024, 125)
moto1.obtenerDetalles();
