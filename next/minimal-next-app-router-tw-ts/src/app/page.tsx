export default function Home() {
  return (
    <div className="text-foreground grid min-h-screen place-items-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="mx-auto mb-4 w-fit bg-gradient-to-r from-sky-600 to-sky-300 bg-clip-text text-4xl font-bold text-transparent">
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
