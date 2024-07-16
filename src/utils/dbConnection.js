// set up for the database in here
import pg from "pg";
export function dbConnect() {
  const connectionString = process.env.NEXT_PUBLIC_DATABASE_URL;
  const db = new pg.Pool({
    connectionString: connectionString,
  });
  // we return the db so it is available outside of this function
  return db;
}
