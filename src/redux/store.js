import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const store = {
	_state: {
		profilePage: {
			posts: [
				{
					id: 0,
					name: 'Григорий Унгурян',
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
					name: 'Анастасия Таран',
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
					name: 'Григорий Унгурян',
					date: '09 апр в 12:00',
					text: 'Всем привет, теперь я тоже здесь',
					likeCount: 119,
					commentCount: 31,
					repostCount: 12,
					viewCount: 16
				}],
			newPostText: ''
		},
		dialogsPage: {
			dialogs: [
				{
					id: 1,
					name: 'Анастасия Таран',
					lastMessage: 'Привет, гуляем?',
					time: '15:07'
				},
				{
					id: 2,
					name: 'Сергей Орлов',
					lastMessage: 'Да, я буду там',
					time: '12:10'
				},
				{
					id: 3,
					name: 'Елена Унгурян',
					lastMessage: 'Я рядом',
					time: '11:23'
				},
				{
					id: 4,
					name: 'Дима Арчаков',
					lastMessage: 'Привет, идём?',
					time: '21:34'
				},
				{
					id: 5,
					name: 'Максим Орс',
					lastMessage: 'Я уже доделал',
					time: '20:10'
				},
				{
					id: 6,
					name: 'Ионика Чаркина',
					lastMessage: 'Привет',
					time: '15:08'
				},
				{
					id: 7,
					name: 'Вадим Кравец',
					lastMessage: 'Завтра будет',
					time: '15:22'
				},
				{
					id: 8,
					name: 'Юля Путина',
					lastMessage: 'Ща скину',
					time: '22:01'
				},
				{
					id: 9,
					name: 'Андрей Потапов',
					lastMessage: 'Супер',
					time: '07:47'
				},
				{
					id: 10,
					name: 'Виктор Мальцев',
					lastMessage: 'ахха',
					time: '15:08'
				}],
			messages: [
				{
					id: 3,
					name: 'Елена Унгурян',
					message: 'Я верю',
					time: '17:54'
				},
				{
					id: 0,
					name: 'Григорий Унгурян',
					message: 'Спасибо, я знаю',
					time: '17:55'
				},
				{
					id: 3,
					name: 'Елена Унгурян',
					message: '😗',
					time: '17:55'
				}],
			newMessageBody: ''
		}
		,
		friendsPage: {
			friends: [
				{
					id: 1,
					name: 'Анастасия Таран',
					avatar: 'img1'
				},
				{
					id: 2,
					name: 'Анастасия Таран',
					avatar: 'img1'
				},
				{
					id: 3,
					name: 'Анастасия Таран',
					avatar: 'img1'
				},
				{
					id: 4,
					name: 'Анастасия Таран',
					avatar: 'img1'
				},
				{
					id: 5,
					name: 'Анастасия Таран',
					avatar: 'img1'
				},
				{
					id: 6,
					name: 'Анастасия Таран',
					avatar: 'img1'
				},
				{
					id: 7,
					name: 'Анастасия Таран',
					avatar: 'img1'
				},
				{
					id: 8,
					name: 'Анастасия Таран',
					avatar: 'img1'
				},
				{
					id: 9,
					name: 'Анастасия Таран',
					avatar: 'img1'
				},
				{
					id: 10,
					name: 'Анастасия Таран',
					avatar: 'img1'
				},
				{
					id: 11,
					name: 'Анастасия Таран',
					avatar: 'img1'
				},
				{
					id: 12,
					name: 'Анастасия Таран',
					avatar: 'img1'
				}
			]
		}
	},
	_callSubscriber() {
		console.log('State changed');
	},

	getState() {
		return this._state;
	},
	subcribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

		this._callSubscriber(this._state);
	}
};

export default store;