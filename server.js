import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./src/App";
import path from "path";
import fs from "fs";
const app = express();

app.use(express.static("./build", { index: false }));

const articles = [
	{ title: "Article 1", author: "Bob" },
	{ title: "Article 2", author: "Betty" },
	{ title: "Article 3", author: "Frank" },
];

app.get("/api/articles", (req, res) => {
	const loadedArticles = articles;
	res.json(loadedArticles);
});

app.get("/*", (req, res) => {
	const reactApp = renderToString(
		<StaticRouter location={req.url}>
			<App />
		</StaticRouter>
	);

	const templateFile = path.resolve("./build/index.html");
	fs.readFile(templateFile, "utf8", (err, data) => {
		if (err) {
			return res.status(500).send(err);
		}

		return res.send(
			data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
		);
	});
});

app.listen(8080, () => {
	console.log("Server is listening on port 8080");
});
