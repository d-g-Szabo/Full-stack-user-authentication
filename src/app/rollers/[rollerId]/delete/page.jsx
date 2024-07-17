import { dbConnect } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeletePage({ params }) {
  // to pre fill the edit form, we need to select the data fro mthe db
  const db = dbConnect();
  const data = (
    await db.query(`SELECT * FROM coasterrollers WHERE id = $1`, [
      params.rollerId,
    ])
  ).rows[0];

  // need a function to handle the delete submit
  async function handleDelete() {
    //! I need to tell the function to submit the form in the server
    "use server";
    // connect to the db
    const db = dbConnect();
    // delete the data from the db using the id from the params
    await db.query(`DELETE FROM coasterrollers WHERE id = $1`, [
      params.rollerId,
    ]);
    // revalidate the data
    revalidatePath("/rollers");
    // redirect to the rollers page
    redirect("/rollers");
  }
  return (
    <>
      <h1>Delete Roller</h1>
      <form action={handleDelete}>
        <button type="submit">Delete</button>
      </form>
    </>
  );
}
