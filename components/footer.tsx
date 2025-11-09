export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container-max py-10 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>? {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="text-white/50">Built with Next.js, Tailwind CSS and ??</p>
      </div>
    </footer>
  );
}
