import React, { useCallback, useEffect, useState } from 'react';

const SecondComponent = ({ id }) => {
	const [post, setPost] = useState(null);
	const getData = useCallback(async () => {
		const result = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		);
		const data = await result.json();
		console.log('data', data);
		setPost({ ...data, image: `https://picsum.photos/${id}100` });
	}, [id]);
	useEffect(() => {
		getData();
	}, [getData, id]);
	const getDate = (date) => {
		return new Date(date).toDateString();
	};
	return (
		<div>
			{post && (
				<div className="card">
					<div className="card-header">
						<img src={post.image} alt={post.title} />
					</div>
					<div className="card-content">
						<h2>{post.title}</h2>
						<p>{post.body}</p>
						<b>{getDate('11/11/2022')}</b>
					</div>
				</div>
			)}
			<h4>Items</h4>
			<ul>
				<li>first item</li>
				<li>second item</li>
				<li>third item</li>
				<li>some item</li>
			</ul>
		</div>
	);
};

export default SecondComponent;
