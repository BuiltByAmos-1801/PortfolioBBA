"use client";

import Section from "./Section";
import Image from "next/image";
import { projects } from "@/lib/data";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

type Project = (typeof projects)[number];

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button onClick={onOpen} className="group text-left">
      <div className="overflow-hidden rounded-lg border border-zinc-200 transition hover:shadow-md dark:border-zinc-800">
        <div className="relative h-40 w-full bg-zinc-50 dark:bg-zinc-900">
          <Image src={project.image} alt={project.title} fill className="object-contain p-6 group-hover:scale-105 transition-transform dark:invert" />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{project.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Dialog.Root key={p.title} open={active?.title === p.title} onOpenChange={(o) => !o && setActive(null)}>
            <Dialog.Trigger asChild>
              <ProjectCard project={p} onOpen={() => setActive(p)} />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
              <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
                <Dialog.Title className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</Dialog.Title>
                <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{p.details}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a href={p.links.live} target="_blank" className="rounded-md bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300">Live Demo</a>
                  <a href={p.links.github} target="_blank" className="rounded-md border border-zinc-300 px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900">GitHub</a>
                </div>
                <Dialog.Close className="absolute right-4 top-4 rounded-full border px-2 py-1 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">Close</Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ))}
      </div>
    </Section>
  );
}


