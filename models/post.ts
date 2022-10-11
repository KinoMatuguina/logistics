import { Schema, model, models } from 'mongoose';

const PostsSchema = new Schema({
    createdBy: [Schema.Types.ObjectId],
    type: ["Load", "Truck"],
    location: String,
    destination: String,
    const: Schema.Types.Decimal128,
    departureDateTime: Date,
    estimatedArrivalTime: Date,
    vihecleInformation: String,
    weight: Schema.Types.Decimal128
}, {timestamps: true});

const Posts = models.Posts || model('Posts', PostsSchema);

export default Posts;