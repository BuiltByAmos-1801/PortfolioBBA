"use client";

import Section from "./Section";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { profile } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Please provide a message"),
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) });
    reset();
  }

  return (
    <Section id="contact" title="Contact">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm text-zinc-700 dark:text-zinc-300">Name</label>
            <input {...register("name")} className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-300 dark:border-zinc-700" />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>
          <div>
            <label className="text-sm text-zinc-700 dark:text-zinc-300">Email</label>
            <input type="email" {...register("email")} className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-300 dark:border-zinc-700" />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>
          <div>
            <label className="text-sm text-zinc-700 dark:text-zinc-300">Message</label>
            <textarea rows={5} {...register("message")} className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-300 dark:border-zinc-700" />
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
          </div>
          <button disabled={isSubmitting} className="rounded-md bg-zinc-900 px-5 py-2.5 text-white disabled:opacity-60 dark:bg-zinc-100 dark:text-zinc-900">
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {isSubmitSuccessful && <p className="text-sm text-green-600">Thanks! I'll get back to you soon.</p>}
        </form>
        <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
          <p>Prefer email? <a href={profile.social.email} className="underline">you@example.com</a></p>
          <div className="flex gap-4">
            <a className="underline" href={profile.social.github} target="_blank">GitHub</a>
            <a className="underline" href={profile.social.linkedin} target="_blank">LinkedIn</a>
            <a className="underline" href={profile.social.twitter} target="_blank">Twitter</a>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400">{profile.location}</p>
        </div>
      </div>
    </Section>
  );
}


