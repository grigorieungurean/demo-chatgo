import React from "react";

import style from './profile.module.css';

import User from '../../shared/user/user';
import ProfileCountFriends from "./count-friends/count-friends";

import ProfileCover from "./cover/cover";
import PostsContainer from "./posts/posts-container";
import Preloader from "../../shared/preloader/preloader";
import ProfileStatusWithHooks from "./status/status-with-hooks";

const Profile = React.memo(props => {
	console.log('Yo');
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<main className={style.profile}>
			<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
			<ProfileCover path={props.profile.cover} />
			<div className={style.info}>
				<User avatar={props.profile.photos.small} fullName={props.profile.fullName} />
				<ProfileCountFriends friendsCounter={props.profile.friendsCounter} />
			</div>
			<PostsContainer />
		</main>
	);
});

export default Profile;