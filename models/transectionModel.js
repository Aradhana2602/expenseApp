const mongoose = reuire("mongoose");

const transectionSchema = new mongoose.Schema(
  {
    amount: {
      type: nunmber,
      required: [true, "amount is required"],
    },
    category: {
      type: String,
      requires: [truw, "cat is required"],
    },
    refrence: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "desc is required"],
    },
    date: {
      type: String,
      required: [true, "data is required"],
    },
  },
  { timestamps: true }
);

const transetionModel = mongoose.model("transection", transectionSchema);
