import mongoose from "mongoose";
import { Note } from "./models.js";

const notesData = [
	{
		title: "Note 1",
		content: "Content 1",
		updated_at: Date.now(),
	},
	{
		title: "Note 2",
		content: "Content 2",
		updated_at: Date.now(),
	},
	{
		title: "Note 3",
		content: "Content 3",
		updated_at: Date.now(),
	},
];

async function clearDatabase () {
	try {
		// mongoose.connection.dropDatabase();

		await Note.deleteMany();
		console.log("database cleared");
	} catch (error) {
		console.log(`${error.message}`)
  }
}
async function populateDatabase () {
	try {
		// mongoose.connection.db.createCollection("users");

		await Note.insertMany(notesData);
		console.log("sample date loaded in database");
  } catch (error) {
		console.log(`${error.message}`);
  }
}

export { clearDatabase, populateDatabase }
