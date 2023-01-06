const encryptButton = document.querySelector("#codificar");
const decryptButton = document.querySelector("#decodificar");
const output = document.getElementById('output');

function encrypt()
{
        
        const text = document.getElementById('texto').value;

        const codeE = text.replaceAll("e", "enter");
        const codeI = codeE.replaceAll("i", "imes");
        const codeA = codeI.replaceAll("a", "aiai");
        const codeO = codeA.replaceAll("o", "ober");
        const codeU = codeO.replaceAll("u", "ufat");
        
        output.value = codeU;
}

function decrypt()
{
    const encryptedText = document.getElementById('texto').value;

    const codeEnter = encryptedText.replaceAll("enter", "e");
    const codeImes = codeEnter.replaceAll("imes", "i");
    const codeAiai = codeImes.replaceAll("aiai", "a");
    const codeOber = codeAiai.replaceAll("ober", "o");
    const codeUfat = codeOber.replaceAll("ufat", "u");

    output.value = codeUfat;
}

    /*function showText()
    {
        const output = document.getElementById('output');
        output.value = 

    }*/

encryptButton.onclick = encrypt;
decryptButton.onclick = decrypt;