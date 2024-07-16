import Link from "next/link";

export default function notFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>No users were Found!</h1>
      <Link href="/">Go back</Link>
    </main>
  );
}
