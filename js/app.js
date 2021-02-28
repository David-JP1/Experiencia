// Objeto con las propiedades
 var pApp = {
 	body: document.querySelector('body'),
 	cObjetivo: document.querySelector('.objetivo'),
 	imgCompu: document.querySelector('.compu'),
 	divObjetivo: null,
 	fondo: null,
 	divEmergenteExperiencias: null,
 	expTec1: document.querySelector('#expTec1'),
 	expTec2: document.querySelector('#expTec2'),
 	expTec3: document.querySelector('#expTec3'),
 	expTec4: document.querySelector('#expTec4'),
 	expTec5: document.querySelector('#expTec5'),
 	expDes1: document.querySelector('#expDes1'),
 	expDes2: document.querySelector('#expDes2'),
 	expDes3: document.querySelector('#expDes3'),
 	expDes4: document.querySelector('#expDes4'),
 	expDes5: document.querySelector('#expDes5'),
 	expDes6: document.querySelector('#expDes6'),
 	expDes7: document.querySelector('#expDes7'),
 	expDes8: document.querySelector('#expDes8'),
 	tituloExpTec: null,
 	btnCerrar: null,
 	listaEsxp: null,
 	animacion:'slideLeft',
 	txtObjetivo: "<p>Soy proactivo y estoy en continuo aprendizaje sobre conocimientos enfocados en el desarrollo de software. Tras mis anteriores trabajos puedo garantizar mi capacidad de trabajo en equipo, organización, atención al detalle y resolución de problemas enfocados a objetivos.</p>"

 }

 // Objeto con los Metodos

 var mApp = {
 	inicioApp: function(){
 		
 		pApp.cObjetivo.appendChild(document.createElement('DIV')).setAttribute('id','objetivo');
 		pApp.divObjetivo = document.querySelector('#objetivo');
 		pApp.divObjetivo.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
 		pApp.divObjetivo.style.fontFamily = 'sans-serif';
 		pApp.divObjetivo.style.visibility = 'hidden';
		pApp.divObjetivo.innerHTML = pApp.txtObjetivo;

 	},
 	salirDescripcion : function(){
		
		pApp.fondo.parentNode.removeChild(pApp.fondo);

 	}
 }
 
// Todos los EventListeners
pApp.cObjetivo.addEventListener("mouseenter", function(e){

		if(window.matchMedia('(max-width:575px)').matches){
		
			pApp.divObjetivo.style.fontSize = "10px";
			pApp.divObjetivo.style.marginTop = "5px";
			pApp.divObjetivo.style.fontWeight = "bold";
			pApp.divObjetivo.style.paddingLeft = "30px";

			pApp.imgCompu.style.display = 'none';
			pApp.divObjetivo.style.visibility = 'visible';

		}else if(window.matchMedia('(max-width: 767px) and (min-width: 576px)').matches){
		
			pApp.divObjetivo.style.fontSize = "14px";
			pApp.divObjetivo.style.marginTop = "3px";
			pApp.divObjetivo.style.fontWeight = "bold";
			pApp.divObjetivo.style.paddingLeft = "5px";

			pApp.imgCompu.style.display = 'none';
			pApp.divObjetivo.style.visibility = 'visible';

		}else if(window.matchMedia('(max-width: 991px) and (min-width: 768px)').matches){

			pApp.divObjetivo.style.fontSize = "16px";
			pApp.divObjetivo.style.marginTop = "2px";
			pApp.divObjetivo.style.fontWeight = "bold";
			pApp.divObjetivo.style.paddingLeft = "5px";

			pApp.imgCompu.style.display = 'none';
			pApp.divObjetivo.style.visibility = 'visible';

		}else if(window.matchMedia('(max-width: 1199px) and (min-width: 992px)').matches){

			pApp.divObjetivo.style.fontSize = "18px";
			pApp.divObjetivo.style.marginTop = "5px";
			pApp.divObjetivo.style.fontWeight = "bold";
			pApp.divObjetivo.style.paddingLeft = "50px";

			pApp.imgCompu.style.display = 'none';
			pApp.divObjetivo.style.visibility = 'visible';

		}else{
			pApp.divObjetivo.style.fontSize = "18px";
			pApp.divObjetivo.style.marginTop = "5px";
			pApp.divObjetivo.style.fontWeight = "bold";
			pApp.divObjetivo.style.paddingLeft = "50px";

			pApp.imgCompu.style.display = 'none';
			pApp.divObjetivo.style.visibility = 'visible';
		}

	});

pApp.cObjetivo.addEventListener("mouseleave",function(e){
	pApp.divObjetivo.style.visibility = 'hidden';
	pApp.imgCompu.style.display = "block";
});

pApp.expTec1.addEventListener("click",function(e){

	 	pApp.body.appendChild(document.createElement('DIV')).setAttribute('id', 'fondo');
 		pApp.fondo = document.querySelector('#fondo');
 		pApp.fondo.style.width = '100%';
 		pApp.fondo.style.height = '100%';
 		pApp.fondo.style.position = 'fixed';
		pApp.fondo.style.zIndex = '10';
		pApp.fondo.style.background = 'rgba(0,0,0,.9)';
		pApp.fondo.style.top = 0;
		pApp.fondo.style.left = 0;

		pApp.fondo.appendChild(document.createElement('DIV')).setAttribute('id', 'experiencia');
		pApp.divEmergenteExperiencias = document.querySelector('#experiencia');
		pApp.divEmergenteExperiencias.style.color = '#81715E'; // 217CA3 488A99 B4B4B4
		pApp.divEmergenteExperiencias.style.textAlign = 'center'

		pApp.divEmergenteExperiencias.appendChild(document.createElement('DIV')).setAttribute('id', 'btnCerrar');
		pApp.btnCerrar = document.querySelector('#btnCerrar');
		pApp.btnCerrar.className = 'glitch';
		pApp.btnCerrar.setAttribute('data-text', 'X');
		pApp.btnCerrar.innerHTML = 'X';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('H2')).setAttribute('id', 'tituloExpTec');
		pApp.tituloExpTec = document.querySelector('#tituloExpTec');
		pApp.tituloExpTec.style.textAlign = 'center';
		pApp.tituloExpTec.style.marginTop = '40px';
		pApp.tituloExpTec.innerHTML = 'Instalación y configuración de software';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('UL')).setAttribute('id', 'listaEsxp');
		pApp.listaEsxp = document.querySelector('#listaEsxp');
		pApp.listaEsxp.style.textAlign = 'left';
		pApp.listaEsxp.style.display = 'inline-block';
		pApp.listaEsxp.style.paddingTop = '30px';
		pApp.listaEsxp.innerHTML = `<li>Sistema operativo Windows 7/8/10</li> 
									<li>Sistema operativo Linux Debian, Kali</li>
									<li>Sistema operativo Windows Server 2016</li>
									<li>Paquetería de oficina Microsoft</li>
									<li>Paquetería contable CONTPAQi</li>
									<li>Software no-ip para conexiones remotas</li>
									<li>Software de Antivirus</li>
									<li>Software para impresoras y multifuncionales</li>
									<li>Software para etiquetadoras Zebra Industrial</li>
									<li>Software control de temperatura Thermotrack PC</li>
									<li>Software para biométricos</li>`;
		
		pApp.divEmergenteExperiencias.style.position = 'absolute'; // 'relative';
		pApp.divEmergenteExperiencias.style.top = '50%'; /* Buscamos el centro horizontal (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.display = 'block';
		pApp.divEmergenteExperiencias.style.left = '50%'; /* Buscamos el centro vertical (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22
		pApp.divEmergenteExperiencias.style.borderRadius='20px';
		pApp.divEmergenteExperiencias.style.boxShadow = '-4px 4px 10px #F4CC70'; //F4CC70

	if(window.matchMedia('(max-width:575px)').matches){

		pApp.tituloExpTec.style.marginTop = '45px';
		pApp.tituloExpTec.style.fontSize = '30px';

		pApp.listaEsxp.style.paddingTop = '20px';
		pApp.listaEsxp.style.paddingLeft = '20px';

		pApp.divEmergenteExperiencias.style.border = '6px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '300px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '600px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-300px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-150px'; /* Restamos la mitad de la anchura del objeto con un margin-left */

		pApp.divEmergenteExperiencias.style.boxShadow = '-3px 2px 5px #F4CC70';

	}else if(window.matchMedia('(max-width: 767px) and (min-width: 576px)').matches){

		pApp.divEmergenteExperiencias.style.border = '10px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '400px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '500px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-250px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-200px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 991px) and (min-width: 768px)').matches){

		pApp.tituloExpTec.style.marginTop = '55px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '500px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '500px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-250px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-250px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else{

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '700px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '450px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-225px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-350px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}

		if(pApp.animacion == 'slideLeft'){
			pApp.divEmergenteExperiencias.style.top = '50%';
			pApp.divEmergenteExperiencias.style.left = 0;
			pApp.divEmergenteExperiencias.style.opacity = 0;

			setTimeout(function(){

				pApp.divEmergenteExperiencias.style.transition = '.5s left ease';

				pApp.divEmergenteExperiencias.style.left = '50%';
				pApp.divEmergenteExperiencias.style.opacity = 1;
				pApp.divEmergenteExperiencias.style.marginLeft = -pApp.divEmergenteExperiencias.childNodes[0].width/2 + 'px';
				pApp.divEmergenteExperiencias.style.marginTop = -pApp.divEmergenteExperiencias.childNodes[0].height/2 + 'px';
			},50)
		}
		pApp.divEmergenteExperiencias.childNodes[0].style.position = 'absolute';
		pApp.divEmergenteExperiencias.childNodes[0].style.right = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.top = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.color ='#F4CC70';
		pApp.divEmergenteExperiencias.childNodes[0].style.cursor ='pointer';
		pApp.divEmergenteExperiencias.childNodes[0].style.fontSize = '30px';
		pApp.divEmergenteExperiencias.childNodes[0].style.width = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.heigth = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.textAlign ='center';
		//pApp.divEmergenteExperiencias.childNodes[0].style.background = '#EE7913'; //DE7A22
		pApp.divEmergenteExperiencias.childNodes[0].style.border = '2px solid #EE7913';
		pApp.divEmergenteExperiencias.childNodes[0].style.borderRadius = '0px 0px 0px 5px';

		pApp.divEmergenteExperiencias.childNodes[0].addEventListener('click', mApp.salirDescripcion);

});

