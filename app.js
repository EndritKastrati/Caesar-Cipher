function caesarCipher(text, shift) {
    return text
        .split('')
        .map(char => {
            const code = char.charCodeAt(0);
            let encryptedChar = char;

            if (code >= 65 && code <= 90) {
                encryptedChar = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                encryptedChar = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }

            return encryptedChar;
        })
        .join('');
}

function enkriptimi() {
    const input = document.getElementById('input').value;
    const shift = parseInt(document.getElementById('shift').value);
    const encryptedText = caesarCipher(input, shift);
    document.getElementById('output').value = encryptedText;
}

function dekriptimi() {
    const input = document.getElementById('input').value;
    const shift = parseInt(document.getElementById('shift').value);
    const decryptedText = caesarCipher(input, (26 - shift) % 26);
    document.getElementById('output').value = decryptedText;
}
