import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    imageURL: v.string(),
    subscription: v.string(),
  },

  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existingUser) {
      return existingUser;
    }

    return await ctx.db.insert("users", {
      name: args.name,
      email: args.email,
      imageURL: args.imageURL,
      subscription: args.subscription,
    });
  },
});
