import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState = {
  posts: [
    {
      id: 0,
      fullName: {
        firstName: 'Григорий',
        lastName: 'Унгурян'
      },
      date: '28 сен в 15:07',
      text: 'Скоро выложим демо проекта над которым трудимся, это будет бомба, после релиз.',
      images: 'img1',
      likeCount: 152,
      commentCount: 23,
      repostCount: 14,
      viewCount: 12
    },
    {
      id: 1,
      fullName: {
        firstName: 'Анастасия',
        lastName: 'Таран'
      },
      date: '21 апр в 18:30',
      text: 'А мы на конец то в долгожданном отпуске, всем до встречи!',
      images: 'img2',
      likeCount: 179,
      commentCount: 25,
      repostCount: 19,
      viewCount: 17
    },
    {
      id: 0,
      fullName: {
        firstName: 'Григорий',
        lastName: 'Унгурян'
      },
      date: '09 апр в 12:00',
      text: 'Всем привет, теперь я тоже здесь',
      likeCount: 119,
      commentCount: 31,
      repostCount: 12,
      viewCount: 16
    }],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 0,
        fullName: {
          firstName: 'Григорий',
          lastName: 'Унгурян'
        },
        date: '28 сен в 15:07',
        text: action.newPostText,
        images: false,
        likeCount: 0,
        commentCount: 0,
        repostCount: 0,
        viewCount: 1
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
}

export const addPostActionCreator = (newPostText) => ({ type: 'ADD-POST', newPostText });

export const setUserProfile = (profile) => ({ type: 'SET-USER-PROFILE', profile });

export const setStatus = (status) => ({ type: 'SET-STATUS', status });

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;