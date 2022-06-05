const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	var PrimaryNode = "BEGIN:VCARD" + "\n" + "VERSION: 3.0" + "\n";
    var finalyNode = "END:VCARD";

	PrimaryNode += "N:" + formulario.Nombre.value.trim() + " " + formulario.Apellido.value.trim() + "\n";
	PrimaryNode += "FN:" + formulario.Nombre.value.trim() + " " + formulario.Apellido.value.trim() + "\n";
	PrimaryNode += "Email:" + formulario.Email.value.trim() + "\n";
	PrimaryNode += "Tel:" + formulario.cel.value.trim() + "\n";
	PrimaryNode += "Cel:" + formulario.tel.value.trim() + "\n";
	
	PrimaryNode+= finalyNode;
	QR.makeCode(PrimaryNode);
});
