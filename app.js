import Producto from "./producto.js";
import Inventario from "./inventario.js";

let inventario = new Inventario();

const btnAgregar = document.getElementById("agregar");
btnAgregar.addEventListener('click', () => {
    let tcod = document.getElementById("codigo").value;
    let tnom = document.getElementById("nombre").value;
    let tcan = document.getElementById("cantidad").value;
    let tcos = document.getElementById("costo").value;

    let pro = new Producto(tnom, tcod, tcan, tcos);
    inventario.agregar(pro);
    listado.innerHTML += `Se ha agregado un producto al inventario: ${tcod}.- Nombre: ${tnom} - Cantidad: ${tcan} - Costo: ${tcos}<br>`;
});

const btnEliminar = document.getElementById('eliminar');
btnEliminar.addEventListener('click', ()=>{
    let tcod = document.getElementById("codigo").value;

    inventario.eliminar(tcod);
    listado.innerHTML += `Se ha eliminado un producto ${tcod} del inventario <br>`;
})

const btnListar = document.getElementById("listar");
btnListar.addEventListener('click', ()=>{

    document.getElementById("listadoTotal").innerHTML +=  inventario.listado();
    listado.innerHTML += "Se enlistaron los productos del inventario <br>"
});

const btnListarInvertido = document.getElementById("listarInverso");
btnListarInvertido.addEventListener('click', ()=>{

    document.getElementById("listadoTotal").innerHTML +=  inventario.listadoInverso();
    listado.innerHTML += "Se enlistaron los productos del inventario a la inversa <br>"
});


const btnBuscar = document.getElementById("buscar");
btnBuscar.addEventListener("click",()=>{
    let tcod = document.getElementById("codigo").value; 
    let pro = inventario.busqueda(tcod);
    if(pro === null)
        document.getElementById("listadoTotal").innerHTML += pro;
    else
        document.getElementById("listadoTotal").innerHTML += pro.getInfo();
     
});
