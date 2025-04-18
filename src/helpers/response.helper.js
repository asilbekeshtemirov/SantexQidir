exports.successResponse = (res, data, message = "Success") => {
  res.status(200).json({ success: true, message, data });
};

exports.errorResponse = (
  res,
  message = "Something went wrong",
  status = 500
) => {
  res.status(status).json({ success: false, message });
};
