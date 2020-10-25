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

	gif: {
		width: 300,
		height: 300,
	},

	gif2: {
		width: 500,
		height: 500,
	},

	modal: {
		backgroundColor: 'white',
		height: 600,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},

	msg: {
		fontSize: 18,
		fontWeight: 'bold',
	},

	eduh: {
		width: 300,
		textAlign: 'center',
		marginBottom: 10,
	},

	okBtn: {
		width: 100,
		height: 50,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 20,
		justifyContent: 'center',
		marginTop: 15,
	},

	textOkBtn: {
		textAlign: 'center',
		fontSize: 20,
		color: 'black',
	},

	loginConfirmationBtns: {
		flexDirection: 'row',
		width: 200,
		justifyContent: 'space-between',
		position: 'absolute',
		bottom: 50,
	},

	msg2: {
		fontSize: 20,
		padding: 10,
	},

	msg3: {
		position: 'absolute',
		top: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},

	accept: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	},

	styleIcon: {
		textAlign: 'center',
	},

	decline: {
		justifyContent: 'center',
	},
});
