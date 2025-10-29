import Section from "./Section";
import { posts } from "@/lib/data";

export default function Blog() {
  return (
    <Section id="blog" title="Blog">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {posts.map((p) => (
          <a key={p.title} href={p.href} className="group rounded-xl border border-zinc-200 p-5 transition hover:shadow-md dark:border-zinc-800">
            <h3 className="font-medium text-zinc-900 group-hover:underline dark:text-zinc-100">{p.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.excerpt}</p>
            <span className="mt-3 inline-block text-sm text-zinc-900 underline dark:text-zinc-100">Read more →</span>
          </a>
        ))}
      </div>
    </Section>
  );
}


