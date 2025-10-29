import Section from "./Section";
import { skills } from "@/lib/data";

function SkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Frontend</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.frontend.map((s) => (
              <SkillBadge key={s} label={s} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Backend</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.backend.map((s) => (
              <SkillBadge key={s} label={s} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Tools</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.tools.map((s) => (
              <SkillBadge key={s} label={s} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Database</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.database.map((s) => (
              <SkillBadge key={s} label={s} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Cloud</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.cloud.map((s) => (
              <SkillBadge key={s} label={s} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Soft Skills</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.soft.map((s) => (
              <SkillBadge key={s} label={s} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}


