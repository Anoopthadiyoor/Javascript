function createSecretMessage() {
    const secret = "This is classified information.";
    
    return function revealSecret() {
        console.log(secret);
    };
}

const showSecret = createSecretMessage();
showSecret(); // Output: This is classified information.
