function applyDiscount(discountPercentage) {
    return function(price) {
        const discountAmount = price * (discountPercentage / 100);
        const finalPrice = price - discountAmount;
        console.log(`Final price after ${discountPercentage}% discount: $${finalPrice}`);
        return finalPrice;
    };
}

const tenPercentOff = applyDiscount(10);
const fiftyPercentOff = applyDiscount(50);

tenPercentOff(200);   
fiftyPercentOff(100); 
