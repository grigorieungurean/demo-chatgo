import { addPostActionCreator } from "../../../../redux/profile-reducer";
import {connect} from 'react-redux';

import Posts from './posts';

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
};

const mapDispathToProps = (dispatch) => {
   return {
      addPost: (newPostText) => {
         dispatch(addPostActionCreator(newPostText));
      }
   }
};

const PostsContainer = connect(mapStateToProps, mapDispathToProps) (Posts);

export default PostsContainer;