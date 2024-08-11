import mongoose from "mongoose";

const formatDate = (date) => {
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

const userSchema = new mongoose.Schema({
  name: { required: true, type: String },
  email: { required: true, type: String },
  age: { required: true, type: Number },
  created_at: {
    type: String,
    default: formatDate(new Date()),
  },
});

const User = mongoose.model("User", userSchema);

export default User;
