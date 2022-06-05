
var Persona = {
    Nombre: null,
    Apellido: null,
    Edad: null,
    Sexo: null,
    Direccion: null,
    Ciudad: null,
    Telefono: null,
    Celular: null,
    Cedula: null,
    CorreoElectronico: null,
    Familiares: [],
    Condiciones: [],
    Internamientos: []
}

function VerAnterior() {

    var secciones = Obtener_Secciones();
    if (secciones.length > 0) {

        // Obtengo la secci�n activa
        var tab_activo = Posicion_Tab_Activo();

        // Oculto todas las secciones
        for (var i = 0; i < secciones.length; i++) {
            secciones[i].className = 'inactivo';
        }

        // Visualizo la secci�n anterior
        if ((tab_activo - 1) >= 0) {
            secciones[tab_activo - 1].className = 'activo';
        }
    }

}

function VerSiguiente() {

    var secciones = Obtener_Secciones();
    if (secciones.length > 0) {

        // Obtengo la secci�n de datos activa
        var tab_activo = Posicion_Tab_Activo();

        // Oculto todas las secciones de datos
        for (var i = 0; i < secciones.length; i++) {
            secciones[i].className = 'inactivo';
        }

        // Visualizo la secci�n de datos siguiente
        if ((tab_activo + 1) < secciones.length) {
            secciones[tab_activo + 1].className = 'activo';
        }
    }

}

function Guardar_Datos_Personales() {

    // valido los datos personales
    if (!Valida_Campos(['Nombre', 'Apellido', 'Edad', 'Sexo', 'Direccion', 'Ciudad', 'Telefono', 'Celular', 'Cedula', 'CorreoElectronico'])) {
        return;
    }

    // Guardo los datos personales
    Persona.Nombre = document.getElementById('Nombre').value;
    Persona.Apellido = document.getElementById('Apellido').value;
    Persona.Edad = document.getElementById('Edad').value;
    Persona.Sexo = document.getElementById('Sexo').value;
    Persona.Direccion = document.getElementById('Direccion').value;
    Persona.Ciudad = document.getElementById('Ciudad').value;
    Persona.Telefono = document.getElementById('Telefono').value;
    Persona.Celular = document.getElementById('Celular').value;
    Persona.Cedula = document.getElementById('Cedula').value;
    Persona.CorreoElectronico = document.getElementById('CorreoElectronico').value;

    // Muestro la siguiente seccion de datos
    VerSiguiente();

}

function Agregar_Familiar() {

    // Valido los datos del formulario
    if (!Valida_Campos([ 'FamiliarNombre', 'FamiliarParentezco', 'FamiliarEdad', 'FamiliarMensaje'])) {
        return;
    }

    // Guardo los datos
    Persona.Familiares.push({
        Nombre: document.getElementById('FamiliarNombre').value,
        Parentezco: document.getElementById('FamiliarParentezco').value,
        Edad: document.getElementById('FamiliarEdad').value,
        Mensaje: document.getElementById('FamiliarMensaje').value
    });

    // Limpio los campos
    document.getElementById('FamiliarNombre').value = '';
    document.getElementById('FamiliarParentezco').value = '';
    document.getElementById('FamiliarEdad').value = '';
    document.getElementById('FamiliarMensaje').value = '';

    // Muestro los datos
    var tbody = document.getElementById('tbl-familiares').getElementsByTagName('tbody')[0];
    if (tbody != null) {
        // Insert a row at the end of table
        var newRow = tbody.insertRow(),
            newCell = null,
            newText = null;

        // Nombre
        newCell = newRow.insertCell();
        newText = document.createTextNode(Persona.Familiares[Persona.Familiares.length - 1].Nombre);
        newCell.appendChild(newText);
        // Parentezco
        newCell = newRow.insertCell();
        newText = document.createTextNode(Persona.Familiares[Persona.Familiares.length - 1].Parentezco);
        newCell.appendChild(newText);
        // Edad
        newCell = newRow.insertCell();
        newText = document.createTextNode(Persona.Familiares[Persona.Familiares.length - 1].Edad);
        newCell.appendChild(newText);
        // Mensaje
        newCell = newRow.insertCell();
        newText = document.createTextNode(Persona.Familiares[Persona.Familiares.length - 1].Mensaje);
        newCell.appendChild(newText);
    }
}

