import { Schema, model } from "mongoose";

export const noteSchema = Schema(
	{
		title: {
			type: String,
			// required: true,
		},
		content: { //body
			type: String,
			// required: true,
			minlength: 0,
			// maxlength: 1000,
		},
		updated_at: {
			type: Date,
			default: Date.now(),
		},
	}
);

const Note = model("Note", noteSchema);

export { Note }
