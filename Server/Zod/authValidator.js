exports.validator = (Schema) => async (req, res, next) => {
  try {
    const parsebody = await Schema.parseAsync(req.body);
    req.body = parsebody;
    next();
  } catch (err) {
    next(err);
  }
};

exports.contactValidator = (contactzodSchema) => async (req, res, next) => {
  try {
    const parsebody = await contactzodSchema.parseAsync(req.body);
    req.body = parsebody;
    next();
  } catch (err) {
    next(err);
  }
};
