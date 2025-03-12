import { ConvexError, v } from 'convex/values';

import { query, mutation } from './_generated/server';

export const create = mutation({
  args: {
    title: v.optional(v.string()),
    initialContent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const ueser = await ctx.auth.getUserIdentity();

    if (!ueser) {
      throw new ConvexError('Unauthorized');
    }

    return await ctx.db.insert('documents', {
      title: args.title ?? 'Untitled Document',
      ownerId: ueser.subject,
      initialContent: args.initialContent,
    });
  },
});

export const get = query({
  handler: async (ctx) => {
    return await ctx.db.query('documents').collect();
  },
});
