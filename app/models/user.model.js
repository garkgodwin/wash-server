module.exports = ({ Schema, model }) => {
  const schema = Schema(
    {
      name: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      mobileNumber: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: Number,
        required: true,
      },
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
      longitude: {},
    },
    { timestamps: true }
  );
  const User = model("users", schema);
  return User;
};