function Agregar_Condiciones() {

    // Valido los datos del formulario
    if (!Valida_Campos([ 'EnfermedadNombre', 'EnfermedadTiempo', 'EnfermedadMensaje' ])) {
        return;
    }

    // Guardo  los datos
    Persona.Condiciones.push({
        Nombre: document.getElementById('EnfermedadNombre').value,
        Tiempo: document.getElementById('EnfermedadTiempo').value,
        Mensaje: document.getElementById('EnfermedadMensaje').value
    });

    // Limpio los campos
    document.getElementById('EnfermedadNombre').value = "";
    document.getElementById('EnfermedadTiempo').value = "";
    document.getElementById('EnfermedadMensaje').value = "";

    // Muestro los datos
    var tbody = document.getElementById('tbl-condiciones').getElementsByTagName('tbody')[0];
    if (tbody != null) {
        // Insert a row at the end of table
        var newRow = tbody.insertRow(),
            newCell = null,
            newText = null;

        // Nombre
        newCell = newRow.insertCell();
        newText = document.createTextNode(Persona.Condiciones[Persona.Condiciones.length - 1].Nombre);
        newCell.appendChild(newText);
        // Tiempo
        newCell = newRow.insertCell();
        newText = document.createTextNode(Persona.Condiciones[Persona.Condiciones.length - 1].Tiempo);
        newCell.appendChild(newText);
        // Mensaje
        newCell = newRow.insertCell();
        newText = document.createTextNode(Persona.Condiciones[Persona.Condiciones.length - 1].Mensaje);
        newCell.appendChild(newText);
    }
}

function Agregar_Internamientos() {

    // Valido los datos del formulario
    if (!Valida_Campos([ 'InternamientoFechaIngreso', 'InternamientoFechaSalida', 'InternamientoClinica', 'InternamientoMensaje' ])) {
        return;
    }

    // Guardo  los datos
    Persona.Internamientos.push({
        FechaIngreso: document.getElementById('InternamientoFechaIngreso').value,
        FechaSalida: document.getElementById('InternamientoFechaSalida').value,
        Clinica: document.getElementById('InternamientoClinica').value,
        Mensaje: document.getElementById('InternamientoMensaje').value
    });

    // Limpio los campos
    document.getElementById('InternamientoFechaIngreso').value = '';
    document.getElementById('InternamientoFechaSalida').value = '';
    document.getElementById('InternamientoClinica').value = '';
    document.getElementById('InternamientoMensaje').value = '';

    // Muestro los datos
    var tbody = document.getElementById('tbl-internamientos').getElementsByTagName('tbody')[0];
    if (tbody != null) {
        // Insert a row at the end of table
        var newRow = tbody.insertRow(),
            newCell = null,
            newText = null;

        // FechaIngreso
        newCell = newRow.insertCell();
        newText = document.createTextNode(Persona.Internamientos[Persona.Internamientos.length - 1].FechaIngreso);
        newCell.appendChild(newText);
        // FechaSalida
        newCell = newRow.insertCell();
        newText = document.createTextNode(Persona.Internamientos[Persona.Internamientos.length - 1].FechaSalida);
        newCell.appendChild(newText);
        // Clinica
        newCell = newRow.insertCell();
        newText = document.createTextNode(Persona.Internamientos[Persona.Internamientos.length - 1].Clinica);
        newCell.appendChild(newText);
        // Mensaje
        newCell = newRow.insertCell();
        newText = document.createTextNode(Persona.Internamientos[Persona.Internamientos.length - 1].Mensaje);
        newCell.appendChild(newText);
    }
}

function Obtener_Secciones() {

    var secciones = [];

    var formulario = document.getElementsByTagName('form');
    if (formulario != null && formulario.length > 0) {
        secciones = formulario[0].getElementsByTagName('section');
    }
    return secciones;

}

function Posicion_Tab_Activo() {

    var secciones = Obtener_Secciones();
    for (var i = 0; i < secciones.length; i++) {
        if (secciones[i].className == 'activo') {
            return i;
        }
    }

}

function Valida_Campos(campos) {

    if (campos == null)
        return true;
    else if (campos.length == 0) {
        return true;
    } else {

        var invalido = false;
        for (var i = 0; i < campos.length; i++) {
            var campo = campos[i];
            document.getElementById(campo).className = "";
            if (document.getElementById(campo).value.length == '') {
                document.getElementById(campo).className = "invalido";
                invalido = true;
            }
        }
    }

    return !invalido;

}

