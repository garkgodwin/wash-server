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
    },
    { timestamps: true }
  );
  const Booking = model("bookings", schema);
  return Booking;
};
