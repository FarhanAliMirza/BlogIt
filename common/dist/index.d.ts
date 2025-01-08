import zod from "zod";
export declare const authInput: zod.ZodObject<{
    email: zod.ZodString;
    password: zod.ZodString;
    name: zod.ZodOptional<zod.ZodString>;
}, "strip", zod.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export type AuthInput = zod.infer<typeof authInput>;
export declare const createPostInput: zod.ZodObject<{
    title: zod.ZodString;
    content: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export type CreatePostInput = zod.infer<typeof createPostInput>;
export declare const updatePostInput: zod.ZodObject<{
    id: zod.ZodNumber;
    title: zod.ZodOptional<zod.ZodString>;
    content: zod.ZodOptional<zod.ZodString>;
}, "strip", zod.ZodTypeAny, {
    id: number;
    title?: string | undefined;
    content?: string | undefined;
}, {
    id: number;
    title?: string | undefined;
    content?: string | undefined;
}>;
export type UpdatePostInput = zod.infer<typeof updatePostInput>;