pApp.expTec2.addEventListener("click",function(e){

	console.log('Experiencia tecnica dos');

		pApp.body.appendChild(document.createElement('DIV')).setAttribute('id', 'fondo');
 		pApp.fondo = document.querySelector('#fondo');
 		pApp.fondo.style.width = '100%';
 		pApp.fondo.style.height = '100%';
 		pApp.fondo.style.position = 'fixed';
		pApp.fondo.style.zIndex = '10';
		pApp.fondo.style.background = 'rgba(0,0,0,.9)';
		pApp.fondo.style.top = 0;
		pApp.fondo.style.left = 0;

		pApp.fondo.appendChild(document.createElement('DIV')).setAttribute('id', 'experiencia');
		pApp.divEmergenteExperiencias = document.querySelector('#experiencia');
		pApp.divEmergenteExperiencias.style.color = '#81715E';
		pApp.divEmergenteExperiencias.style.textAlign = 'center'

		pApp.divEmergenteExperiencias.appendChild(document.createElement('DIV')).setAttribute('id', 'btnCerrar');
		pApp.btnCerrar = document.querySelector('#btnCerrar');
		pApp.btnCerrar.className = 'glitch';
		pApp.btnCerrar.setAttribute('data-text', 'X');
		pApp.btnCerrar.innerHTML = 'X';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('H2')).setAttribute('id', 'tituloExpTec');
		pApp.tituloExpTec = document.querySelector('#tituloExpTec');
		pApp.tituloExpTec.style.textAlign = 'center';
		pApp.tituloExpTec.style.marginTop = '40px';
		pApp.tituloExpTec.className = 'glitch';
		//pApp.tituloExpTec.setAttribute('data-text', 'Mantenimiento físico');
		pApp.tituloExpTec.innerHTML = 'Mantenimiento físico';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('UL')).setAttribute('id', 'listaEsxp');
		pApp.listaEsxp = document.querySelector('#listaEsxp');
		pApp.listaEsxp.style.textAlign = 'left';
		pApp.listaEsxp.style.display = 'inline-block';
		pApp.listaEsxp.style.paddingTop = '30px';
		pApp.listaEsxp.innerHTML = `<li>Limpieza de laptop, PC escritorio, monitor, impresoras y multifuncionales</li> 
									<li>Cambio de fuente de poder</li>
									<li>Cambio de memoria RAM</li>
									<li>Cambio de disco duro</li>`;
		
		pApp.divEmergenteExperiencias.style.position = 'absolute'; // 'relative';
		pApp.divEmergenteExperiencias.style.top = '50%'; /* Buscamos el centro horizontal (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.display = 'block';
		pApp.divEmergenteExperiencias.style.left = '50%'; /* Buscamos el centro vertical (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22
		pApp.divEmergenteExperiencias.style.borderRadius='20px';
		pApp.divEmergenteExperiencias.style.boxShadow = '-4px 4px 10px #F4CC70'; //F4CC70

	if(window.matchMedia('(max-width:575px)').matches){

		pApp.tituloExpTec.style.marginTop = '45px';
		pApp.tituloExpTec.style.fontSize = '30px';

		pApp.listaEsxp.style.paddingTop = '20px';
		pApp.listaEsxp.style.paddingRight = '30px';

		pApp.divEmergenteExperiencias.style.border = '6px solid #EE7913'; // DE7A22

		pApp.listaEsxp.style.marginLeft='50px'
		pApp.divEmergenteExperiencias.style.width = '300px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-150px'; /* Restamos la mitad de la anchura del objeto con un margin-left */


	}else if(window.matchMedia('(max-width: 767px) and (min-width: 576px)').matches){


		pApp.divEmergenteExperiencias.style.border = '10px solid #EE7913'; // DE7A22

		pApp.listaEsxp.style.marginLeft='50px'
		pApp.divEmergenteExperiencias.style.width = '400px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-200px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 991px) and (min-width: 768px)').matches){

		pApp.listaEsxp.style.paddingTop = '40px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '600px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-300px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else{

		pApp.listaEsxp.style.paddingTop = '40px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '700px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-350px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}

		if(pApp.animacion == 'slideLeft'){
			pApp.divEmergenteExperiencias.style.top = '50%';
			pApp.divEmergenteExperiencias.style.left = 0;
			pApp.divEmergenteExperiencias.style.opacity = 0;

			setTimeout(function(){

				pApp.divEmergenteExperiencias.style.transition = '.5s left ease';

				pApp.divEmergenteExperiencias.style.left = '50%';
				pApp.divEmergenteExperiencias.style.opacity = 1;
				pApp.divEmergenteExperiencias.style.marginLeft = -pApp.divEmergenteExperiencias.childNodes[0].width/2 + 'px';
				pApp.divEmergenteExperiencias.style.marginTop = -pApp.divEmergenteExperiencias.childNodes[0].height/2 + 'px';
			},50)
		}

		pApp.divEmergenteExperiencias.childNodes[0].style.position = 'absolute';
		pApp.divEmergenteExperiencias.childNodes[0].style.right = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.top = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.color ='#F4CC70';
		pApp.divEmergenteExperiencias.childNodes[0].style.cursor ='pointer';
		pApp.divEmergenteExperiencias.childNodes[0].style.fontSize = '30px';
		pApp.divEmergenteExperiencias.childNodes[0].style.width = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.heigth = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.textAlign ='center';
		//pApp.divEmergenteExperiencias.childNodes[0].style.background = '#EE7913'; //DE7A22
		pApp.divEmergenteExperiencias.childNodes[0].style.border = '2px solid #EE7913';
		pApp.divEmergenteExperiencias.childNodes[0].style.borderRadius = '0px 0px 0px 5px';

		pApp.divEmergenteExperiencias.childNodes[0].addEventListener('click', mApp.salirDescripcion);
});

