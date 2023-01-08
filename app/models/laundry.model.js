module.exports = ({ Schema, model }) => {
  const schema = Schema(
    {
      regularPrice: Number,
      regularMin: Number,
      whitePrice: Number,
      whiteMin: Number,
      maongPrice: Number,
      maongMin: Number,
      comforterPrice: Number,
      comforterMin: Number,
    },
    { timestamps: true }
  );
  const Laundry = model("laundries", schema);
  return Laundry;
};
