// import the dbConnect that I have in dbConnection.js
import { dbConnect } from "@/utils/dbConnection";
import Link from "next/link";
import { Suspense } from "react";

// if you fetch the data in a separate file, you still need async await in the page where you are using it
export default async function RollersPage() {
  // ima call the dbConnect function to get the db
  const db = dbConnect();
  // write a sql query to get all the data from the database
  const rollers = (await db.query("SELECT * FROM coasterrollers")).rows;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>List of rollers</h1>
      <Suspense
        fallback={
          <>
            <h1>Loading...</h1>
          </>
        }
      >
        {rollers.map((roller) => (
          <div
            key={roller.id}
            className="bg-yellow-400 text-gray-900 font-bold rounded-lg p-4 cursor-pointer transition-colors hover:bg-yellow-500 hover:text-white"
          >
            <Link href={`/rollers/${roller.id}`}>
              <h2>{roller.name}</h2>
              <p>Country of origin: {roller.country}</p>
              <p>Height of the coaster: {roller.height}</p>
            </Link>
          </div>
        ))}
      </Suspense>
    </main>
  );
}