pApp.expTec3.addEventListener("click",function(e){

	console.log('Experiencia tecnica tres');

		pApp.body.appendChild(document.createElement('DIV')).setAttribute('id', 'fondo');
 		pApp.fondo = document.querySelector('#fondo');
 		pApp.fondo.style.width = '100%';
 		pApp.fondo.style.height = '100%';
 		pApp.fondo.style.position = 'fixed';
		pApp.fondo.style.zIndex = '10';
		pApp.fondo.style.background = 'rgba(0,0,0,.9)';
		pApp.fondo.style.top = 0;
		pApp.fondo.style.left = 0;

		pApp.fondo.appendChild(document.createElement('DIV')).setAttribute('id', 'experiencia');
		pApp.divEmergenteExperiencias = document.querySelector('#experiencia');
		pApp.divEmergenteExperiencias.style.color = '#81715E';
		pApp.divEmergenteExperiencias.style.textAlign = 'center'

		pApp.divEmergenteExperiencias.appendChild(document.createElement('DIV')).setAttribute('id', 'btnCerrar');
		pApp.btnCerrar = document.querySelector('#btnCerrar');
		pApp.btnCerrar.className = 'glitch';
		pApp.btnCerrar.setAttribute('data-text', 'X');
		pApp.btnCerrar.innerHTML = 'X';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('H2')).setAttribute('id', 'tituloExpTec');
		pApp.tituloExpTec = document.querySelector('#tituloExpTec');
		pApp.tituloExpTec.style.textAlign = 'center';
		pApp.tituloExpTec.style.marginTop = '40px';
		pApp.tituloExpTec.className = 'glitch';
		//pApp.tituloExpTec.setAttribute('data-text', 'Cableado');
		pApp.tituloExpTec.innerHTML = 'Cableado';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('UL')).setAttribute('id', 'listaEsxp');
		pApp.listaEsxp = document.querySelector('#listaEsxp');
		pApp.listaEsxp.style.textAlign = 'left';
		pApp.listaEsxp.style.display = 'inline-block';
		pApp.listaEsxp.style.paddingTop = '30px';
		pApp.listaEsxp.innerHTML = `<li>Ponchado de RJ45 para datos y video</li> 
									<li>Ponchado de RJ11 para voz</li>
									<li>Ponchado de RJ12 para datos de temperatura</li>`;
		
		pApp.divEmergenteExperiencias.style.position = 'absolute'; // 'relative';
		pApp.divEmergenteExperiencias.style.top = '50%'; /* Buscamos el centro horizontal (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.display = 'block';
		pApp.divEmergenteExperiencias.style.left = '50%'; /* Buscamos el centro vertical (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22
		pApp.divEmergenteExperiencias.style.borderRadius='20px';
		pApp.divEmergenteExperiencias.style.boxShadow = '-4px 4px 10px #F4CC70'; //F4CC70

	if(window.matchMedia('(max-width:575px)').matches){

		pApp.tituloExpTec.style.marginTop = '45px';
		pApp.tituloExpTec.style.fontSize = '30px';

		pApp.listaEsxp.style.paddingTop = '20px';
		pApp.listaEsxp.style.paddingLeft = '30px';

		pApp.divEmergenteExperiencias.style.border = '6px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '300px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-150px'; /* Restamos la mitad de la anchura del objeto con un margin-left */


	}else if(window.matchMedia('(max-width: 767px) and (min-width: 576px)').matches){

		pApp.listaEsxp.style.paddingTop = '60px';

		pApp.divEmergenteExperiencias.style.border = '10px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '400px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-200px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 991px) and (min-width: 768px)').matches){

		pApp.listaEsxp.style.paddingTop = '50px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '500px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-250px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else{

		pApp.listaEsxp.style.paddingTop = '50px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '700px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-350px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}

		if(pApp.animacion == 'slideLeft'){
			pApp.divEmergenteExperiencias.style.top = '50%';
			pApp.divEmergenteExperiencias.style.left = 0;
			pApp.divEmergenteExperiencias.style.opacity = 0;

			setTimeout(function(){

				pApp.divEmergenteExperiencias.style.transition = '.5s left ease';

				pApp.divEmergenteExperiencias.style.left = '50%';
				pApp.divEmergenteExperiencias.style.opacity = 1;
				pApp.divEmergenteExperiencias.style.marginLeft = -pApp.divEmergenteExperiencias.childNodes[0].width/2 + 'px';
				pApp.divEmergenteExperiencias.style.marginTop = -pApp.divEmergenteExperiencias.childNodes[0].height/2 + 'px';
			},50)
		}

		pApp.divEmergenteExperiencias.childNodes[0].style.position = 'absolute';
		pApp.divEmergenteExperiencias.childNodes[0].style.right = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.top = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.color ='#F4CC70';
		pApp.divEmergenteExperiencias.childNodes[0].style.cursor ='pointer';
		pApp.divEmergenteExperiencias.childNodes[0].style.fontSize = '30px';
		pApp.divEmergenteExperiencias.childNodes[0].style.width = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.heigth = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.textAlign ='center';
		//pApp.divEmergenteExperiencias.childNodes[0].style.background = '#EE7913'; //DE7A22
		pApp.divEmergenteExperiencias.childNodes[0].style.border = '2px solid #EE7913';
		pApp.divEmergenteExperiencias.childNodes[0].style.borderRadius = '0px 0px 0px 5px';

		pApp.divEmergenteExperiencias.childNodes[0].addEventListener('click', mApp.salirDescripcion);
});

