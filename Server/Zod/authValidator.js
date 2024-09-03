const validator = (Schema) => async (req, res, next) => {
  try {
    const parsebody = await Schema.parseAsync(req.body);
    req.body = parsebody;
    next();
  } catch (err) {
    next(err);
    // res.status(400).json({ message: err.errors[0].message });
  }
};

module.exports = validator;
