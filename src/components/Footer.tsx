export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#" className="text-lg font-bold">
            Gig<span className="text-violet">ForYou</span>
          </a>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#categories" className="hover:text-gray-900 transition-colors">Browse</a>
            <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} GigForYou. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
