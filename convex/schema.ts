import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    imageURL: v.string(),
    subscription: v.optional(v.string()),
  }).index("by_email", ["email"]),
});
