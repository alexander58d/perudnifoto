let boton = document.getElementById("boton");
boton.addEventListener("click", traerDatos);

function traerDatos(){
    let dni = document.getElementById("dni").value;
    fetch("https://apiperu.dev/api/dni/" + dni+"?api_token=c12a3cacfdb9fe4f2d745b39f2a8e0282093c15366e034d526640cdc11d2655f")
    .then((datos)=>datos.json())
    .then((datos)=>{
        console.log(datos.data)
        document.getElementById("doc").value=datos.data.numero
        document.getElementById("nombre").value=datos.data.nombres
        document.getElementById("apellido").value =
          datos.data.apellido_paterno + " " + datos.data.apellido_materno;
        document.getElementById("cui").value=datos.data.codigo_verificacion
    })
}