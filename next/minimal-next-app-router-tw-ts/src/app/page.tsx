export default function Home() {
  return (
    <div className="grid min-h-screen text-foreground place-items-center">
      <div className="container px-4 py-16 mx-auto text-center">
        <h1 className="mx-auto mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-sky-600 to-sky-300 bg-clip-text w-fit">
          Hello, World!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Ready to get started? <span className="font-bold">Next.js</span> is
          ready for you.
        </p>
        <p className="italic">
          Uses <span className="font-bold">Tailwind</span> for styling.
        </p>
      </div>
    </div>
  );
}
