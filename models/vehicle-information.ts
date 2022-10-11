import { Schema } from "mongoose"

export const VehicleInformationSchema = new Schema({
    vehicleType: String,
    plateNumber: String,
    registrationNo: String,
    driversLicenseNo: String
})