import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8 text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/" target="_blank" className="hover:text-zinc-900 dark:hover:text-zinc-100">GitHub</Link>
          <Link href="https://www.linkedin.com/" target="_blank" className="hover:text-zinc-900 dark:hover:text-zinc-100">LinkedIn</Link>
          <a href="#home" className="rounded-full border px-3 py-1 hover:bg-zinc-50 dark:hover:bg-zinc-900">Top</a>
        </div>
      </div>
    </footer>
  );
}


