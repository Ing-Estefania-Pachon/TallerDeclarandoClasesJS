// ! Ejercicio 2: Sistema de empleados
//  Crea un sistema de clases para representar empleados de una empresa:

//  1.Clase Empleado con propiedades: nombre, edad, salarioBase y 
// método calcularSalario() que devuelve el salario base.
class Empleado{
    constructor(nombre, edad, salarioBase){
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase;
    }

    calcularSalario(){
        console.log("Empleado ", this.nombre);
        console.log("El salario base es: ", this.salarioBase);
    }
}

const empleado1 = new Empleado("Juan", "23", 500);
empleado1.calcularSalario();

//  2.Clase Gerente que herede de Empleado y añada bonificacion. 
// Sobrescribe calcularSalario() para que sume la bonificación.

class Gerente extends Empleado{
    constructor(nombre, edad, salarioBase, bonificacion){
        super (nombre, edad, salarioBase);
        this.bonificacion = bonificacion;
    }

    calcularSalario(){
        let salarioTotal = this.salarioBase + this.bonificacion
        console.log("Gerente ", this.nombre);
        console.log("El salario total es: ", salarioTotal);
    }
}

const gerente1 =  new Gerente("Luis", 23, 500, 20);
gerente1.calcularSalario()

//  3.Clase Desarrollador que herede de Empleado y añada lenguaje. El salario es igual al base.
class Desarrollador extends Empleado{
    constructor(nombre, edad, salarioBase, lenguaje){
        super (nombre, edad, salarioBase);
        this.lenguaje = lenguaje;
    }
    calcularSalario(){
        console.log("Desarrollador ", this.nombre);
        console.log("El salario base es: ", this.salarioBase);

    }
}

const desarrollador1 = new Desarrollador("Jim", 23, 500, "Python");
desarrollador1.calcularSalario()