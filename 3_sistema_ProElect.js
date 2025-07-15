// ! Ejercicio 3: Sistema de productos electrónicos
//  Modela un sistema de productos electrónicos con:

//  1.Clase Producto con nombre, precio, marca y método descripcion().
class Producto{
    constructor(nombre, precio, marca){
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }
    descripcion(){
        console.log("Información del producto: ");
        console.log("El nombre del producto es: ", this.nombre);
        console.log("El precio del producto es: ", this.precio);
        console.log("La marca del producto es: ", this.marca);        
    }
}

//  2.Clase Telefono que herede de Producto y añada almacenamiento, ram.
class Telefono extends Producto{
    constructor(nombre, precio, marca, almacenamiento, ram){
        super(nombre, precio, marca);
        this.almacenamiento = almacenamiento;
        this.ram = ram;
    }
    descripcion(){
        console.log("Información del teléfono: ");
        console.log("El nombre del producto es: ", this.nombre);
        console.log("El precio del producto es: ", this.precio);
        console.log("La marca del producto es: ", this.marca);        
        console.log("La capacidad de almacenamiento es: ", this.almacenamiento);        
        console.log("La RAM es de: ", this.ram);        
    }
}

//  3.Clase Laptop que herede de Producto y añada procesador, pulgadas.
class Laptop extends Producto{
    constructor(nombre, precio, marca, procesador, pulgadas){
        super (nombre, precio, marca);
        this.procesador = procesador;
        this.pulgadas = pulgadas;
    }
    descripcion(){
        console.log("Información de la Laptop: ");
        console.log("El nombre del producto es: ", this.nombre);
        console.log("El precio del producto es: ", this.precio);
        console.log("La marca del producto es: ", this.marca);        
        console.log("El procesador es: ", this.procesador);        
        console.log("Las pulgadas de la pantalla son: ", this.pulgadas);  
    }
}

const producto1 = new Producto("Audifonos", 300, "Samsung")
producto1.descripcion()

const telefono1 = new Telefono("A33", 300, "Samsung", "126 gb", 8)
telefono1.descripcion()

const laptop1 = new Laptop("Portatil", 2400, "HP", "Intel", 13.3)
laptop1.descripcion()
