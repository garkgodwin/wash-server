module.exports = ({ Schema, model }) => {
  const schema = Schema(
    {
      customer: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
      },
      type: {
        type: Number, // 1 - walk-in | 2 - customer online booking
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      laundries: [
        {
          regular: {
            type: Number,
            required: true,
          },
          white: {
            type: Number,
            required: true,
          },
          maong: {
            type: Number,
            required: true,
          },
          comforter: {
            type: Number,
            required: true,
          },
        },
      ],
      subTotal: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
      paymentStatus: {
        type: Boolean,
        required: true,
        default: false,
      },
      status: {
        type: Number, // 1 - pick-up, 2 - washing, 3 - preparing for delivery, 4 - out for delivery, 5- delivered
        required: true,
        required: true,
      },
    },
    { timestamps: true }
  );
  const Booking = model("bookings", schema);
  return Booking;
};
