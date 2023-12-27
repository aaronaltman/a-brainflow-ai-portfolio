import z from "zod";

export const createNoteSchema = z.object({
  title: z.string().min(1, { message: "title required" }).max(100),
  content: z.string().optional(),
});

export type Note = z.infer<typeof createNoteSchema>;
