import React from "react";
import style from './posts.module.css';

import ProfilePostsAdd from "./add/add";
import ProfilePostsSort from "./sort/sort";
import ProfilePostsList from "./list/list";

const Posts = (props) => {
	return (
		<div className={style.posts}>
			<ProfilePostsAdd addPost={props.addPost} />
			<ProfilePostsSort />
			<ProfilePostsList posts={props.posts} />
		</div>
	);
};

export default Posts;