import { dbConnect } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function EditPage({ params }) {
  // to pre fill the edit form, we need to select the data fro mthe db
  const db = dbConnect();
  const data = (
    await db.query(`SELECT * FROM coasterrollers WHERE id = $1`, [
      params.rollerId,
    ])
  ).rows[0];

  console.log(data);
  // need a function to handle the update submit
  async function handleEdit(formData) {
    "use server";
    // get the form data from the inputs
    const name = formData.get("name");
    const country = formData.get("country");
    const height = formData.get("height");
    // connect to the db
    const db = dbConnect();
    await db.query(
      `UPDATE coasterrollers SET name = $1, country = $2, height = $3 WHERE id = $4`,
      [name, country, height, params.rollerId]
    );
    // revalidate the data and redirect to the page
    revalidatePath("/rollers");
    revalidatePath("/rollers/" + params.rollerId);
    redirect("/rollers/" + params.rollerId);
  }
  // need a function to handle the db connection
  //   const db = dbConnect();

  return (
    <>
      <h1>Edit Roller</h1>
      <form className="text-black" action={handleEdit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Write a name now!"
          defaultValue={data.name}
        />
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          required
          placeholder="Where IS IT? ANSWER ME!"
          defaultValue={data.country}
        />
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          min={0}
          id="height"
          name="height"
          required
          placeholder="If its not high enough I wont bother adding it..."
          defaultValue={data.height}
        />
        <button
          type="submit"
          className="flex hover:bg-red-600 h-8 hover:text-white bg-white rounded text-black items-center"
        >
          Submit
        </button>
      </form>
    </>
  );
}
