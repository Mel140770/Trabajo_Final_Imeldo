function confirmar(formulario){
    // declaración de variables
    var resultado;
    var mensaje;
    var nombre_valido;
    var apellido_valido;
    var num_vali2;
    var validEmail;
    var condiciones_y_envio;
    mensaje = "";
    
    // empieza la programación de la función

    //Condición de rellenar presupuesto
    if(formulario.presupuesto_estimado.value.length == 0){
        resultado = "no";
        mensaje = mensaje + 'El presupuesto debe tener un valor. \n';
    }else
    {
        resultado = "si";
    }
    //Condición de checkbox
    condiciones_y_envio = document.getElementById('aceptar');
    if(condiciones_y_envio.checked)
    {
        resultado = "si";
    }else
    {
        resultado = "no";
        mensaje = mensaje + 'Debe seleccionar que ha leido la política de privacidad. \n';
    }
    //Condición de nombre
    nombre_valido = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if((formulario.nombre.value.length == 0) || (formulario.nombre.value.length > 15) || 
    (!nombre_valido.test(document.getElementById('nombre').value)))
    {
        resultado = "no";
        mensaje = mensaje + 'El nombre es obligatorio y debe tener max. 15 caracteres tipo letra. \n';
    }else
    {
        resultado = "si";
    }
    //Condición de apellidos
    apellido_valido = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if((formulario.apellidos.value.length == 0) || (formulario.apellidos.value.length > 40) || 
    (!apellido_valido.test(document.getElementById('apellidos').value)))
    {
        resultado = "no";
        mensaje = mensaje + 'Los apellidos son obligatorios y debe tener max. 40 caracteres tipo letra. \n';
    }else
    {
        resultado = "si";
    }
    //Condición de número de teléfono
    num_vali2 = /^\d+$/; // el \d equivale a [0-9]
    if((!num_vali2.test(document.getElementById('tel_cont').value)) || (formulario.tel_cont.value.length > 9) || (formulario.tel_cont.value.length == 0))
    {
        resultado = "no";
        mensaje = mensaje + 'El numero de teléfono es obligatorio, solo se aceptan numeros del 0 al 9 y como máx. 9 numeros. \n';
    }else
    {
        resultado = "si";
    }
    //Condición de email
    validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if((!validEmail.test(document.getElementById('email').value)) || (formulario.email.value.length == 0))
    {
        resultado = "no";
        mensaje = mensaje + 'El email es obligatorio y válido. \n';
    }else
    {
        resultado = "si";
    }
    //Condición de envío
    if (resultado =='si'){               /*si no ha ocurrido ningún error*/
        document.formulario.submit()    /* se envía el formulario*/
    }else
    {              /* si hay errores*/
        alert(mensaje);      /* se muestran en un mensaje*/
        return false;   /* Este return impide que los datos escritos se borren antes de enviarlo */
    }

}

function calcularPresupuesto() {
    // Valores de las opciones seleccionadas
    const opcionesPrecios = [0,100,200,300];
    const descuentos = [0,0.20,0.15,0.10];
    let precioSeleccionado = opcionesPrecios[document.getElementById('seleccion_pr').value];
    let descuentoSeleccionado = descuentos[document.getElementById('seleccion_pl').value];

    // Sumar valores de los checkboxes
    let extraTotal = 0;
    if (document.getElementById('extra1').checked) extraTotal += 10;
    if (document.getElementById('extra2').checked) extraTotal += 20;
    if (document.getElementById('extra3').checked) extraTotal += 30;
    if (document.getElementById('extra4').checked) extraTotal += 40;

    // Calcular presupuesto
    let subtotal = precioSeleccionado + extraTotal;
    let descuentoTotal = subtotal * descuentoSeleccionado;
    let presupuestoFinal = subtotal - descuentoTotal;

    // Mostrar resultado
    document.getElementById('presupuesto_estimado').value = presupuestoFinal.toFixed(2)+" €";
}

function borrarResultado() {
    document.getElementById('presupuesto_estimado').value = '';
    document.getElementById('seleccion_pr').selectedIndex = 0;
    document.getElementById('seleccion_pl').selectedIndex = 0;
    document.getElementById('extra1').checked = false;
    document.getElementById('extra2').checked = false;
    document.getElementById('extra3').checked = false;
    document.getElementById('extra4').checked = false;
}