import mongoose from 'mongoose';

const Schema = mongoose.Schema; //Schema is a constructor function provided by Mongoose for creating schema instances (in this case, UserSchema)


const UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movies' }]
});
export default mongoose.model('User', UserSchema); //associates the schema instance with a database collection named 'User'
