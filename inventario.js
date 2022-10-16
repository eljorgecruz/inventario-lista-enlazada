export default class Inventario{
    constructor(){
        this.primero = null;
        this.size = 0;
    }

    getLista(){
        return this.lista;
    }

    agregar(nuevo){

        if(!this.primero) {
            this.primero = nuevo
        } else {
            let current = this.primero;

            while(current.next){
                current = current.next;
            };
            current.next = nuevo;
        }
        this.size++
    }

    agregarInicio(nuevo){
        primero = this.primero;

        nuevo.next = primero; 
    }

    eliminar(numero){
        let current = this.primero;
        let previus = null;

        while(current != null){
            if(current.numero === numero){
                if(!previus){
                    this.primero = current.next;
                }else {
                    previus.next = current.next;
                }
                this.size--;
                return current.numero;
            }
            else{
                previus=current;
                current=current.next;
            }
        }
        return null;
    }

    indice(codigo){
        for (let i = 0; i < this.lista.length; i++){
            if (codigo === this.lista[i].codigo){
                return i;
            }
        }
        return this.lista.length + 1;
    }

    listado(){
        if(!this.size){
            return null;
        } else {
            let current = this.primero;
            let result = '';
            
            while (current) {
                result += current.numero + '->';
                current = current.next;
            }
    
            return result;
        }
    }

    listadoInverso(){
        if(!this.size){
            return null;
        } else {
            let current = this.primero;
            let result = '';
            
            while (current) {
                result = current.numero + '->' + result ;
                current = current.next;
            }
    
            return result;
        }
    }

    busqueda(codigo){
        let inicio = 0;
        let fin = this.lista.length - 1;
        let mitad = Math.floor((inicio + fin) / 2);
        let resultado = null;
        while (inicio <= fin) {
            if (this.lista[mitad].codigo === codigo) {
                resultado = this.lista[mitad];
                break;
            } else if (this.lista[mitad].codigo < codigo) {
                inicio = mitad + 1;
            } else
                fin = mitad - 1;
            mitad = Math.floor((inicio + fin) / 2);
        }
        return resultado;
    }
}