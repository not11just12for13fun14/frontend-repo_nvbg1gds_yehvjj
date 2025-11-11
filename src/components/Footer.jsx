export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Digital Support. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400" />
          <span className="text-white/80 text-sm">Digital Support</span>
        </div>
      </div>
    </footer>
  );
}
