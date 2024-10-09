"use strict";
var Vehicle;
(function (Vehicle) {
    Vehicle["CAR"] = "CAR";
    Vehicle["BIKE"] = "BIKE";
    Vehicle["TRUCK"] = "TRUCK";
})(Vehicle || (Vehicle = {}));
const vehicleDescription = (vehicleType, model) => {
    return `${vehicleType}: ${model}`;
};
console.log(vehicleDescription(Vehicle.CAR, 'Tesla'));
