module.exports = ({ Schema, model }) => {
  const schema = Schema(
    {
      name: {
        type: String,
      },
      username: {
        type: String,
      },
      mobileNumber: {
        type: String,
      },
      password: {
        type: String,
      },
      role: Number,
      otp: {
        type: String,
        default: null,
      },
      address: {
        type: String,
      },
    },
    { timestamps: true }
  );
  const User = model("users", schema);
  return User;
};
