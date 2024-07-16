import { dbConnect } from "@/utils/dbConnection";
//import noFound function
import { notFound } from "next/navigation";

export default async function RollerIdPage({ params }) {
  // ima call the dbConnect function to get the db
  const db = dbConnect();
  // write a sql query to get all the data from the database
  const roller = (
    await db.query(`SELECT * FROM coasterrollers WHERE id = ${params.rollerId}`)
  ).rows[0];

  // we want our app to display the not-found page only when there is not a param matching the database id
  if (!roller) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is an individual cart: {params.rollerId}</h1>
      <div key={roller.id}>
        <h2>{roller.name}</h2>
        <p>{roller.country}</p>
        <p>{roller.height}</p>
      </div>
    </main>
  );
}
