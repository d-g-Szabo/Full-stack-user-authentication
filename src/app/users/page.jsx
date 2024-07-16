import { dbConnect } from "@/utils/dbConnection";
import { stringify } from "postcss";
import { notFound } from "next/navigation";
export default async function UsersPage() {
  const db = dbConnect();
  const users = (await db.query("SELECT * FROM users")).rows;
  if (!users) {
    notFound();
  }
  return (
    <div>
      <h1>List of Users:</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.forename + " " + user.surname}</h2>
            <p>Date of birth: {user.dab.toLocaleDateString()}</p>
            <p>Born in: {user.countryoforigin}</p>
            <p>Height: {user.height}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
}
