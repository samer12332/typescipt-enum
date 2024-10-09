enum Vehicle {
    CAR = "CAR",
    BIKE = "BIKE",
    TRUCK = "TRUCK"
}

type DescriptionCreator = (VehicleType: Vehicle, model: string) => string;

const vehicleDescription: DescriptionCreator = (vehicleType, model) => {
    return `${vehicleType}: ${model}`;
}

console.log(vehicleDescription(Vehicle.CAR, 'Tesla'));
