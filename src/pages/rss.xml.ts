import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  if (context.site) {
    const posts = (await getCollection('blog')).filter(p => !p.slug.startsWith("en/"))
    return rss({
      title: 'FoxTail',
      description: 'My Personal website/blog',
      site: context.site,
      items: posts.map((post) => ({
        title: post.data.title,
        pubDate: post.data.createdAt,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
        content: sanitizeHtml(parser.render(post.body)),
      })),
      customData: `<language>ja-jp</language>`,
    });
  }
}
