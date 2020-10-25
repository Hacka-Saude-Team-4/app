import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	inputContainer: {
		justifyContent: 'center',
		padding: 10,
	},

	inputTitle: {
		alignSelf: 'flex-start',
		padding: 3,
	},

	textInput: {
		height: 40,
		width: 250,
		width: 250,
		borderRadius: 10,
		borderColor: 'gray',
		borderWidth: 1,
		paddingLeft: 12,
	},

	sendBtn: {
		marginTop: 15,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 20,
		padding: 10,
	},
});
