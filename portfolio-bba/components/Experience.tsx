import Section from "./Section";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative border-l border-zinc-200 dark:border-zinc-800">
        {experience.map((e, idx) => (
          <li key={`${e.company}-${idx}`} className="ml-6 pb-10 last:pb-0">
            <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900" />
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{e.role} · {e.company}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{e.period}</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}


