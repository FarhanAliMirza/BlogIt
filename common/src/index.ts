import zod from "zod";

export const authInput = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
  name: zod.string().optional(),
});

export type AuthInput = zod.infer<typeof authInput>;

export const createPostInput = zod.object({
  title: zod.string(),
  content: zod.string(),
});

export type CreatePostInput = zod.infer<typeof createPostInput>;

export const updatePostInput = zod.object({
  id: zod.number(),
  title: zod.string().optional(),
  content: zod.string().optional(),
});

export type UpdatePostInput = zod.infer<typeof updatePostInput>;
