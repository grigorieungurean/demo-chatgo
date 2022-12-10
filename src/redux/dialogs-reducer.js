const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
	dialogs: [
		{
			id: 1,
			fullName: {
				firstName: 'Анастасия',
				lastName: 'Таран'
			},
			lastMessage: 'Привет, гуляем?',
			time: '15:07'
		},
		{
			id: 2,
			fullName: {
				firstName: 'Сергей',
				lastName: 'Орлов'
			},
			lastMessage: 'Да, я буду там',
			time: '12:10'
		},
		{
			id: 3,
			fullName: {
				firstName: 'Елена',
				lastName: 'Унгурян'
			},
			lastMessage: 'Я рядом',
			time: '11:23'
		},
		{
			id: 4,
			fullName: {
				firstName: 'Дима',
				lastName: 'Арчаков'
			},
			lastMessage: 'Привет, идём?',
			time: '21:34'
		},
		{
			id: 5,
			fullName: {
				firstName: 'Максим',
				lastName: 'Орс'
			},
			lastMessage: 'Я уже доделал',
			time: '20:10'
		},
		{
			id: 6,
			fullName: {
				firstName: 'Ионика',
				lastName: 'Чаркина'
			},
			lastMessage: 'Привет',
			time: '15:08'
		},
		{
			id: 7,
			fullName: {
				firstName: 'Вадим',
				lastName: 'Кравец'
			},
			lastMessage: 'Завтра будет',
			time: '15:22'
		},
		{
			id: 8,
			fullName: {
				firstName: 'Юля',
				lastName: 'Путина'
			},
			lastMessage: 'Ща скину',
			time: '22:01'
		},
		{
			id: 9,
			fullName: {
				firstName: 'Андрей',
				lastName: 'Потапов'
			},
			lastMessage: 'Супер',
			time: '07:47'
		},
		{
			id: 10,
			fullName: {
				firstName: 'Виктор',
				lastName: 'Мальцев'
			},
			lastMessage: 'ахха',
			time: '15:08'
		}],
	messages: [
		{
			id: 3,
			fullName: {
				firstName: 'Елена',
				lastName: 'Унгурян'
			},
			message: 'Я верю',
			time: '17:54'
		},
		{
			id: 0,
			fullName: {
				firstName: 'Григорий',
				lastName: 'Унгурян'
			},
			message: 'Спасибо, я знаю',
			time: '17:55'
		},
		{
			id: 3,
			fullName: {
				firstName: 'Елена',
				lastName: 'Унгурян'
			},
			message: '😗',
			time: '17:55'
		}]
};

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case SEND_MESSAGE:

			const newMessage = {
				id: 0,
				fullName: {
					firstName: 'Григорий',
					lastName: 'Унгурян'
				},
				message: action.newMessageBody,
				time: '17:56'
			};
			return {
				...state,
				messages: [...state.messages, newMessage],
			};
		default:
			return state;
	}
}

export const sendMessageCreator = (newMessageBody) => ({ type: 'SEND-MESSAGE', newMessageBody });

export default dialogsReducer;