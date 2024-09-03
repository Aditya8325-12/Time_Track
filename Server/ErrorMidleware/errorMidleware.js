const errorHandler = (err, req, res, next) => {
  const error = {
    status: err.status || 422,
    message: err.errors[0].message || "Server Error ",
    extradata: err.data || " check all server connection ",
  };

  console.log("error handler");
  return res.status(422).json({ error });
};

module.exports = errorHandler;
