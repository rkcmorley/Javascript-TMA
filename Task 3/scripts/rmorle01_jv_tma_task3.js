function calculateRanking(points) {
    switch (true) {
        case(points >= 2400):
            console.log("Senior Master");
            break;
        case(points >= 2200 && points <= 2399):
            console.log("National Master");
            break;
        case(points >= 2000 && points <= 2199):
            console.log("Expert");
            break;
        case(points >= 1800 && points <= 1999):
            console.log("Class A");
            break;
        case(points >= 1600 && points <= 1799):
            console.log("Class B");
            break;
        default:
            console.log("This ranking is too low. Must be higher than 1600.");
            break;
    }
}

function displayRanking() {
    calculateRanking(2206);
}

displayRanking();