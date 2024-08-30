function cargar() {
    $.ajax({
        url: './json/index.txt',
        type: 'GET',
        success: function (data) {
            var objeto_json = eval("(" + data + ")"); //leer contenido
            var cadena = "";
            var i;
            for (i = 0; i < objeto_json.eleccion_foto.length; i++) {
                cadena = cadena + "Nombre: <b>" +
                    objeto_json.eleccion_foto[i].nombre + "</b><br/>";
                cadena = cadena + "Ancho: " +
                    objeto_json.eleccion_foto[i].parametros.ancho + "<br/>";
                cadena = cadena + "Alto: " +
                    objeto_json.eleccion_foto[i].parametros.alto + "<br/>";
                cadena = cadena + "Estilo: " +
                    objeto_json.eleccion_foto[i].parametros.estilo + "<br/><br/>";
            }
            $("#caja").html(cadena);
        },
        error: function (xhr, status) {
            alert('Disculpe, existió un problema');
        }
    });
}