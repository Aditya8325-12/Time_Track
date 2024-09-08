const { z } = require("zod");

exports.authoSchema = z.object({
  name: z.string({ required_error: "User Name Does not exist" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalide email address " })
    .min(8, { message: "name must be 8 char " }),
  password: z
    .string({ required_error: "Invalid password" })
    .trim()
    .min(8, { message: "password must be 8 char " }),
  isAdmin: z.boolean().optional().default(false),
});

exports.contactSchema = z.object({
  name: z.string({ required_error: "name must be required" }),
  email: z
    .string({ required_error: "email must be required" })
    .email({ required_error: "email is not valid " }),
  message: z.string({ required_error: "plese add some text" }),
  phone: z
    .number({ required_error: "plese add the number " })
    .min(1000000000, { required_error: "plese add the 10 digit number " })
    .max(9999999999, { required_error: "number must be  10 char" }),
});


