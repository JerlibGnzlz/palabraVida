import { citasBiblicas } from '../javascript/citasBiblicas.js';

const btnEnviar = document.querySelector("#enviar");
const inputNombre = document.querySelector("#nombre");
const formContainer = document.querySelector(".flexbox");

const mainContainer = document.createElement("div");
mainContainer.id = "citas-container";
mainContainer.style.margin = "20px auto";
mainContainer.style.maxWidth = "800px";
mainContainer.style.textAlign = "center";
document.body.appendChild(mainContainer);

btnEnviar.addEventListener("click", function () {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    const nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre);
    if (!nombreValido) {
        alert("Por favor, ingresa un nombre válido (solo letras y espacios).");
        return;
    }

    formContainer.style.display = "none";
    mainContainer.innerHTML = "";

    agregarCitaAleatoria(nombre);

    inputNombre.value = "";




    function agregarCitaAleatoria(nombre) {
        const citaAleatoria = citasBiblicas[Math.floor(Math.random() * citasBiblicas.length)];

        const contenedor = document.createElement("div");
        contenedor.classList.add("cita-container");
        contenedor.style.border = "1px solid #ccc";
        contenedor.style.borderRadius = "10px";
        contenedor.style.padding = "20px";
        contenedor.style.margin = "20px auto";
        contenedor.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        contenedor.style.display = "flex";
        contenedor.style.flexDirection = "column";
        contenedor.style.alignItems = "center";
        contenedor.style.width = "100%";
        contenedor.style.maxWidth = "400px";


        contenedor.innerHTML = `
        <h3 style="font-size: 1.5rem; color: #333; margin-bottom: 10px;">${citaAleatoria.cita}</h3>
        <p style="font-size: 1rem; color: #555; margin: 10px 0;">
            <strong>Versículo:</strong> ${citaAleatoria.texto}
        </p>
        <p style="font-size: 1rem; color: #555; margin: 10px 0;">
            <strong>Lo que quiere decir es:</strong> ${citaAleatoria.parafraseo}
        </p>
        <img 
            src="${citaAleatoria.imagen}" 
            alt="Imagen Bíblica" 
            style="max-width: 80%; height: auto; border-radius: 10px; margin: 20px 0;"
        >
        <p style="
            font-size: 1rem; 
            font-weight: bold; 
            margin: 10px 0; 
            color: #4CAF50; 
            // text-transform: uppercase; 
            // letter-spacing: 1px; 
            text-align: center;
            background-color: #f0f8e0; 
            padding: 10px; 
            border-radius: 8px; 
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        ">
            Pastores: <br> Jerlib Gonzalez y Maria de Gonzalez
        </p>
        <p style="color: green; font-weight: bold; font-size: 1.2rem; margin: 15px 0;">
            Esta promesa es para ti, ${nombre.toUpperCase()}.
        </p>
        <button id="volver" style="
            margin-top: 20px; 
            padding: 10px 20px; 
            background-color: #4CAF50; 
            color: white; 
            border: none; 
            border-radius: 5px; 
            font-size: 14px;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s ease;
        ">
            Volver al formulario
        </button>
    `;


        mainContainer.appendChild(contenedor);

        const btnVolver = document.querySelector("#volver");
        btnVolver.addEventListener("click", function () {
            mainContainer.innerHTML = "";
            formContainer.style.display = "block";
        });
    }
});



const codigoQRDiv = document.getElementById('codigo-qr');
const codigoQR = new QRCode(codigoQRDiv, {
    text: "https://unapalabradevida.netlify.app",
    width: 200,
    height: 200,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
});