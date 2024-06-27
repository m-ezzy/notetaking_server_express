import { Note } from './models.js';

const note = {};

note.list = async (req, res, next) => {
	await Note.find()
	.then((notes) => {
		return res.status(200).json({ notes });
	})
	.catch((err) => {
		return res.status(500).json({ err });
	});
}
note.detail = (req, res, next) => {
	Note.find({ _id: req.body.note_id })
	.then((note) => {
		return res.status(200).json({ note });
	})
	.catch((err) => {
		return res.status(500).json({ err });
	});
}
note.create = async (req, res, next) => {
	const note = await Note.create(req.body)
	return res.status(200).json({ note_id: note._id });
}
note.update = async (req, res, next) => {
	const note = await Note.findOne({ _id: req.body.updatedNote._id });
	note.title = req.body.updatedNote.title;
	note.content = req.body.updatedNote.content;
	await note.save();
	return res.status(200).json({ status: true });
}
note.delete = async (req, res, next) => {
	await Note.deleteOne({ _id: req.body.note_id });
	return res.status(200).json({ status: true });
}

export { note }
