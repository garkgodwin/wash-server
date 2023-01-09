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
      otpActivated: {
        type: String,
        default: null,
      },
      otpForgotten: {
        type: String,
        default: null,
      },
      address: {
        type: String,
      },
      latitude: {
        type: String,
      },
      longitude: {
        type: String,
      },
    },
    { timestamps: true }
  );
  const User = model("users", schema);
  return User;
};
