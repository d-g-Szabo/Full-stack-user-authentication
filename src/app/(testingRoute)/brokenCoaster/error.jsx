// we need to destructure 2 elements from our Error object: message and stack
"use client";
// this is a client component bc we need the onClick event
// Error paged need to go in the client

// this is a client component bc we need the onClick event
// events are client component

// we will need the reset function as an event in the button
export default function ErrorPage({ error, reset }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>OH NO! Your cart is upside down. Whoops!</h1>
      <p>{error.message}</p>
      <p>{error.stack}</p>
      <button onClick={() => reset()}>Reset</button>
    </main>
  );
}
