function getMetricUnits(kilometres, litres) {
    let kilometresPerLitres = kilometres / litres;
    let metricUnits = 100 / kilometresPerLitres;
    let finalResult = metricUnits.toFixed(2);
    console.log("Your car has a fuel economy of " + finalResult + " litres per hundred kilometres.");
}
getMetricUnits(500, 52.28);


function getImperialUnits(kilometres, litres) {
    let gallons = litres * 0.21997;
    let miles = kilometres * 0.62137;

    let milesPerGallons = miles / gallons;
    let imperialUnits = 100 / milesPerGallons;
    let finalResult = imperialUnits.toFixed(2);
    console.log("Your car has a fuel economy of " + finalResult + " gallons per hundred miles.");
}
getImperialUnits(500, 52.28);