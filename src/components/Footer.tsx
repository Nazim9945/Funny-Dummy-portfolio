

export default function Footer() {
    const Year = new Date().getFullYear();
  return (
    <footer className="sm:p-4 p-2 text-center text-gray-500 sm:w-200 w-100 mx-auto">
      <small className="mb-2 block text-xs">
        &copy; {Year} Salman. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
