function getTheDeepestLake() {
    let lakes =
        [
            {
                name: "Caspian Sea",
                fathom: 56
            },
            {
                name: "Tarn Hows",
                fathom: 53
            },
            {
                name: "Crater Lake",
                fathom: 324
            },
            {
                name: "Lake Tanganyika",
                fathom: 803
            },
            {
                name: "Lake Vostok",
                fathom: 546
            },
            {
                name: "Lake Baikal",
                fathom: 897
            }
        ];

    return lakes.reduce(function (a, b) {
        return a.fathom > b.fathom ? a : b
    });
}

function convertFathomToMetre() {
    let fathom = getTheDeepestLake().fathom;
    let convertToMetre = fathom * 1.8288;
    return convertToMetre.toFixed(2);
}

function printDeepestLake() {
    console.log("The deepest lake is: " + getTheDeepestLake().name);
    console.log("This lake is " + convertFathomToMetre() + "m deep.");
}

printDeepestLake();





