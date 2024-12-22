import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  adress: { type: Object, required: true },
  status: { type: Object, default: "Food processing" },
  date: { type: Date, default: Date.now() },
  payment: { type: Boolean, default: false },
});
const orderModel =
  mongoose.models.order || mongoose.models("order", orderSchema);
export default orderModel;
