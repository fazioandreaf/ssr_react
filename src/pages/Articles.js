import React, { useEffect, useState } from "react";

export const Articles = () => {
	const [articles, setArticles] = useState();

	useEffect(() => {
		fetch("/api/articles")
			.then((response) => response.json())
			.then((data) => setArticles(data));
	}, []);

	return (
		<>
			<h1>Articles</h1>
			{articles &&
				articles.map((article) => {
					return (
						<div>
							<h3>{article.title}</h3>
							<p> by {article.author}</p>
						</div>
					);
				})}
		</>
	);
};
