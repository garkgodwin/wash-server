module.exports = ({ Schema, model }) => {
  const schema = Schema(
    {
      customer: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      type: {
        type: Number, // 1 - walk-in | 2 - customer online booking
        required: true,
      },
      date: {
        type: String,
      },
      laundries: [
        {
          regular: Number,
          white: Number,
          maong: Number,
          comforter: Number,
        },
      ],
      subTotal: {
        type: Number,
      },
      total: {
        type: Number,
      },
      paymentStatus: {
        type: Boolean,
        default: false,
      },
      status: {
        type: Number, // 1 - pick-up, 2 - washing, 3 - preparing for delivery, 4 - out for delivery, 5- delivered
        required: true,
      },
    },
    { timestamps: true }
  );
  const Booking = model("bookings", schema);
  return Booking;
};