function VerDatos() {

    var tbody, newRow, newCell, newText;

    // Obtengo el formulario
    var formulario = document.getElementsByTagName('form');

    // Valido que exista el formulario, si existe lo oculto
    if (formulario != null && formulario.length > 0)
        formulario[0].className = 'inactivo';

    // Obtengo el panel de datos
    var panelDatos = document.getElementById('panel-datos');

    // Valido que exista el panel y lo visualizo
    if (panelDatos != null)
        panelDatos.className = 'activo';

    // Muestro los datos de la persona
    document.getElementById('PersonaNombre').innerHTML = Persona.Nombre;
    document.getElementById('PersonaApellido').innerHTML = Persona.Apellido;
    document.getElementById('PersonaEdad').innerHTML = Persona.Edad;
    document.getElementById('PersonaSexo').innerHTML = Persona.Sexo;
    document.getElementById('PersonaDireccion').innerHTML = Persona.Direccion;
    document.getElementById('PersonaCiudad').innerHTML = Persona.Ciudad;
    document.getElementById('PersonaTelefono').innerHTML = Persona.Telefono;
    document.getElementById('PersonaCelular').innerHTML = Persona.Celular;
    document.getElementById('PersonaCedula').innerHTML = Persona.Cedula;
    document.getElementById('PersonaCorreoElectronico').innerHTML = Persona.CorreoElectronico;

    // Muestor los datos de los familiares
    tbody = document.getElementById('tbl-datos-familiares').getElementsByTagName('tbody')[0];
    if (tbody != null) {
        // Limpio la tabla
        tbody.innerHTML = '';

        // Muestro los datos
        for (var i = 0; i < Persona.Familiares.length; i++) {

            var familia = Persona.Familiares[i];
            // Agrego una fila
            newRow = tbody.insertRow();

            // Agrego el Nombre
            newCell = newRow.insertCell();
            newText = document.createTextNode(familia.Nombre);
            newCell.appendChild(newText);
            // Agrego el Parentezco
            newCell = newRow.insertCell();
            newText = document.createTextNode(familia.Parentezco);
            newCell.appendChild(newText);
            // Agrego la Edad
            newCell = newRow.insertCell();
            newText = document.createTextNode(familia.Edad);
            newCell.appendChild(newText);
            // Agrego el Mensaje
            newCell = newRow.insertCell();
            newText = document.createTextNode(familia.Mensaje);
            newCell.appendChild(newText);

        }
    }

    // Muestor los datos de las condiciones
    tbody = document.getElementById('tbl-datos-condiciones').getElementsByTagName('tbody')[0];
    if (tbody != null) {
        // Limpio la tabla
        tbody.innerHTML = '';

        // Muestro los datos
        for (var i = 0; i < Persona.Condiciones.length; i++) {

            var condicion = Persona.Condiciones[i];
            // Agrego una fila
            newRow = tbody.insertRow();

            // Agrego el Nombre
            newCell = newRow.insertCell();
            newText = document.createTextNode(condicion.Nombre);
            newCell.appendChild(newText);
            // Agrego el Tiempo
            newCell = newRow.insertCell();
            newText = document.createTextNode(condicion.Tiempo);
            newCell.appendChild(newText);
            // Agrego el Mensaje
            newCell = newRow.insertCell();
            newText = document.createTextNode(condicion.Mensaje);
            newCell.appendChild(newText);

        }
    }

    // Muestor los datos de los internamientos
    tbody = document.getElementById('tbl-datos-internamientos').getElementsByTagName('tbody')[0];
    if (tbody != null) {
        // Limpio la tabla
        tbody.innerHTML = '';

        // Muestro los datos
        for (var i = 0; i < Persona.Internamientos.length; i++) {

            var internamiento = Persona.Internamientos[i];
            // Agrego una fila
            newRow = tbody.insertRow();

            // Agrego la Fecha de Ingreso
            newCell = newRow.insertCell();
            newText = document.createTextNode(internamiento.FechaIngreso);
            newCell.appendChild(newText);
            // Agrego la Fecha de Salida
            newCell = newRow.insertCell();
            newText = document.createTextNode(internamiento.FechaSalida);
            newCell.appendChild(newText);
            // Agrego la Clinica
            newCell = newRow.insertCell();
            newText = document.createTextNode(internamiento.Clinica);
            newCell.appendChild(newText);
            // Agrego el Mensaje
            newCell = newRow.insertCell();
            newText = document.createTextNode(internamiento.Mensaje);
            newCell.appendChild(newText);

        }
    }
}

function VerFormulario() {

    // Obtengo el panel de datos
    var panelDatos = document.getElementById('panel-datos');

    // Valido que exista el panel y lo visualizo
    if (panelDatos != null)
        panelDatos.className = 'inactivo';

    // Obtengo el formulario
    var formulario = document.getElementsByTagName('form');

    // Valido que exista el formulario, si existe lo oculto
    if (formulario != null && formulario.length > 0)
        formulario[0].className = 'activo';

}