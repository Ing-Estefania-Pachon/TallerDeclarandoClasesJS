// ! Ejercicio 4: Sistema de figuras geométricas
//  Crea un sistema de clases para figuras geométricas:

//  1.Clase Figura con propiedad color y método area() que devuelve 0.
class Figura{
    constructor(color){
        this.color = color;
    }
    area(){
        let area = 0
        console.log("El area de la figura es: ", area);
    }
}

//  2.Clase Rectangulo que herede de Figura y añada base, altura. Sobrescribe area().
class Rectangulo extends Figura{
    constructor(color, base, altura){
        super (color);
        this.base = base;
        this.altura = altura;
    }
    area(){
        let area = this.base * this.altura
        console.log("El área del rectángulo es: ", area);
    }
}

//  3.Clase Circulo que herede de Figura y añada radio. Sobrescribe area().
class Circulo extends Figura{
    constructor(color, radio){
        super (color);
        this.radio = radio;
    }
    area(){
        let area = (Math.PI * this.radio)**2
        console.log("El área del rectángulo es: ", area);
    }
}

const figura1 = new Figura("Azul");
figura1.area();

const rectangulo1 = new Rectangulo("Amarillo", 2, 4)
rectangulo1.area();

const circulo1 = new Circulo("Morado", 5)
circulo1.area();
