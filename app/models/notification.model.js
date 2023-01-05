module.exports = ({ Schema, model }) => {
  const schema = Schema(
    {
      body: String,
      mobileNumber: String,
      sent: {
        type: Boolean,
        default: false,
      },
      sentDate: {
        type: Date,
      },
    },
    { timestamps: true }
  );

  const Notification = model("notifications", schema);

  return Notification;
};
