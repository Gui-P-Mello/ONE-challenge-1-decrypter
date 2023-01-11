const encryptButton = document.querySelector("#encryptButton");
const decryptButton = document.querySelector("#decryptButton");
const output = document.getElementById('output');
const copyButton = document.getElementById('copyButton');


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

function copy()
{
    navigator.clipboard.writeText(output.value);
}

/*function showText()
    {
        
    }*/

encryptButton.onclick = encrypt;
decryptButton.onclick = decrypt;
copyButton.onclick = copy;