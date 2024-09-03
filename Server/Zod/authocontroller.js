const { z } = require("zod");

const authoSchema = z.object({
  name: z.string({ required_error: "User Name Does not exist" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalide email address " })
    .min(8, { message: "name must be 8 char " }),
  password: z
    .string({ required_error: "Invalid password" })
    .trim()
    .min(8, { message: "password must be 8 char " }),
});

module.exports = authoSchema;
