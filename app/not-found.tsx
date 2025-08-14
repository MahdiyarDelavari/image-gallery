import Link from "next/link";


//This page was made by AI with GitHub Copilot.

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-300 text-gray-900 overflow-hidden px-4 py-8 overflow-hidden" style={{ minHeight: 'calc(100vh - 72px)' }}>
      <div className="w-full max-w-lg px-8 py-12 rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md flex flex-col items-center">
        <h1 className="text-8xl font-extrabold mb-4 text-pink-500 drop-shadow-lg">404</h1>
        <h2 className="text-3xl font-bold mb-4 text-indigo-700">Oops! Page Not Found</h2>
        <p className="mb-8 text-lg text-center max-w-md text-gray-700">
          The page you&apos;re looking for doesn&apos;t exist.<br/>
          It might have been moved or deleted.<br/>
          But don&apos;t worry, you can always go back to the <span className="font-semibold text-pink-500">meowgallery</span>!
        </p>
        <Link href="/">
          <span className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-xl shadow-lg font-semibold hover:scale-105 hover:from-pink-600 hover:to-indigo-600 transition-all cursor-pointer">
            Go Home
          </span>
        </Link>
        <div className="mt-10 animate-bounce">
          <svg width="90" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="12" rx="10" ry="10" fill="#ffb6c1"/>
            <ellipse cx="8.5" cy="10.5" rx="1.5" ry="2" fill="#fff"/>
            <ellipse cx="15.5" cy="10.5" rx="1.5" ry="2" fill="#fff"/>
            <path d="M9 15c1.5 1 4.5 1 6 0" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            <path d="M7 7 Q8 5 12 5 Q16 5 17 7" stroke="#fff" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
      </div>
      <p className="mt-8 text-xs text-gray-500 text-center">This page was made by AI with GitHub Copilot.</p>
    </div>
  );
}
