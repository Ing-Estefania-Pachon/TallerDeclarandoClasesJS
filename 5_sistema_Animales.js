// ! Ejercicio 5: Sistema de animales
//  Modela un sistema de animales con:

//  1.Clase Animal con nombre, edad y método emitirSonido().
class Animal{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    emitirSonido(){
        console.log("El animal emitié un sonido ");
    }
}

//  2.Clase Perro que herede de Animal y sobrescriba emitirSonido().
class Perro extends Animal{
    constructor(nombre, edad){
        super (nombre, edad)
    }

    emitirSonido(){
        console.log("El perro hace Guau");
    }
}

//  3.Clase Gato que herede de Animal y sobrescriba emitirSonido().
class Gato extends Animal{
    constructor(nombre, edad){
        super (nombre, edad)
    }

    emitirSonido(){
        console.log("El gato hace Miau");
    }
}

const animal1 = new Animal("Pepillo", 8);
animal1.area();

const perro1 = new Perro("Kira", 5)
perro1.area();

const gato1 = new Gato("Lucha", 4)
gato1.area();