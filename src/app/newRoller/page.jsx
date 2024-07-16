// we are going to create a form to collect data from the user
import { dbConnect } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewRollerPage() {
  async function handleSubmit(formData) {
    //! I need to tell the function to submit the form in the server
    "use server";
    // get the fomrData from the inputs
    const name = formData.get("name");
    const country = formData.get("country");
    const height = formData.get("height");

    // connect to the database
    const db = dbConnect();
    await db.query(
      `INSERT INTO coasterrollers (name, country, height) VALUES ($1, $2, $3)`,
      [name, country, height]
    );
    //revalidateing the data and redirecting to the page
    revalidatePath("/rollers");
    redirect("/rollers");
  }
  return (
    // I need a form with this inputs: name, country, height
    <div>
      <h1>New Roller</h1>
      {/* add the handleSubmit in the action attribute */}
      <form className="text-black" action={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Write a name now!"
        />
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          required
          placeholder="Where IS IT? ANSWER ME!"
        />
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          min={0}
          id="height"
          name="height"
          required
          placeholder="If its not high enough I wont bother adding it..."
        />
        <button
          type="submit"
          className="flex hover:bg-red-600 h-8 hover:text-white bg-white rounded text-black items-center"
        >
          Add Roller
        </button>
      </form>
    </div>
  );
}
