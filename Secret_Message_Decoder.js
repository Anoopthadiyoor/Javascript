//Q: takes a normal sentence and hides it by shifting every letter forward by 3 positions. It can then decode the message back.

function encrypt(message) {
    let result = "";

    for (let i = 0; i < message.length; i++) {
        let ch = message[i];

        if (ch >= 'a' && ch <= 'z') {
            result += String.fromCharCode((ch.charCodeAt(0) - 97 + 3) % 26 + 97);
        }
        else if (ch >= 'A' && ch <= 'Z') {
            result += String.fromCharCode((ch.charCodeAt(0) - 65 + 3) % 26 + 65);
        }
        else {
            result += ch;
        }
    }

    return result;
}

function decrypt(message) {
    let result = "";

    for (let i = 0; i < message.length; i++) {
        let ch = message[i];

        if (ch >= 'a' && ch <= 'z') {
            result += String.fromCharCode((ch.charCodeAt(0) - 97 - 3 + 26) % 26 + 97);
        }
        else if (ch >= 'A' && ch <= 'Z') {
            result += String.fromCharCode((ch.charCodeAt(0) - 65 - 3 + 26) % 26 + 65);
        }
        else {
            result += ch;
        }
    }

    return result;
}

let message = "Meet me at the park";

let secretMessage = encrypt(message);

console.log("Original:", message);
console.log("Encrypted:", secretMessage);
console.log("Decrypted:", decrypt(secretMessage));
