import React, { useCallback, useEffect, useState } from 'react';

const FirstComponent = ({ id }) => {
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
						<b>{getDate('10/20/2022')}</b>
					</div>
				</div>
			)}
			<h3>some other content</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, iusto
				iste beatae adipisci quam tempore soluta quo et consequuntur quisquam.
				Quas quis quasi odit qui ratione. Earum neque voluptatum suscipit?
			</p>
		</div>
	);
};

export default FirstComponent;
