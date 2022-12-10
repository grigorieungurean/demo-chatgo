import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../../redux/profile-reducer";
import {connect} from 'react-redux';

import ProfilePostsAdd from "./add";


const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
};

const mapDispathToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => {
         dispatch(updateNewPostTextActionCreator(text));
      },
      addPost: () => {
         dispatch(addPostActionCreator());
      }
   }
};

const ProfilePostsAddContainer = connect(mapStateToProps, mapDispathToProps) (ProfilePostsAdd);

export default ProfilePostsAddContainer;