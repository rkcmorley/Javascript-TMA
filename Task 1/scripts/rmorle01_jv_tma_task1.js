function getISBN() {
    return "978-0-545-01022-1";
}
console.log("The ISBN is " + getISBN());


function getLength(bookNumber) {
    let totalNumberOfDigits = "";
    for (let i = 0; i < bookNumber.length; i++) {
        if (bookNumber[i] !== bookNumber.charAt(bookNumber.search("-"))) {
            totalNumberOfDigits++;
        }
    }
    return totalNumberOfDigits;
}
console.log("This is a " + getLength(getISBN()) + " digit ISBN");


function getLastDigit(bookNumber) {
    return bookNumber.slice(-1);
}
console.log("The ISBN check digit is " + getLastDigit(getISBN()));


function getRegistrationGroup(bookNumber) {
    return bookNumber.slice(0, 3);
}
console.log("The ISBN registration group prefix is " + getRegistrationGroup(getISBN()));
