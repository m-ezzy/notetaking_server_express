import { Router } from 'express';
import { note } from './controllers.js';

let allRouter = Router();
let notesRouter = Router();

notesRouter
.post("/", note.list)
.post("/detail", note.detail)
.post("/create", note.create)
.post("/update", note.update)
.post("/delete", note.delete);

allRouter.use("/api/notes", notesRouter);

allRouter.get("/", ( req, res, next ) => {
  let result = {
		cookies: req.cookies,
		signedCookies: req.signedCookies,
		secret: req.secret,
		sessionID: req.sessionID,
		session: req.session,
		sessionStore: req.sessionStore,
		user: req.user
	};
	console.log(result);
	res.json(result);
});

export default allRouter;
