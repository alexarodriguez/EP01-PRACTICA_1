window.onload = function()
{	
	//para calcular area del circulo
	var areacirculo = function areacirculo (radio)
	{
		var areac= Math.PI * Math.pow(radio,2);
		swal("\""+areac+" cm2\"", " Es el area del  circulo", "success");
				event.preventDefault();


	}
	nom_div("acirculo").addEventListener('click', function(event) 
	{
		var radio = nom_div("radio").value;		
		if(nom_div("radio").value!= "") //se valida que no esté vacio el el input text
			{
				areacirculo(radio);// se llama la funcion AREA DEL CIRCULO
			}		
	});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//para calcular area del triangulo
	var areatriangulo = function areatriangulo (base,altura)
	{
		var areatri= base * altura;
		swal("\""+areatri+" cm2\"", " Es el area del  triángulo", "success");
				event.preventDefault();


	}
	nom_div("atriangulo").addEventListener('click', function(event) 
	{
		var base = nom_div("base").value;	
		var altura = nom_div("altura").value;
		if(nom_div("base").value!= "" && nom_div("altura").value!= "") //se valida que no esté vacio el el input text
			{
				areatriangulo(base,altura);// se llama la funcion area triangulo
			}		
	});
	///////////////////////////////////////////////////////////////////////////////////
	//para calcular area del cuadrado
		var areacuadrado = function areacuadrado (lado)
	{
		var areacu= Math.pow(lado,2);
		swal("\""+areacu+" cm2\"", " Es el area del  cuadrado", "success");
				event.preventDefault();

	}
	nom_div("acuadrado").addEventListener('click', function(event) 
	{
		var lado = nom_div("lado").value;		
		if(nom_div("lado").value!= "") //se valida que no esté vacio el el input text
			{
				areacuadrado(lado);// se llama la funcion area cuadrado	
			}		
	});
///////////////////////////////////////////////////////////////////////////////////////////////////
// para contar vocales

var cuentaVocales = function cuentaVocales (vocales){
	var arrayvocales = [["a",0],["e",0],["i",0],["o",0],["u",0]];
	vocales = vocales.toLowerCase();
	var c = 0; // contador 
	for (var i = 0; i < vocales.length; i++) 
	{
	  for (var j = 0; j < arrayVocales.length; j++) 
	  	{
			if(arrayvocales[j][0] === vocales.charAt(i))
			{
		  		arrayvocales[j][1] = arrayvocales[j][1]+1;
			}
    	}
	}
  for (var i = 0; i < arrayvocales.length-1; i++) 
  {
    arrayvocales[arrayvocales.length-1][1] = eval(arrayvocales[arrayvocales.length-1][1] + arrayvocales[i][1]);
  }
	console.log(arrayvocales);
	swal("\""+arrayvocales+"\"", " esta es la respuesta", "success");
	event.preventDefault();
}

nom_div("cvocales").addEventListener('click', function(event) 
	{
		var vocales = nom_div("vocales").value;	
		debungger;	
		if(nom_div("vocales").value!= "") //se valida que no esté vacio el el input text
			{
				cuentaVocales(vocales);// se llama la funcion numero capicua
			}
			else
			{
				swal("ESPERE ", "Por favor ingrese un numero", "warning");//mensaje de error si el input está vacio
				event.preventDefault();
			}			
	});

///////////////////////////////////////////////////////////////////////////////////////////////////
// para contar consonantes
var cuentaConsonantes = function cuentaConsonantes (consonantes){
	var arrayconsonates = [["b",0],["c",0],["d",0],["f",0],["g",0],
                          ["h",0],["j",0],["k",0],["l",0],["m",0],["n",0],["ñ",0],
                          ["p",0],["q",0],["r",0],["s",0],["t", 0],["v",0],["w",0],
                          ["x",0],["y",0],["z",0]];
	var c = 0; // contador 
	consonantes = consonantes.toLowerCase();
	for (var i = 0; i < consonantes.length; i++) 
	{
	  for (var j = 0; j < arrayconsonates.length; j++) 
	  	{
			if(arrayconsonates[j][0] === consonantes.charAt(i))
			{
		  		arrayconsonates[j][1] = arrayconsonates[j][1]+1;
			}
    	}
	}
  for (var i = 0; i < arrayconsonates.length-1; i++) 
  {
    arrayconsonates[arrayconsonates.length-1][1] = eval(arrayconsonates[arrayconsonates.length-1][1] + arrayconsonates[i][1]);
  }
	console.log(arrayconsonates);
	swal("\""+arrayconsonates+"\"", " Esta es la respuesta", "success");
	event.preventDefault();
}

nom_div("cconsonantes").addEventListener('click', function(event) 
	{
		var consonantes = nom_div("consonantes").value;		
		if(nom_div("consonantes").value!= "") //se valida que no esté vacio el el input text
			{
				Cuenta(vocales);// se llama la funcion numero capicua
			}
			else
			{
				swal("ESPERE ", "Por favor ingrese un numero", "warning");//mensaje de error si el input está vacio
				event.preventDefault();
			}			
	});

///////////////////////////////////////////////////////////////////////////////////////////////////
// para juego numero capicua

var numerocapicua = function numerocapicua(numero)
	{
		var numInicial= numero; 
		var partenum =numInicial.split("");// separa los numeros  del string
		var tmp; //variable temporal donde se va a guardar "numInicial" para que no sea modificada		
		//numInicial = numInicial.toLowerCase(); // convertin enminusculas el string 
		tmp = JSON.parse(JSON.stringify(partenum));// clorar la variable palinInicial
		var validar=partenum.reverse(); // se invierte el string palinInicial  y se guarda en una nueva variable
		var c =0; // crear contador para que me recorra todo el string

		for (var j = 0; j< validar.length; j++) 
		{
			validar[j]==tmp[j]? c++ : console.log("esta funcionando");
		}
			if (c==validar.length) 
			{
				swal("\""+frase+"\"", " Es un numero capicua", "success");
				event.preventDefault();
			}
			else
			{
				swal("\""+frase+"\"", " NO es un numero capicua", "error");
				event.preventDefault();
			}
	}

nom_div("validarNumero").addEventListener('click', function(event) 
	{
		var numero = nom_div("numero").value;		
		if(nom_div("numero").value!= "") //se valida que no esté vacio el el input text
			{
				numerocapicua(numero);// se llama la funcion numero capicua
			}
			else
			{
				swal("ESPERE ", "Por favor ingrese un numero", "warning");//mensaje de error si el input está vacio
				event.preventDefault();
			}			
	});






	function nom_div(div)
	{
		return document.getElementById(div);
	}
}