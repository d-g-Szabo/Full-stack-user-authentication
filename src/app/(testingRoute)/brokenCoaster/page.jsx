// I am going to purposefully break this page to test my error page
// I am going to throw an error

export default function BrokenCoaster() {
  throw new Error("This is a broken coaster page");
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>This is a broken coaster page</h1>
      </main>
    </>
  );
}
