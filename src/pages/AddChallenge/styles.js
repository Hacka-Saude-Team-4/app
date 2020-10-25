import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	container2: {
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
		fontSize: 18,
		paddingTop: 20,
	},

	inputTitle2: {
		alignSelf: 'flex-start',
		fontSize: 18,
	},

	textInput: {
		height: 80,
		width: 300,
		borderRadius: 15,
		borderColor: 'gray',
		borderWidth: 1,
		paddingLeft: 12,
		fontSize: 20,
	},

	heightInputContainer: {
		flexDirection: 'row',
		width: 250,
		justifyContent: 'flex-start',
	},

	textInputHeight: {
		height: 60,
		width: 80,
		borderRadius: 15,
		borderColor: 'gray',
		borderWidth: 1,
		paddingLeft: 12,
		fontSize: 40,
		// marginRight: 20,
	},

	unitMeasure: {
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		textAlignVertical: 'bottom',
		width: 40,
		marginLeft: 5,
		fontSize: 30,
	},

	textInputTouchable: {
		height: 40,
		width: 250,
		borderRadius: 15,
		borderColor: 'gray',
		borderWidth: 1,
		paddingLeft: 12,
		justifyContent: 'center',
	},

	sendBtn: {
		marginTop: 15,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 15,
		padding: 10,
	},

	coin: {
		width: 80,
		height: 80,
	},

	coinWrapper: {
		justifyContent: 'center',
		// backgroundColor: 'red',
		width: 300,
	},

	coinInputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		// backgroundColor: 'red',
		alignItems: 'center',
	},

	coinInput: {
		height: 60,
		width: 150,
		borderRadius: 15,
		borderColor: 'gray',
		borderWidth: 1,
		paddingLeft: 12,
		fontSize: 30,
	},

	coinOk: {
		height: 100,
		justifyContent: 'space-between',
		alignItems: 'stretch',
		// backgroundColor: 'blue',
	},

	x: {
		fontSize: 22,
	},

	flag: {
		marginTop: StatusBar.currentHeight,
		width: 120,
		height: 120,
		backgroundColor: 'gray',
		borderRadius: 15,
	},

	title: {
		fontSize: 25,
	},

	picker: {
		height: 50,
		width: 150,
		borderColor: 'gray',
		borderWidth: 1,
	},

	pickerWrapper: {
		height: 50,
		width: 150,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 15,
		paddingLeft: 5,
	},

	new: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// backgroundColor: 'blue',
		width: 300,
	},
});
