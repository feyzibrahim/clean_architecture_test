import mongoose, { Schema, Document } from "mongoose";

interface UserDocument extends Document {
  id: number;
  name: string;
  email: string;
}

const userSchema = new Schema({
  id: Number,
  name: String,
  email: String,
});

export default mongoose.model<UserDocument>("User", userSchema);
