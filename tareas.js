
let inputTarea = document.getElementById("tarea");
let btn = document.getElementById("agregar");
let listado = document.getElementById("listado");
let cantidad = document.getElementById("cantidad");
let tabla = document.getElementById("Tabla_Tareas")
let total = 0;
let datos = [];


/* Agregar una tarea*/

btn.onclick = function () {
        let dato = document.getElementById("tarea").value;
        datos.push(dato);
        if (dato !==""){
        localStorage.setItem("Ingreso",JSON.stringify(datos))};
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((response) => response.json())
    .then((data) => console.log(data));

        const tareas = datos ;
        swal("La tarea se agregó correctamente");
    if (inputTarea.value == "") {
        swal("ERROR", "No agregó ninguna tarea!,por favor agregue una", "error");
        return;
    }
      
    let elemento = inputTarea.value;
    let li = document.createElement("li");
    li.textContent = elemento;
    listado.appendChild(li);
    total++;
    cantidad.innerHTML = total;
    let btnEliminar = document.createElement("span");
    btnEliminar.textContent = "\u00d7";
    li.appendChild(btnEliminar);
    
    btnEliminar.onclick = function() {
        swal({
            title: "Eliminar Tarea?",
            text: "La tarea:"+" " + elemento + " " + "quedará sin realizarse!!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Tarea Eliminada", {
                icon: "success",
              })
              li.remove();
              total--;
              cantidad.innerHTML = total;;
              
            } else {
              swal("La tarea sigue activa");
            }
          });
    }
    inputTarea.value = "";
   
}

/* Buscar en LocalStorage si existe la tarea*/

let buscando = document.getElementById("busca_tarea");
let btn1 = document.getElementById("buscar");

btn1.onclick = function() {
  const resultado = JSON.parse(localStorage.getItem("Ingreso"))
  console.log(resultado);

  if (resultado.includes(buscando.value)) {
  swal("OK", "La tarea:"+" " + buscando.value + " "+"sigue activa", "success")}
  else{
    swal("ERROR", "Tarea:"+ " " + buscando.value + " "+ "no encontrada", "error")
  }
  buscando.value = "";
};

/*Ver los elementos que están alojados en LocalStorage*/

let btn3 = document.getElementById("ver");

btn3.onclick = function (){
  const ResultadoTabla = JSON.parse(localStorage.getItem("Ingreso"))
  console.log(ResultadoTabla);
  ResultadoTabla.forEach((tabla)=>{
  document.getElementById("tbbase").innerHTML += '<tbody><td>'+ tabla+'</td></tbody>'})
}

/* Se craean usuarios mediante objetos*/

function Usuarios (Nombre,Contraseña){
  this.Nombre = Nombre;
  this.Contraseña = Contraseña;
};
const Usuario1= new Usuarios ("Pablo","Compras1234");
console.log (Usuario1);
const Usuario2= new Usuarios ("Federico","Ventas1234");
console.log (Usuario2);
const Usuario3= new Usuarios ("Santiago","Depósito1234");
console.log (Usuario3);


