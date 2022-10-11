import { Schema, model, models } from 'mongoose';

const UsersSchema = new Schema({
  _id: [Schema.Types.ObjectId],
  firstName: String,
  middleName: String,
  lastName: String,
  companyName: String,
  email: String,
  contactNumber: Number,
  userType: {
    type: String,
    enum: ['Broker', 'Truck Owner']
  },
  subscriptionType: { type: Number, min: 1, max: 3},
  businessPermitNo: String,
  ratings: Schema.Types.Decimal128
});

const Users = models.Users || model('Users', UsersSchema);

export default Users;