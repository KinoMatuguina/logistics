import { Schema, model, models } from 'mongoose';

const UsersSchema = new Schema({
  name: String,
});

const Users = models.Users || model('Users', UsersSchema);

export default Users;