import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <head>
        <title>Movie Database</title>
        <meta name="description" content="A simple movie database for users" />
        <main className="container mx-auto py-10 px-4 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-8 text-white">Movie Database</h1>
        </main>
      </head>
    </div>
  );
}
