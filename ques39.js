// Implement the Caesar cypher

function caesarCipherEncrypt(text, shift) {
    return text.split('').map(char => {
        
        if (char.match(/[a-z]/i)) {
            
            let charCodeBase = char === char.toUpperCase() ? 65 : 97;

            
            let encryptedChar = String.fromCharCode(
                ((char.charCodeAt(0) - charCodeBase + shift) % 26) + charCodeBase
            );

            return encryptedChar;
        } else {
            
            return char;
        }
    }).join('');
}


function caesarCipherDecrypt(text, shift) {
    
    return caesarCipherEncrypt(text, -shift);
}


const plaintext = "Hello, World!";
const shift = 3;

const encryptedText = caesarCipherEncrypt(plaintext, shift);
console.log("Encrypted:", encryptedText); 

const decryptedText = caesarCipherDecrypt(encryptedText, shift);
console.log("Decrypted:", decryptedText);
