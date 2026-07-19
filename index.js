const express = require("express");
const books = require("./in-mem-db");

const app = express();
const PORT = 8000;

// ROUTES

app.get("/books", (req, res) => {
	res.status(200).json(books);
});

// dynamic route for individual id book IYKYK

app.get("/books/:id", (req, res) => {
	const id = parseInt(req.params.id);
	if (isNaN(id)) return res.status(400).json({ error: "its a bad request id" });
	const book = books.find((e) => e.id === id);

	if (!book) return res.status(404).json({ error: "book not found" });

	return res.json(book);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
