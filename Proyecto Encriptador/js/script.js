let encriptar_boton = document.getElementById('encriptar_boton');
let desencriptar_boton = document.getElementById('desencriptar_boton');
let copiar_boton = document.getElementById('copiar_boton');
let p_resultado = document.getElementById('resultado');

// Declaracion de variables

const encriptar = () => {
    let texto = document.getElementById('texto_ingresado').value.toLowerCase();
    let texto_array = texto.split('');

    texto = texto.replace(/á/img, "a");
    texto = texto.replace(/é/img, "e");
    texto = texto.replace(/í/img, "i");
    texto = texto.replace(/ó/img, "o");
    texto = texto.replace(/ú/img, "u");

    for (let i = 0; i < texto.length; i++){
        if(texto[i] == 'a'){
            texto_array[i] = 'ai';
        }
        else if(texto[i] == 'e'){
            texto_array[i] = 'enter';
        }
        else if(texto[i] == 'i'){
            texto_array[i] = 'imes';  
        }
        else if(texto[i] == 'o'){
            texto_array[i] = 'ober';
        }
        else if(texto[i] == 'u'){
            texto_array[i] = 'ufat';
        }
        else{
            continue;
        }
    };

    p_resultado.innerHTML = texto_array.join('');
}

const desencriptar = () => {
    let texto_encriptado = document.getElementById('texto_ingresado').value.toLowerCase();
    let texto_desencriptado = '';
    for(let i = 0; i < texto_encriptado.length; i++){
        texto_desencriptado = texto_encriptado.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    }

    p_resultado.innerHTML = texto_desencriptado;
}

const copiar = () => {
    let texto_copiado = document.getElementById('resultado').textContent;
    navigator.clipboard.writeText(texto_copiado);
    alert('Texto copiado');
    p_resultado.innerHTML = p_resultado;
    let texto_input = document.getElementById('resultado');
    texto_input.innerHTML = '<img src="../media/img_segunda_caja.png" alt="img_segunda_caja" id="img_segunda_caja">';
};

// Declaracion de funciones

encriptar_boton.onclick = encriptar;
desencriptar_boton.onclick = desencriptar;
copiar_boton.onclick = copiar;

// Match de botones y funciones
