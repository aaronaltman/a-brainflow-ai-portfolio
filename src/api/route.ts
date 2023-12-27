import { createNoteSchema } from "@/lib/validation/note";

export async function Post(req: Request) {
  try {
    const body = req.body;
    // const note = noteSchema.parse(body);
    const parseResult = createNoteSchema.safeParse(body);
    if (!parseResult.success) {
      return { status: 400, body: { error: parseResult.error } };
    }
  } catch (error) {
    console.log(error, "error");
    return { status: 500, body: { error: error } };
  }
}
