import { Schema, model, models } from 'mongoose';
import { VehicleInformationSchema } from './vehicle-information';

const VehicleSchema = new Schema({
    customerId: [Schema.Types.ObjectId],
    vehicles: {
        type: [VehicleInformationSchema],
        default: undefined
    }
})

const Vehicle = models.Vehicle || model('Vehicle', VehicleSchema);

export default Vehicle;