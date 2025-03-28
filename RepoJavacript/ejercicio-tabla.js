const datos = [
    { id: 1, nombre: "Juan", apellido: "Pérez", correo: "juan.perez@example.com", telefono: "1234567890", comentario: "Sin comentarios" },
    { id: 2, nombre: "María", apellido: "López", correo: "maria.lopez@example.com", telefono: "9876543210", comentario: "Pendiente de revisión" },
    { id: 3, nombre: "Carlos", apellido: "Hernández", correo: "carlos.hernandez@example.com", telefono: "5551234567", comentario: "Favor de contactar por las mañanas" },
    { id: 4, nombre: "Ana", apellido: "Ramírez", correo: "ana.ramirez@example.com", telefono: "4449876543", comentario: "Enviar información detallada" },
    { id: 5, nombre: "Luis", apellido: "García", correo: "luis.garcia@example.com", telefono: "3334445556", comentario: "Cliente frecuente" },
    { id: 6, nombre: "Sofía", apellido: "Martínez", correo: "sofia.martinez@example.com", telefono: "1112223334", comentario: "Requiere llamada urgente" },
    { id: 7, nombre: "Miguel", apellido: "Gómez", correo: "miguel.gomez@example.com", telefono: "7778889990", comentario: "Interesado en promociones" },
    { id: 8, nombre: "Lucía", apellido: "Sánchez", correo: "lucia.sanchez@example.com", telefono: "6667778881", comentario: "Solicitud en proceso" },
    { id: 9, nombre: "Pedro", apellido: "Ortiz", correo: "pedro.ortiz@example.com", telefono: "2223334445", comentario: "Prefiere contacto por correo" },
    { id: 10, nombre: "Elena", apellido: "Castillo", correo: "elena.castillo@example.com", telefono: "9998887776", comentario: "Cliente nuevo" }
  ];
  
tabla=document.querySelector('#tabla');

function crearTabla(){
    var cadena="<table>";
    cadena=cadena+"<thead>";
    cadena=cadena+"<tr>";
    cadena=cadena+"<th>ID</th>";
    cadena=cadena+"<th>Nombre</th>";
    cadena=cadena+"<th>Apellido</th>";
    cadena=cadena+"<th>Correo</th>";
    cadena=cadena+"<th>Telefono</th>";
    cadena=cadena+"<th>Comentario</th>";
    cadena=cadena+"<tr>";
    cadena=cadena+"<thead>"; 
    cadena=cadena+"<tbody>";
    for(const dato of datos){
        cadena=cadena+"<tr>";
        cadena=cadena+"<td>"+ dato.id + "</td>";
        cadena=cadena+"<td>"+ datos.nombre + "</td>";
        cadena=cadena+"<td>"+ datos.apellido + "</td>";
        cadena=cadena+"<td>"+ datos.correo + "</td>";
        cadena=cadena+"<td>"+ datos.telefono + "</td>";
        cadena=cadena+"<td>"+ datos.comentario + "</td>";
        cadena=cadena+"</tr>";
    }
    cadena=cadena+"</tbody>";
    cadena=cadena+"</table>";
    tabla.innerHTML=cadena;
}

function agregarFila(){
    const id=document.getElementById("id").value;
    const nombre=document.getElementById("nombre").value;
    const apellido=document.getElementById("apellido").value;
    const correo=document.getElementById("correo").value;
    const telefonp=document.getElementById("telefono").value;
    const comentario=document.getElementById("comentario").value;
//Validamos que no haya campos vacios
if(id && nombre && apellido && correo && telefono && comentario){
    //crear una nueva fila en la tabla con los datos del formulario
    body = tabla.getElementsByTagName("tbodt")[0];
    const nuevaFila=body.insertRow();
    nuevaFila.innerHTML`
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${}</td>
    <td>${id}</td>
    <td>${id}</td>
     <td>${id}</td>
    `:
}
else{
    alert(id);  
}
crearTabla();