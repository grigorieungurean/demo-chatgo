import React from "react";
import ProfilePostsListItem from "./item/item";
import style from './list.module.css';

const ProfilePostsList = (props) => {
   const postsElements = props.posts.map(post => <ProfilePostsListItem key={post.id} authorFullName={post.fullName} dateTime={post.date} message={post.text} contentImageId={post.images} like={post.likeCount} comment={post.commentCount} repost={post.repostCount} view={post.viewCount} />);

   return (
      <div className={style.list}>
         { postsElements }
      </div>
   );
};

export default ProfilePostsList;