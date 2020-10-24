import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	text: {
		fontSize: 15,
		fontWeight: 'bold',
		width: 250,
		marginBottom: 50,
	},

	inputContainer: {
		justifyContent: 'center',
		padding: 10,
	},

	inputTitle: {
		alignSelf: 'flex-start',
		padding: 3,
		fontSize: 20,
	},

	textInput: {
		height: 80,
		width: 280,
		borderRadius: 10,
		borderColor: 'gray',
		borderWidth: 1,
		fontSize: 30,
		paddingLeft: 12,
	},

	yes: {
		justifyContent: 'center',
		width: 120,
		marginTop: 15,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 20,
		padding: 10,
	},

	textTouchable: {
		textAlign: 'center',
	},
});
