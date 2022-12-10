import profileReducer, { addPostActionCreator } from "./profile-reducer";

const state = {
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
      id: 2,
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
    }]
};

it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra.com");
// 2. action
  const newState = profileReducer(state, action);
// 3. expectation
expect(newState.posts.length).toBe(4);
});

it('message of new post should be correct', () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra.com");
// 2. action
  const newState = profileReducer(state, action);
// 3. expectation
expect(newState.posts[3].text).toBe("it-kamasutra.com");
});