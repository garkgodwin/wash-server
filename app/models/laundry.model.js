module.exports = ({ Schema, model }) => {
  const schema = Schema(
    {
      regularPrice: {
        type: Number,
        required: true,
      },
      regularMin: {
        type: Number,
        required: true,
      },
      whitePrice: {
        type: Number,
        required: true,
      },
      whiteMin: {
        type: Number,
        required: true,
      },
      maongPrice: {
        type: Number,
        required: true,
      },
      maongMin: {
        type: Number,
        required: true,
      },
      comforterPrice: {
        type: Number,
        required: true,
      },
      comforterMin: {
        type: Number,
        required: true,
      },
    },
    { timestamps: true }
  );
  const Laundry = model("laundries", schema);
  return Laundry;
};
