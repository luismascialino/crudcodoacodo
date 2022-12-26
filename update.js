console.log(location.search)     // lee los argumentos pasados a este formulario
var args = location.search.substr(1).split('&');  
//separa el string por los “&” creando una lista [“id=3” , “nombre=’tv50’” , ”precio=1200”,”stock=20”]
console.log(args)
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
//decodeUriComponent elimina los caracteres especiales que recibe en la URL 
document.getElementById("txtId").value = decodeURIComponent(parts[0][1])
document.getElementById("txtNombre").value = decodeURIComponent(parts[1][1])
document.getElementById("txtPrecio").value = decodeURIComponent(parts[2][1])
document.getElementById("txtStock").value =decodeURIComponent( parts[3][1])
function modificar() {
    let id = document.getElementById("txtId").value
    let n = document.getElementById("txtNombre").value
    let p = parseFloat(document.getElementById("txtPrecio").value)
    let s = parseInt(document.getElementById("txtStock").value)
    let producto = {
        nombre: n,
        precio: p,
        stock: s
    }
    let url = "http://localhost:5000/productos/"+id
    var options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            window.location.href = "./index.html" 
        //NUEVO,  si les da error el fetch  comentar esta linea que puede dar error  
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
