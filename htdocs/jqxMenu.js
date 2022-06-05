 const data = [
    
        {
            "id": "12",
            "text": "Otros resumenes",
            "parentid": "-1",
            
        },
        {
            "text": "Primeros ejercicios",
            "id": "1",
            "parentid": "-1",
            
        }, {
            "id": "2",
            "parentid": "1",
            "text": "Biografia",
            "url": "http://sistprog03.000webhostapp.com/Practica/biografia.html",
        
        }, {
            "id": "6",
            "text": "Resumenes",
            "parentid": "-1",
            
        }, {
            "id": "7",
            "parentid": "6",
            "text": "Arquitectura de app web",
            "url": "https://1drv.ms/w/s!AhDbzaGuZgvvgn44KrGX1lf2pHo9?e=0Qv58H",

        }, {
            "id": "8",
            "text": "Xml y su uso",
            "parentid": "6",
            "url": "https://1drv.ms/w/s!AhDbzaGuZgvvgwLrCnGKrJnaYZ2w?e=D8JhKh",

        }, {
            "id": "9",
            "text": "JSON y su uso",
            "parentid": "6",
            "url": "https://1drv.ms/w/s!AhDbzaGuZgvvgwEJMNJiXOzCEkKm?e=aWc0HQ",

        }, {
            "id": "10",
            "text": "AJAX y su uso",
            "parentid": "6",
            "url": "https://1drv.ms/w/s!AhDbzaGuZgvvgn0BB99f91p8uiJ-?e=YpdgtH",
        }, {
            "id": "11",
            "text": "Modelo MVC y ejemmplos",
            "parentid": "6",
            "url": "https://1drv.ms/w/s!AhDbzaGuZgvvgn-YWshQKRBsM3H1?e=VUIPAr",
        }, {
            "id": "13",
            "text": "Conexion a base de datos",
            "parentid": "12",
            "url": "https://1drv.ms/b/s!AhDbzaGuZgvvgwChO_zRumuhk09s?e=J0Dnxr",
        }, {
            
        }, {
            "id": "14",
            "text": "Spring framework",
            "parentid": "12",
            "url": "https://1drv.ms/w/s!AhDbzaGuZgvvgnzbJGlF0KEAWmhV?e=ETp22Z",
        },{
            "id": "15",
            "text": "Menu del banco",
            "parentid": "-1",
			  "url": "http://sistprog03.000webhostapp.com/MenuBanco/Menu.html",
            
        },{
            "id": "16",
            "text": "Validar cedula",
            "parentid": "-1",
			 "url":  "http://sistprog03.000webhostapp.com/cedula/validarcedula.html",
            
        },{
            "id": "17",
            "text": "Fomulario",
            "parentid": "-1",
			 "url": "http://sistprog03.000webhostapp.com/Proyecto-Formulario/index.html",
			
        }
        ,{
            "id": "18",
            "text": "Codigo QR",
            "parentid": "-1",
			 "url": "http://sistprog03.000webhostapp.com/Practica-Codigo QR/index.html",
            
        },{
            "id": "19",
            "parentid": "1",
            "text": "Etiquetas",
            "url": "http://sistprog03.000webhostapp.com/etiquetas/etiquetas.html",

        },{
            "id": "20",
            "text": "Graficos",
            "parentid": "-1",
			"url": "http://sistprog03.000webhostapp.com/FormularioGraficos/index.html",
            
        }
		
    ]
    

$(document).ready(function () {
    
var builddata = function () {
    var source = [];
    var items = [];
    // build hierarchical source.
    for (i = 0; i < data.length; i++) {
        var item = data[i];
        var label = item["text"];
        var parentid = item["parentid"];
        let url = item["url"];
        var id = item["id"];

        if (items[parentid]) {
            var item = { parentid: parentid, label: label, url: url, item: item };
            if (!items[parentid].items) {
                items[parentid].items = [];
            }
            items[parentid].items[items[parentid].items.length] = item;
            items[id] = item;
        }
        else {
            items[id] = { parentid: parentid, label: label, url: url, item: item };
            source[id] = items[id];
        }
    }
    return source;
}
var source = builddata();

var buildUL = function (parent, items) {
    $.each(items, function () {
        if (this.label) {
            // create LI element and append it to the parent element.
            var li = $("<li><a href='" + (this.url ?? "javascrip:void(0)") + "'>" + this.label + "</a></li>");
            li.appendTo(parent);
            // if there are sub items, call the buildUL function.
            if (this.items && this.items.length > 0) {
                var ul = $("<ul></ul>");
                ul.appendTo(li);
                buildUL(ul, this.items);
            }
        }
    });
}
var ul = $ ("<ul class='nav'></ul>");
ul.appendTo("#jqxMenu");
buildUL(ul, source);


});