pApp.expTec4.addEventListener("click",function(e){

	console.log('Experiencia tecnica tres');

		pApp.body.appendChild(document.createElement('DIV')).setAttribute('id', 'fondo');
 		pApp.fondo = document.querySelector('#fondo');
 		pApp.fondo.style.width = '100%';
 		pApp.fondo.style.height = '100%';
 		pApp.fondo.style.position = 'fixed';
		pApp.fondo.style.zIndex = '10';
		pApp.fondo.style.background = 'rgba(0,0,0,.9)';
		pApp.fondo.style.top = 0;
		pApp.fondo.style.left = 0;

		pApp.fondo.appendChild(document.createElement('DIV')).setAttribute('id', 'experiencia');
		pApp.divEmergenteExperiencias = document.querySelector('#experiencia');
		pApp.divEmergenteExperiencias.style.color = '#81715E';
		pApp.divEmergenteExperiencias.style.textAlign = 'center'

		pApp.divEmergenteExperiencias.appendChild(document.createElement('DIV')).setAttribute('id', 'btnCerrar');
		pApp.btnCerrar = document.querySelector('#btnCerrar');
		pApp.btnCerrar.className = 'glitch';
		pApp.btnCerrar.setAttribute('data-text', 'X');
		pApp.btnCerrar.innerHTML = 'X';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('H2')).setAttribute('id', 'tituloExpTec');
		pApp.tituloExpTec = document.querySelector('#tituloExpTec');
		pApp.tituloExpTec.style.textAlign = 'center';
		pApp.tituloExpTec.style.marginTop = '40px';
		pApp.tituloExpTec.className = 'glitch';
		//pApp.tituloExpTec.setAttribute('data-text', 'Administrativo');
		pApp.tituloExpTec.innerHTML = 'Administrativo';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('UL')).setAttribute('id', 'listaEsxp');
		pApp.listaEsxp = document.querySelector('#listaEsxp');
		pApp.listaEsxp.style.textAlign = 'left';
		pApp.listaEsxp.style.display = 'inline-block';
		pApp.listaEsxp.style.paddingTop = '30px';
		pApp.listaEsxp.innerHTML = `<li>Gestión de líneas fijas y móviles</li> 
									<li>Gestión de Internet dedicado</li>
									<li>Gestión de cuentas de dominio y hosting</li>
									<li>Gestión de licencias de office</li>
									<li>Gestión de licencias de CONTPAQi</li>
									<li>Gestión de licencias de Antivirus</li>`;
		
		pApp.divEmergenteExperiencias.style.position = 'absolute'; // 'relative';
		pApp.divEmergenteExperiencias.style.top = '50%'; /* Buscamos el centro horizontal (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.display = 'block';
		pApp.divEmergenteExperiencias.style.left = '50%'; /* Buscamos el centro vertical (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22
		pApp.divEmergenteExperiencias.style.borderRadius='20px';
		pApp.divEmergenteExperiencias.style.boxShadow = '-4px 4px 10px #F4CC70'; //F4CC70

	if(window.matchMedia('(max-width:575px)').matches){

		pApp.tituloExpTec.style.marginTop = '45px';
		pApp.tituloExpTec.style.fontSize = '30px';

		pApp.listaEsxp.style.paddingTop = '20px';
		pApp.listaEsxp.style.paddingLeft = '30px';

		pApp.divEmergenteExperiencias.style.border = '6px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '300px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-150px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 767px) and (min-width: 576px)').matches){

		pApp.divEmergenteExperiencias.style.border = '10px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '400px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-200px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 991px) and (min-width: 768px)').matches){

		pApp.listaEsxp.style.paddingTop = '20px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '500px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-250px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else{

		pApp.listaEsxp.style.paddingTop = '20px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '700px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-350px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}
		if(pApp.animacion == 'slideLeft'){
			pApp.divEmergenteExperiencias.style.top = '50%';
			pApp.divEmergenteExperiencias.style.left = 0;
			pApp.divEmergenteExperiencias.style.opacity = 0;

			setTimeout(function(){

				pApp.divEmergenteExperiencias.style.transition = '.5s left ease';

				pApp.divEmergenteExperiencias.style.left = '50%';
				pApp.divEmergenteExperiencias.style.opacity = 1;
				pApp.divEmergenteExperiencias.style.marginLeft = -pApp.divEmergenteExperiencias.childNodes[0].width/2 + 'px';
				pApp.divEmergenteExperiencias.style.marginTop = -pApp.divEmergenteExperiencias.childNodes[0].height/2 + 'px';
			},50)
		}

		pApp.divEmergenteExperiencias.childNodes[0].style.position = 'absolute';
		pApp.divEmergenteExperiencias.childNodes[0].style.right = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.top = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.color ='#F4CC70';
		pApp.divEmergenteExperiencias.childNodes[0].style.cursor ='pointer';
		pApp.divEmergenteExperiencias.childNodes[0].style.fontSize = '30px';
		pApp.divEmergenteExperiencias.childNodes[0].style.width = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.heigth = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.textAlign ='center';
		//pApp.divEmergenteExperiencias.childNodes[0].style.background = '#EE7913'; //DE7A22
		pApp.divEmergenteExperiencias.childNodes[0].style.border = '2px solid #EE7913';
		pApp.divEmergenteExperiencias.childNodes[0].style.borderRadius = '0px 0px 0px 5px';

		pApp.divEmergenteExperiencias.childNodes[0].addEventListener('click', mApp.salirDescripcion);
});

pApp.expTec5.addEventListener("click",function(e){

	console.log('Experiencia tecnica tres');

		pApp.body.appendChild(document.createElement('DIV')).setAttribute('id', 'fondo');
 		pApp.fondo = document.querySelector('#fondo');
 		pApp.fondo.style.width = '100%';
 		pApp.fondo.style.height = '100%';
 		pApp.fondo.style.position = 'fixed';
		pApp.fondo.style.zIndex = '10';
		pApp.fondo.style.background = 'rgba(0,0,0,.9)';
		pApp.fondo.style.top = 0;
		pApp.fondo.style.left = 0;

		pApp.fondo.appendChild(document.createElement('DIV')).setAttribute('id', 'experiencia');
		pApp.divEmergenteExperiencias = document.querySelector('#experiencia');
		pApp.divEmergenteExperiencias.style.color = '#81715E';
		pApp.divEmergenteExperiencias.style.textAlign = 'center'

		pApp.divEmergenteExperiencias.appendChild(document.createElement('DIV')).setAttribute('id', 'btnCerrar');
		pApp.btnCerrar = document.querySelector('#btnCerrar');
		pApp.btnCerrar.className = 'glitch';
		pApp.btnCerrar.setAttribute('data-text', 'X');
		pApp.btnCerrar.innerHTML = 'X';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('H2')).setAttribute('id', 'tituloExpTec');
		pApp.tituloExpTec = document.querySelector('#tituloExpTec');
		pApp.tituloExpTec.style.textAlign = 'center';
		pApp.tituloExpTec.style.marginTop = '40px';
		pApp.tituloExpTec.className = 'glitch';
		//pApp.tituloExpTec.setAttribute('data-text', 'Análisis');
		pApp.tituloExpTec.innerHTML = 'Análisis';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('UL')).setAttribute('id', 'listaEsxp');
		pApp.listaEsxp = document.querySelector('#listaEsxp');
		pApp.listaEsxp.style.textAlign = 'left';
		pApp.listaEsxp.style.display = 'inline-block';
		pApp.listaEsxp.style.paddingTop = '30px';
		pApp.listaEsxp.innerHTML = `<li>Creación de plantillas (Macros Excel)</li> 
									<li>Creación de plantillas (Power Pivot Excel)</li>
									<li>Creación de Queries para Power BI y Tableau</li>`;
		
		pApp.divEmergenteExperiencias.style.position = 'absolute'; // 'relative';
		pApp.divEmergenteExperiencias.style.top = '50%'; /* Buscamos el centro horizontal (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.display = 'block';
		pApp.divEmergenteExperiencias.style.left = '50%'; /* Buscamos el centro vertical (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22
		pApp.divEmergenteExperiencias.style.borderRadius='20px';
		pApp.divEmergenteExperiencias.style.boxShadow = '-4px 4px 10px #F4CC70'; //F4CC70

	if(window.matchMedia('(max-width:575px)').matches){

		pApp.tituloExpTec.style.marginTop = '45px';
		pApp.tituloExpTec.style.fontSize = '30px';

		pApp.listaEsxp.style.paddingTop = '20px';
		pApp.listaEsxp.style.paddingLeft = '15px';

		pApp.divEmergenteExperiencias.style.border = '6px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '300px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-150px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 767px) and (min-width: 576px)').matches){

		pApp.listaEsxp.style.paddingTop = '60px';

		pApp.divEmergenteExperiencias.style.border = '10px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '400px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-200px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 991px) and (min-width: 768px)').matches){

		pApp.listaEsxp.style.paddingTop = '50px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '500px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-250px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else{

		pApp.listaEsxp.style.paddingTop = '50px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '700px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-350px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}
		if(pApp.animacion == 'slideLeft'){
			pApp.divEmergenteExperiencias.style.top = '50%';
			pApp.divEmergenteExperiencias.style.left = 0;
			pApp.divEmergenteExperiencias.style.opacity = 0;

			setTimeout(function(){

				pApp.divEmergenteExperiencias.style.transition = '.5s left ease';

				pApp.divEmergenteExperiencias.style.left = '50%';
				pApp.divEmergenteExperiencias.style.opacity = 1;
				pApp.divEmergenteExperiencias.style.marginLeft = -pApp.divEmergenteExperiencias.childNodes[0].width/2 + 'px';
				pApp.divEmergenteExperiencias.style.marginTop = -pApp.divEmergenteExperiencias.childNodes[0].height/2 + 'px';
			},50)
		}

		pApp.divEmergenteExperiencias.childNodes[0].style.position = 'absolute';
		pApp.divEmergenteExperiencias.childNodes[0].style.right = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.top = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.color ='#F4CC70';
		pApp.divEmergenteExperiencias.childNodes[0].style.cursor ='pointer';
		pApp.divEmergenteExperiencias.childNodes[0].style.fontSize = '30px';
		pApp.divEmergenteExperiencias.childNodes[0].style.width = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.heigth = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.textAlign ='center';
		//pApp.divEmergenteExperiencias.childNodes[0].style.background = '#EE7913'; //DE7A22
		pApp.divEmergenteExperiencias.childNodes[0].style.border = '2px solid #EE7913';
		pApp.divEmergenteExperiencias.childNodes[0].style.borderRadius = '0px 0px 0px 5px';

		pApp.divEmergenteExperiencias.childNodes[0].addEventListener('click', mApp.salirDescripcion);
});


pApp.expDes2.addEventListener("click",function(e){

	console.log('Experiencia tecnica tres');

		pApp.body.appendChild(document.createElement('DIV')).setAttribute('id', 'fondo');
 		pApp.fondo = document.querySelector('#fondo');
 		pApp.fondo.style.width = '100%';
 		pApp.fondo.style.height = '100%';
 		pApp.fondo.style.position = 'fixed';
		pApp.fondo.style.zIndex = '10';
		pApp.fondo.style.background = 'rgba(0,0,0,.9)';
		pApp.fondo.style.top = 0;
		pApp.fondo.style.left = 0;

		pApp.fondo.appendChild(document.createElement('DIV')).setAttribute('id', 'experiencia');
		pApp.divEmergenteExperiencias = document.querySelector('#experiencia');
		pApp.divEmergenteExperiencias.style.color = '#81715E';
		pApp.divEmergenteExperiencias.style.textAlign = 'center'

		pApp.divEmergenteExperiencias.appendChild(document.createElement('DIV')).setAttribute('id', 'btnCerrar');
		pApp.btnCerrar = document.querySelector('#btnCerrar');
		pApp.btnCerrar.className = 'glitch';
		pApp.btnCerrar.setAttribute('data-text', 'X');
		pApp.btnCerrar.innerHTML = 'X';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('H2')).setAttribute('id', 'tituloExpTec');
		pApp.tituloExpTec = document.querySelector('#tituloExpTec');
		pApp.tituloExpTec.style.textAlign = 'center';
		pApp.tituloExpTec.style.marginTop = '40px';
		pApp.tituloExpTec.className = 'glitch';
		//pApp.tituloExpTec.setAttribute('data-text', 'Entornos de Desarrollo');
		pApp.tituloExpTec.innerHTML = 'Entornos de Desarrollo';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('UL')).setAttribute('id', 'listaEsxp');
		pApp.listaEsxp = document.querySelector('#listaEsxp');
		pApp.listaEsxp.style.textAlign = 'left';
		pApp.listaEsxp.style.display = 'inline-block';
		pApp.listaEsxp.style.paddingTop = '30px';
		pApp.listaEsxp.innerHTML = `<li>Visual Studio 2010</li> 
									<li>NetBeans</li>
									<li>Apache NetBeans</li>
									<li>Eclipse</li>
									<li>Visual Studio Code</li>
									<li>Sublime Text3</li>
									<li>SpringToolSuite</li>`;
		
		pApp.divEmergenteExperiencias.style.position = 'absolute'; // 'relative';
		pApp.divEmergenteExperiencias.style.top = '50%'; /* Buscamos el centro horizontal (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.display = 'block';
		pApp.divEmergenteExperiencias.style.left = '50%'; /* Buscamos el centro vertical (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22
		pApp.divEmergenteExperiencias.style.borderRadius='20px';
		pApp.divEmergenteExperiencias.style.boxShadow = '-4px 4px 10px #F4CC70'; //F4CC70

	if(window.matchMedia('(max-width:575px)').matches){

		pApp.tituloExpTec.style.marginTop = '45px';
		pApp.tituloExpTec.style.fontSize = '30px';

		pApp.listaEsxp.style.paddingTop = '50px';
		pApp.listaEsxp.style.paddingLeft = '15px';

		pApp.divEmergenteExperiencias.style.border = '6px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '300px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '400px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-200px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-150px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 767px) and (min-width: 576px)').matches){

		pApp.listaEsxp.style.paddingTop = '60px';

		pApp.divEmergenteExperiencias.style.border = '10px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '400px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '400px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-200px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-200px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 991px) and (min-width: 768px)').matches){

		pApp.listaEsxp.style.paddingTop = '60px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '500px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '400px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-200px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-250px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else{

		pApp.listaEsxp.style.paddingTop = '60px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '700px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '400px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-200px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-350px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}
		if(pApp.animacion == 'slideLeft'){
			pApp.divEmergenteExperiencias.style.top = '50%';
			pApp.divEmergenteExperiencias.style.left = 0;
			pApp.divEmergenteExperiencias.style.opacity = 0;

			setTimeout(function(){

				pApp.divEmergenteExperiencias.style.transition = '.5s left ease';

				pApp.divEmergenteExperiencias.style.left = '50%';
				pApp.divEmergenteExperiencias.style.opacity = 1;
				pApp.divEmergenteExperiencias.style.marginLeft = -pApp.divEmergenteExperiencias.childNodes[0].width/2 + 'px';
				pApp.divEmergenteExperiencias.style.marginTop = -pApp.divEmergenteExperiencias.childNodes[0].height/2 + 'px';
			},50)
		}

		pApp.divEmergenteExperiencias.childNodes[0].style.position = 'absolute';
		pApp.divEmergenteExperiencias.childNodes[0].style.right = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.top = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.color ='#F4CC70';
		pApp.divEmergenteExperiencias.childNodes[0].style.cursor ='pointer';
		pApp.divEmergenteExperiencias.childNodes[0].style.fontSize = '30px';
		pApp.divEmergenteExperiencias.childNodes[0].style.width = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.heigth = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.textAlign ='center';
		//pApp.divEmergenteExperiencias.childNodes[0].style.background = '#EE7913'; //DE7A22
		pApp.divEmergenteExperiencias.childNodes[0].style.border = '2px solid #EE7913';
		pApp.divEmergenteExperiencias.childNodes[0].style.borderRadius = '0px 0px 0px 5px';

		pApp.divEmergenteExperiencias.childNodes[0].addEventListener('click', mApp.salirDescripcion);
});

pApp.expDes3.addEventListener("click",function(e){

	console.log('Experiencia tecnica tres');

		pApp.body.appendChild(document.createElement('DIV')).setAttribute('id', 'fondo');
 		pApp.fondo = document.querySelector('#fondo');
 		pApp.fondo.style.width = '100%';
 		pApp.fondo.style.height = '100%';
 		pApp.fondo.style.position = 'fixed';
		pApp.fondo.style.zIndex = '10';
		pApp.fondo.style.background = 'rgba(0,0,0,.9)';
		pApp.fondo.style.top = 0;
		pApp.fondo.style.left = 0;

		pApp.fondo.appendChild(document.createElement('DIV')).setAttribute('id', 'experiencia');
		pApp.divEmergenteExperiencias = document.querySelector('#experiencia');
		pApp.divEmergenteExperiencias.style.color = '#81715E';
		pApp.divEmergenteExperiencias.style.textAlign = 'center'

		pApp.divEmergenteExperiencias.appendChild(document.createElement('DIV')).setAttribute('id', 'btnCerrar');
		pApp.btnCerrar = document.querySelector('#btnCerrar');
		pApp.btnCerrar.className = 'glitch';
		pApp.btnCerrar.setAttribute('data-text', 'X');
		pApp.btnCerrar.innerHTML = 'X';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('H2')).setAttribute('id', 'tituloExpTec');
		pApp.tituloExpTec = document.querySelector('#tituloExpTec');
		pApp.tituloExpTec.style.textAlign = 'center';
		pApp.tituloExpTec.style.marginTop = '40px';
		pApp.tituloExpTec.className = 'glitch';
		//pApp.tituloExpTec.setAttribute('data-text', 'Lenguajes de Programación');
		pApp.tituloExpTec.innerHTML = 'Lenguajes de Programación';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('UL')).setAttribute('id', 'listaEsxp');
		pApp.listaEsxp = document.querySelector('#listaEsxp');
		pApp.listaEsxp.style.textAlign = 'left';
		pApp.listaEsxp.style.display = 'inline-block';
		pApp.listaEsxp.style.paddingTop = '30px';
		pApp.listaEsxp.innerHTML = `<li>Java</li> 
									<li>C#</li>
									<li>Visual Basic</li>
									<li>JavaScript</li>
									<li>PHP</li>`;
		
		pApp.divEmergenteExperiencias.style.position = 'absolute'; // 'relative';
		pApp.divEmergenteExperiencias.style.top = '50%'; /* Buscamos el centro horizontal (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.display = 'block';
		pApp.divEmergenteExperiencias.style.left = '50%'; /* Buscamos el centro vertical (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22
		pApp.divEmergenteExperiencias.style.borderRadius='20px';
		pApp.divEmergenteExperiencias.style.boxShadow = '-4px 4px 10px #F4CC70'; //F4CC70

	if(window.matchMedia('(max-width:575px)').matches){

		pApp.tituloExpTec.style.marginTop = '45px';
		pApp.tituloExpTec.style.fontSize = '30px';

		pApp.listaEsxp.style.paddingTop = '50px';
		pApp.listaEsxp.style.paddingLeft = '15px';

		pApp.divEmergenteExperiencias.style.border = '6px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '300px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '400px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-200px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-150px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 767px) and (min-width: 576px)').matches){

		pApp.listaEsxp.style.paddingTop = '60px';

		pApp.divEmergenteExperiencias.style.border = '10px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '400px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '400px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-200px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-200px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 991px) and (min-width: 768px)').matches){

		pApp.listaEsxp.style.paddingTop = '50px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '500px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '350px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-175px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-250px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else{

		pApp.listaEsxp.style.paddingTop = '80px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '700px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '400px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-200px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-350px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}

		if(pApp.animacion == 'slideLeft'){
			pApp.divEmergenteExperiencias.style.top = '50%';
			pApp.divEmergenteExperiencias.style.left = 0;
			pApp.divEmergenteExperiencias.style.opacity = 0;

			setTimeout(function(){

				pApp.divEmergenteExperiencias.style.transition = '.5s left ease';

				pApp.divEmergenteExperiencias.style.left = '50%';
				pApp.divEmergenteExperiencias.style.opacity = 1;
				pApp.divEmergenteExperiencias.style.marginLeft = -pApp.divEmergenteExperiencias.childNodes[0].width/2 + 'px';
				pApp.divEmergenteExperiencias.style.marginTop = -pApp.divEmergenteExperiencias.childNodes[0].height/2 + 'px';
			},50)
		}

		pApp.divEmergenteExperiencias.childNodes[0].style.position = 'absolute';
		pApp.divEmergenteExperiencias.childNodes[0].style.right = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.top = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.color ='#F4CC70';
		pApp.divEmergenteExperiencias.childNodes[0].style.cursor ='pointer';
		pApp.divEmergenteExperiencias.childNodes[0].style.fontSize = '30px';
		pApp.divEmergenteExperiencias.childNodes[0].style.width = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.heigth = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.textAlign ='center';
		//pApp.divEmergenteExperiencias.childNodes[0].style.background = '#EE7913'; //DE7A22
		pApp.divEmergenteExperiencias.childNodes[0].style.border = '2px solid #EE7913';
		pApp.divEmergenteExperiencias.childNodes[0].style.borderRadius = '0px 0px 0px 5px';

		pApp.divEmergenteExperiencias.childNodes[0].addEventListener('click', mApp.salirDescripcion);
});

pApp.expDes4.addEventListener("click",function(e){

	console.log('Experiencia tecnica tres');

		pApp.body.appendChild(document.createElement('DIV')).setAttribute('id', 'fondo');
 		pApp.fondo = document.querySelector('#fondo');
 		pApp.fondo.style.width = '100%';
 		pApp.fondo.style.height = '100%';
 		pApp.fondo.style.position = 'fixed';
		pApp.fondo.style.zIndex = '10';
		pApp.fondo.style.background = 'rgba(0,0,0,.9)';
		pApp.fondo.style.top = 0;
		pApp.fondo.style.left = 0;

		pApp.fondo.appendChild(document.createElement('DIV')).setAttribute('id', 'experiencia');
		pApp.divEmergenteExperiencias = document.querySelector('#experiencia');
		pApp.divEmergenteExperiencias.style.color = '#81715E';
		pApp.divEmergenteExperiencias.style.textAlign = 'center'

		pApp.divEmergenteExperiencias.appendChild(document.createElement('DIV')).setAttribute('id', 'btnCerrar');
		pApp.btnCerrar = document.querySelector('#btnCerrar');
		pApp.btnCerrar.className = 'glitch';
		pApp.btnCerrar.setAttribute('data-text', 'X');
		pApp.btnCerrar.innerHTML = 'X';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('H2')).setAttribute('id', 'tituloExpTec');
		pApp.tituloExpTec = document.querySelector('#tituloExpTec');
		pApp.tituloExpTec.style.textAlign = 'center';
		pApp.tituloExpTec.style.marginTop = '40px';
		pApp.tituloExpTec.className = 'glitch';
		//pApp.tituloExpTec.setAttribute('data-text', 'Lenguajes para maquetado');
		pApp.tituloExpTec.innerHTML = 'Maquetado Web';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('UL')).setAttribute('id', 'listaEsxp');
		pApp.listaEsxp = document.querySelector('#listaEsxp');
		pApp.listaEsxp.style.textAlign = 'left';
		pApp.listaEsxp.style.display = 'inline-block';
		pApp.listaEsxp.style.paddingTop = '30px';
		pApp.listaEsxp.innerHTML = `<li>Adobe XD</li> 
									<li>Adobe Photoshop</li>
									<li>HTML 5</li> 
									<li>CSS 3</li>`;
		
		pApp.divEmergenteExperiencias.style.position = 'absolute'; // 'relative';
		pApp.divEmergenteExperiencias.style.top = '50%'; /* Buscamos el centro horizontal (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.display = 'block';
		pApp.divEmergenteExperiencias.style.left = '50%'; /* Buscamos el centro vertical (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22
		pApp.divEmergenteExperiencias.style.borderRadius='20px';
		pApp.divEmergenteExperiencias.style.boxShadow = '-4px 4px 10px #F4CC70'; //F4CC70

	if(window.matchMedia('(max-width:575px)').matches){

		pApp.tituloExpTec.style.marginTop = '45px';
		pApp.tituloExpTec.style.fontSize = '30px';

		pApp.listaEsxp.style.paddingTop = '50px';
		pApp.listaEsxp.style.paddingLeft = '15px';

		pApp.divEmergenteExperiencias.style.border = '6px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '300px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-150px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 767px) and (min-width: 576px)').matches){

		pApp.listaEsxp.style.paddingTop = '50px';

		pApp.divEmergenteExperiencias.style.border = '10px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '400px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-200px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 991px) and (min-width: 768px)').matches){

		pApp.listaEsxp.style.paddingTop = '40px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '500px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-250px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else{

		pApp.listaEsxp.style.paddingTop = '40px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '700px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-350px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}

		if(pApp.animacion == 'slideLeft'){
			pApp.divEmergenteExperiencias.style.top = '50%';
			pApp.divEmergenteExperiencias.style.left = 0;
			pApp.divEmergenteExperiencias.style.opacity = 0;

			setTimeout(function(){

				pApp.divEmergenteExperiencias.style.transition = '.5s left ease';

				pApp.divEmergenteExperiencias.style.left = '50%';
				pApp.divEmergenteExperiencias.style.opacity = 1;
				pApp.divEmergenteExperiencias.style.marginLeft = -pApp.divEmergenteExperiencias.childNodes[0].width/2 + 'px';
				pApp.divEmergenteExperiencias.style.marginTop = -pApp.divEmergenteExperiencias.childNodes[0].height/2 + 'px';
			},50)
		}

		pApp.divEmergenteExperiencias.childNodes[0].style.position = 'absolute';
		pApp.divEmergenteExperiencias.childNodes[0].style.right = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.top = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.color ='#F4CC70';
		pApp.divEmergenteExperiencias.childNodes[0].style.cursor ='pointer';
		pApp.divEmergenteExperiencias.childNodes[0].style.fontSize = '30px';
		pApp.divEmergenteExperiencias.childNodes[0].style.width = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.heigth = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.textAlign ='center';
		//pApp.divEmergenteExperiencias.childNodes[0].style.background = '#EE7913'; //DE7A22
		pApp.divEmergenteExperiencias.childNodes[0].style.border = '2px solid #EE7913';
		pApp.divEmergenteExperiencias.childNodes[0].style.borderRadius = '0px 0px 0px 5px';

		pApp.divEmergenteExperiencias.childNodes[0].addEventListener('click', mApp.salirDescripcion);
});

pApp.expDes5.addEventListener("click",function(e){

	console.log('Experiencia tecnica tres');

		pApp.body.appendChild(document.createElement('DIV')).setAttribute('id', 'fondo');
 		pApp.fondo = document.querySelector('#fondo');
 		pApp.fondo.style.width = '100%';
 		pApp.fondo.style.height = '100%';
 		pApp.fondo.style.position = 'fixed';
		pApp.fondo.style.zIndex = '10';
		pApp.fondo.style.background = 'rgba(0,0,0,.9)';
		pApp.fondo.style.top = 0;
		pApp.fondo.style.left = 0;

		pApp.fondo.appendChild(document.createElement('DIV')).setAttribute('id', 'experiencia');
		pApp.divEmergenteExperiencias = document.querySelector('#experiencia');
		pApp.divEmergenteExperiencias.style.color = '#81715E';
		pApp.divEmergenteExperiencias.style.textAlign = 'center'

		pApp.divEmergenteExperiencias.appendChild(document.createElement('DIV')).setAttribute('id', 'btnCerrar');
		pApp.btnCerrar = document.querySelector('#btnCerrar');
		pApp.btnCerrar.className = 'glitch';
		pApp.btnCerrar.setAttribute('data-text', 'X');
		pApp.btnCerrar.innerHTML = 'X';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('H2')).setAttribute('id', 'tituloExpTec');
		pApp.tituloExpTec = document.querySelector('#tituloExpTec');
		pApp.tituloExpTec.style.textAlign = 'center';
		pApp.tituloExpTec.style.marginTop = '40px';
		pApp.tituloExpTec.className = 'glitch';
		//pApp.tituloExpTec.setAttribute('data-text', 'Bases de Datos');
		pApp.tituloExpTec.innerHTML = 'Bases de Datos';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('UL')).setAttribute('id', 'listaEsxp');
		pApp.listaEsxp = document.querySelector('#listaEsxp');
		pApp.listaEsxp.style.textAlign = 'left';
		pApp.listaEsxp.style.display = 'inline-block';
		pApp.listaEsxp.style.paddingTop = '30px';
		pApp.listaEsxp.innerHTML = `<li>SQL Server</li> 
									<li>MySQL</li>
									<li>Oracle</li>`;
		
		pApp.divEmergenteExperiencias.style.position = 'absolute'; // 'relative';
		pApp.divEmergenteExperiencias.style.top = '50%'; /* Buscamos el centro horizontal (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.display = 'block';
		pApp.divEmergenteExperiencias.style.left = '50%'; /* Buscamos el centro vertical (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22
		pApp.divEmergenteExperiencias.style.borderRadius='20px';
		pApp.divEmergenteExperiencias.style.boxShadow = '-4px 4px 10px #F4CC70'; //F4CC70

	if(window.matchMedia('(max-width:575px)').matches){

		pApp.tituloExpTec.style.marginTop = '45px';
		pApp.tituloExpTec.style.fontSize = '30px';

		pApp.listaEsxp.style.paddingTop = '50px';
		pApp.listaEsxp.style.paddingLeft = '15px';

		pApp.divEmergenteExperiencias.style.border = '6px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '300px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-150px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 767px) and (min-width: 576px)').matches){

		pApp.listaEsxp.style.paddingTop = '50px';

		pApp.divEmergenteExperiencias.style.border = '10px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '400px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-200px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 991px) and (min-width: 768px)').matches){

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '500px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '250px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-175px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-250px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else{

		pApp.listaEsxp.style.paddingTop = '50px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '700px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-350px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}

		if(pApp.animacion == 'slideLeft'){
			pApp.divEmergenteExperiencias.style.top = '50%';
			pApp.divEmergenteExperiencias.style.left = 0;
			pApp.divEmergenteExperiencias.style.opacity = 0;

			setTimeout(function(){

				pApp.divEmergenteExperiencias.style.transition = '.5s left ease';

				pApp.divEmergenteExperiencias.style.left = '50%';
				pApp.divEmergenteExperiencias.style.opacity = 1;
				pApp.divEmergenteExperiencias.style.marginLeft = -pApp.divEmergenteExperiencias.childNodes[0].width/2 + 'px';
				pApp.divEmergenteExperiencias.style.marginTop = -pApp.divEmergenteExperiencias.childNodes[0].height/2 + 'px';
			},50)
		}

		pApp.divEmergenteExperiencias.childNodes[0].style.position = 'absolute';
		pApp.divEmergenteExperiencias.childNodes[0].style.right = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.top = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.color ='#F4CC70';
		pApp.divEmergenteExperiencias.childNodes[0].style.cursor ='pointer';
		pApp.divEmergenteExperiencias.childNodes[0].style.fontSize = '30px';
		pApp.divEmergenteExperiencias.childNodes[0].style.width = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.heigth = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.textAlign ='center';
		//pApp.divEmergenteExperiencias.childNodes[0].style.background = '#EE7913'; //DE7A22
		pApp.divEmergenteExperiencias.childNodes[0].style.border = '2px solid #EE7913';
		pApp.divEmergenteExperiencias.childNodes[0].style.borderRadius = '0px 0px 0px 5px';

		pApp.divEmergenteExperiencias.childNodes[0].addEventListener('click', mApp.salirDescripcion);
});

pApp.expDes6.addEventListener("click",function(e){

	console.log('Experiencia tecnica tres');

		pApp.body.appendChild(document.createElement('DIV')).setAttribute('id', 'fondo');
 		pApp.fondo = document.querySelector('#fondo');
 		pApp.fondo.style.width = '100%';
 		pApp.fondo.style.height = '100%';
 		pApp.fondo.style.position = 'fixed';
		pApp.fondo.style.zIndex = '10';
		pApp.fondo.style.background = 'rgba(0,0,0,.9)';
		pApp.fondo.style.top = 0;
		pApp.fondo.style.left = 0;

		pApp.fondo.appendChild(document.createElement('DIV')).setAttribute('id', 'experiencia');
		pApp.divEmergenteExperiencias = document.querySelector('#experiencia');
		pApp.divEmergenteExperiencias.style.color = '#81715E';
		pApp.divEmergenteExperiencias.style.textAlign = 'center'

		pApp.divEmergenteExperiencias.appendChild(document.createElement('DIV')).setAttribute('id', 'btnCerrar');
		pApp.btnCerrar = document.querySelector('#btnCerrar');
		pApp.btnCerrar.className = 'glitch';
		pApp.btnCerrar.setAttribute('data-text', 'X');
		pApp.btnCerrar.innerHTML = 'X';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('H2')).setAttribute('id', 'tituloExpTec');
		pApp.tituloExpTec = document.querySelector('#tituloExpTec');
		pApp.tituloExpTec.style.textAlign = 'center';
		pApp.tituloExpTec.style.marginTop = '40px';
		pApp.tituloExpTec.className = 'glitch';
		//pApp.tituloExpTec.setAttribute('data-text', 'Gestores de Base de Datos');
		pApp.tituloExpTec.innerHTML = 'Gestores de Base de Datos';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('UL')).setAttribute('id', 'listaEsxp');
		pApp.listaEsxp = document.querySelector('#listaEsxp');
		pApp.listaEsxp.style.textAlign = 'left';
		pApp.listaEsxp.style.display = 'inline-block';
		pApp.listaEsxp.style.paddingTop = '30px';
		pApp.listaEsxp.innerHTML = `<li>SQL Server Management Studio 2012</li> 
									<li>MySQL Workbench</li>
									<li>Oracle SQL Developer</li>
									<li>Oracle Toad</li>`;
		
		pApp.divEmergenteExperiencias.style.position = 'absolute'; // 'relative';
		pApp.divEmergenteExperiencias.style.top = '50%'; /* Buscamos el centro horizontal (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.display = 'block';
		pApp.divEmergenteExperiencias.style.left = '50%'; /* Buscamos el centro vertical (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22
		pApp.divEmergenteExperiencias.style.borderRadius='20px';
		pApp.divEmergenteExperiencias.style.boxShadow = '-4px 4px 10px #F4CC70'; //F4CC70

	if(window.matchMedia('(max-width:575px)').matches){

		pApp.tituloExpTec.style.marginTop = '45px';
		pApp.tituloExpTec.style.fontSize = '30px';

		pApp.listaEsxp.style.paddingTop = '40px';
		pApp.listaEsxp.style.paddingLeft = '10px';


		pApp.divEmergenteExperiencias.style.border = '6px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '300px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-150px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 767px) and (min-width: 576px)').matches){

		pApp.divEmergenteExperiencias.style.border = '10px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '400px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-200px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 991px) and (min-width: 768px)').matches){

		pApp.listaEsxp.style.paddingTop = '40px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '500px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-250px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else{

		pApp.listaEsxp.style.paddingTop = '40px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '700px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '300px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-150px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-350px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}
		if(pApp.animacion == 'slideLeft'){
			pApp.divEmergenteExperiencias.style.top = '50%';
			pApp.divEmergenteExperiencias.style.left = 0;
			pApp.divEmergenteExperiencias.style.opacity = 0;

			setTimeout(function(){

				pApp.divEmergenteExperiencias.style.transition = '.5s left ease';

				pApp.divEmergenteExperiencias.style.left = '50%';
				pApp.divEmergenteExperiencias.style.opacity = 1;
				pApp.divEmergenteExperiencias.style.marginLeft = -pApp.divEmergenteExperiencias.childNodes[0].width/2 + 'px';
				pApp.divEmergenteExperiencias.style.marginTop = -pApp.divEmergenteExperiencias.childNodes[0].height/2 + 'px';
			},50)
		}

		pApp.divEmergenteExperiencias.childNodes[0].style.position = 'absolute';
		pApp.divEmergenteExperiencias.childNodes[0].style.right = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.top = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.color ='#F4CC70';
		pApp.divEmergenteExperiencias.childNodes[0].style.cursor ='pointer';
		pApp.divEmergenteExperiencias.childNodes[0].style.fontSize = '30px';
		pApp.divEmergenteExperiencias.childNodes[0].style.width = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.heigth = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.textAlign ='center';
		//pApp.divEmergenteExperiencias.childNodes[0].style.background = '#EE7913'; //DE7A22
		pApp.divEmergenteExperiencias.childNodes[0].style.border = '2px solid #EE7913';
		pApp.divEmergenteExperiencias.childNodes[0].style.borderRadius = '0px 0px 0px 5px';

		pApp.divEmergenteExperiencias.childNodes[0].addEventListener('click', mApp.salirDescripcion);
});

pApp.expDes7.addEventListener("click",function(e){

	console.log('Experiencia tecnica tres');

		pApp.body.appendChild(document.createElement('DIV')).setAttribute('id', 'fondo');
 		pApp.fondo = document.querySelector('#fondo');
 		pApp.fondo.style.width = '100%';
 		pApp.fondo.style.height = '100%';
 		pApp.fondo.style.position = 'fixed';
		pApp.fondo.style.zIndex = '10';
		pApp.fondo.style.background = 'rgba(0,0,0,.9)';
		pApp.fondo.style.top = 0;
		pApp.fondo.style.left = 0;

		pApp.fondo.appendChild(document.createElement('DIV')).setAttribute('id', 'experiencia');
		pApp.divEmergenteExperiencias = document.querySelector('#experiencia');
		pApp.divEmergenteExperiencias.style.color = '#81715E';
		pApp.divEmergenteExperiencias.style.textAlign = 'center'

		pApp.divEmergenteExperiencias.appendChild(document.createElement('DIV')).setAttribute('id', 'btnCerrar');
		pApp.btnCerrar = document.querySelector('#btnCerrar');
		pApp.btnCerrar.className = 'glitch';
		pApp.btnCerrar.setAttribute('data-text', 'X');
		pApp.btnCerrar.innerHTML = 'X';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('H2')).setAttribute('id', 'tituloExpTec');
		pApp.tituloExpTec = document.querySelector('#tituloExpTec');
		pApp.tituloExpTec.style.textAlign = 'center';
		pApp.tituloExpTec.style.marginTop = '40px';
		pApp.tituloExpTec.className = 'glitch';
		//pApp.tituloExpTec.setAttribute('data-text', 'Frameworks');
		pApp.tituloExpTec.innerHTML = 'Frameworks';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('UL')).setAttribute('id', 'listaEsxp');
		pApp.listaEsxp = document.querySelector('#listaEsxp');
		pApp.listaEsxp.style.textAlign = 'left';
		pApp.listaEsxp.style.display = 'inline-block';
		pApp.listaEsxp.style.paddingTop = '30px';
		pApp.listaEsxp.innerHTML = `<li>Bootstrap</li> 
									<li>Materialize</li>
									<li>Font Awesom</li>
									<li>Spring</li>
									<li>Struts</li>
									<li>Maven</li>
									<li>Angular</li>
									<li>Hibernate</li>`;
		
		pApp.divEmergenteExperiencias.style.position = 'absolute'; // 'relative';
		pApp.divEmergenteExperiencias.style.top = '50%'; /* Buscamos el centro horizontal (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.display = 'block';
		pApp.divEmergenteExperiencias.style.left = '50%'; /* Buscamos el centro vertical (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22
		pApp.divEmergenteExperiencias.style.borderRadius='20px';
		pApp.divEmergenteExperiencias.style.boxShadow = '-4px 4px 10px #F4CC70'; //F4CC70

	if(window.matchMedia('(max-width:575px)').matches){

		pApp.tituloExpTec.style.marginTop = '45px';
		pApp.tituloExpTec.style.fontSize = '30px';

		pApp.listaEsxp.style.paddingTop = '40px';
		pApp.listaEsxp.style.paddingLeft = '10px';

		pApp.divEmergenteExperiencias.style.border = '6px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '300px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '400px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-200px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-150px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 767px) and (min-width: 576px)').matches){

		pApp.listaEsxp.style.paddingTop = '50px';

		pApp.divEmergenteExperiencias.style.border = '10px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '400px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '400px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-200px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-200px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 991px) and (min-width: 768px)').matches){

		pApp.listaEsxp.style.paddingTop = '40px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '500px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '400px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-200px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-250px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else{

		pApp.listaEsxp.style.paddingTop = '40px';

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '700px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '400px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-200px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-350px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}
		if(pApp.animacion == 'slideLeft'){
			pApp.divEmergenteExperiencias.style.top = '50%';
			pApp.divEmergenteExperiencias.style.left = 0;
			pApp.divEmergenteExperiencias.style.opacity = 0;

			setTimeout(function(){

				pApp.divEmergenteExperiencias.style.transition = '.5s left ease';

				pApp.divEmergenteExperiencias.style.left = '50%';
				pApp.divEmergenteExperiencias.style.opacity = 1;
				pApp.divEmergenteExperiencias.style.marginLeft = -pApp.divEmergenteExperiencias.childNodes[0].width/2 + 'px';
				pApp.divEmergenteExperiencias.style.marginTop = -pApp.divEmergenteExperiencias.childNodes[0].height/2 + 'px';
			},50)
		}

		pApp.divEmergenteExperiencias.childNodes[0].style.position = 'absolute';
		pApp.divEmergenteExperiencias.childNodes[0].style.right = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.top = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.color ='#F4CC70';
		pApp.divEmergenteExperiencias.childNodes[0].style.cursor ='pointer';
		pApp.divEmergenteExperiencias.childNodes[0].style.fontSize = '30px';
		pApp.divEmergenteExperiencias.childNodes[0].style.width = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.heigth = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.textAlign ='center';
		//pApp.divEmergenteExperiencias.childNodes[0].style.background = '#EE7913'; //DE7A22
		pApp.divEmergenteExperiencias.childNodes[0].style.border = '2px solid #EE7913';
		pApp.divEmergenteExperiencias.childNodes[0].style.borderRadius = '0px 0px 0px 5px';

		pApp.divEmergenteExperiencias.childNodes[0].addEventListener('click', mApp.salirDescripcion);
});

pApp.expDes8.addEventListener("click",function(e){

	console.log('Experiencia tecnica tres');

		pApp.body.appendChild(document.createElement('DIV')).setAttribute('id', 'fondo');
 		pApp.fondo = document.querySelector('#fondo');
 		pApp.fondo.style.width = '100%';
 		pApp.fondo.style.height = '100%';
 		pApp.fondo.style.position = 'fixed';
		pApp.fondo.style.zIndex = '10';
		pApp.fondo.style.background = 'rgba(0,0,0,.9)';
		pApp.fondo.style.top = 0;
		pApp.fondo.style.left = 0;

		pApp.fondo.appendChild(document.createElement('DIV')).setAttribute('id', 'experiencia');
		pApp.divEmergenteExperiencias = document.querySelector('#experiencia');
		pApp.divEmergenteExperiencias.style.color = '#81715E';
		pApp.divEmergenteExperiencias.style.textAlign = 'center'

		pApp.divEmergenteExperiencias.appendChild(document.createElement('DIV')).setAttribute('id', 'btnCerrar');
		pApp.btnCerrar = document.querySelector('#btnCerrar');
		pApp.btnCerrar.className = 'glitch';
		pApp.btnCerrar.setAttribute('data-text', 'X');
		pApp.btnCerrar.innerHTML = 'X';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('H2')).setAttribute('id', 'tituloExpTec');
		pApp.tituloExpTec = document.querySelector('#tituloExpTec');
		pApp.tituloExpTec.style.textAlign = 'center';
		pApp.tituloExpTec.style.marginTop = '40px';
		pApp.tituloExpTec.className = 'glitch';
		//pApp.tituloExpTec.setAttribute('data-text', 'Patrones de diseño');
		pApp.tituloExpTec.innerHTML = 'Patrones de diseño';

		pApp.divEmergenteExperiencias.appendChild(document.createElement('UL')).setAttribute('id', 'listaEsxp');
		pApp.listaEsxp = document.querySelector('#listaEsxp');
		pApp.listaEsxp.style.textAlign = 'left';
		pApp.listaEsxp.style.display = 'inline-block';
		pApp.listaEsxp.style.paddingTop = '30px';
		pApp.listaEsxp.innerHTML = `<li>MVC</li>
									<li>DAO</li>
									<li>DTO</li>`;
		
		pApp.divEmergenteExperiencias.style.position = 'absolute'; // 'relative';
		pApp.divEmergenteExperiencias.style.top = '50%'; /* Buscamos el centro horizontal (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.display = 'block';
		pApp.divEmergenteExperiencias.style.left = '50%'; /* Buscamos el centro vertical (relativo) del navegador */
		//pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22
		pApp.divEmergenteExperiencias.style.borderRadius='20px';
		pApp.divEmergenteExperiencias.style.boxShadow = '-4px 4px 10px #F4CC70'; //F4CC70

	if(window.matchMedia('(max-width:575px)').matches){

		pApp.tituloExpTec.style.marginTop = '50px';
		pApp.tituloExpTec.style.fontSize = '30px';

		pApp.listaEsxp.style.paddingTop = '10px';
		//pApp.listaEsxp.style.paddingLeft = '10px';

		pApp.divEmergenteExperiencias.style.border = '6px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '300px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '200px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-100px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-150px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 767px) and (min-width: 576px)').matches){

		pApp.divEmergenteExperiencias.style.border = '10px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '400px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '250px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-125px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-200px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else if(window.matchMedia('(max-width: 991px) and (min-width: 768px)').matches){

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '500px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '250px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-125px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-250px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}else{

		pApp.divEmergenteExperiencias.style.border = '16px solid #EE7913'; // DE7A22

		pApp.divEmergenteExperiencias.style.width = '700px'; // '100%' Definimos el ancho del objeto a centrar 
		pApp.divEmergenteExperiencias.style.height = '250px'; // Definimos el alto del objeto a centrar
		pApp.divEmergenteExperiencias.style.marginTop = '-125px'; /* Restamos la mitad de la altura del objeto con un margin-top */
		pApp.divEmergenteExperiencias.style.marginLeft = '-350px'; /* Restamos la mitad de la anchura del objeto con un margin-left */
		//pApp.divEmergenteExperiencias.style.border = '16px solid white';

	}
		if(pApp.animacion == 'slideLeft'){
			pApp.divEmergenteExperiencias.style.top = '50%';
			pApp.divEmergenteExperiencias.style.left = 0;
			pApp.divEmergenteExperiencias.style.opacity = 0;

			setTimeout(function(){

				pApp.divEmergenteExperiencias.style.transition = '.5s left ease';

				pApp.divEmergenteExperiencias.style.left = '50%';
				pApp.divEmergenteExperiencias.style.opacity = 1;
				pApp.divEmergenteExperiencias.style.marginLeft = -pApp.divEmergenteExperiencias.childNodes[0].width/2 + 'px';
				pApp.divEmergenteExperiencias.style.marginTop = -pApp.divEmergenteExperiencias.childNodes[0].height/2 + 'px';
			},50)
		}

		pApp.divEmergenteExperiencias.childNodes[0].style.position = 'absolute';
		pApp.divEmergenteExperiencias.childNodes[0].style.right = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.top = '0px';
		pApp.divEmergenteExperiencias.childNodes[0].style.color ='#F4CC70';
		pApp.divEmergenteExperiencias.childNodes[0].style.cursor ='pointer';
		pApp.divEmergenteExperiencias.childNodes[0].style.fontSize = '30px';
		pApp.divEmergenteExperiencias.childNodes[0].style.width = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.heigth = '40px';
		pApp.divEmergenteExperiencias.childNodes[0].style.textAlign ='center';
		//pApp.divEmergenteExperiencias.childNodes[0].style.background = '#EE7913'; //DE7A22
		pApp.divEmergenteExperiencias.childNodes[0].style.border = '2px solid #EE7913';
		pApp.divEmergenteExperiencias.childNodes[0].style.borderRadius = '0px 0px 0px 5px';

		pApp.divEmergenteExperiencias.childNodes[0].addEventListener('click', mApp.salirDescripcion);
});

 mApp.inicioApp();