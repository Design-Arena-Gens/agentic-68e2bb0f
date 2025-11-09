"use client";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container-max">
        <h2 className="section-title mb-8">Let?s build something great</h2>
        <form
          action={onSubmit}
          className="card p-6 grid sm:grid-cols-2 gap-4"
        >
          <div className="sm:col-span-1">
            <label className="text-sm text-white/70">Name</label>
            <input name="name" required className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="sm:col-span-1">
            <label className="text-sm text-white/70">Email</label>
            <input type="email" name="email" required className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-white/70">Message</label>
            <textarea name="message" rows={5} required className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="sm:col-span-2 flex items-center gap-3">
            <button type="submit" disabled={status === "loading"} className="btn-primary rounded-xl">
              {status === "loading" ? "Sending?" : "Send message"}
            </button>
            {status === "success" && <span className="text-sm text-emerald-400">Sent! I?ll get back to you shortly.</span>}
            {status === "error" && <span className="text-sm text-rose-400">Something went wrong. Try again.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
