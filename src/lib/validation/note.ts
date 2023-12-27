import z from "zod";

export const createNoteSchema = z.object({
  title: z.string().min(1, { message: "title required" }).max(100),
  content: z.string().optional().max(1000),
  tags: z.array().items(z.string()),
  color: Joi.string().required(),
  createdAt: Joi.string().required(),
  updatedAt: Joi.string().required(),
  id: Joi.string().required(),
  userId: Joi.string().required(),
});

export type Note = z.infer<typeof noteSchema>;
