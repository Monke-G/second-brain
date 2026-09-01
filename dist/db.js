import mongoose, { model, Schema } from "mongoose";
mongoose.connect("mongodb+srv://Monke_G:WPI6yWOjKD3SFEyw@cluster0.gocdjty.mongodb.net/");
const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String,
});
export const UserModel = model("User", UserSchema);
//# sourceMappingURL=db.js.map