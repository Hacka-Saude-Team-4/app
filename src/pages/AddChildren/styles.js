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
		borderRadius: 10,
		borderColor: 'gray',
		borderWidth: 1,
		paddingLeft: 12,
	},

	heightInputContainer: {
		flexDirection: 'row',
		width: 250,
		justifyContent: 'flex-start',
	},

	textInputHeight: {
		height: 60,
		width: 80,
		borderRadius: 10,
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
		borderRadius: 10,
		borderColor: 'gray',
		borderWidth: 1,
		paddingLeft: 12,
		justifyContent: 'center',
	},

	sendBtn: {
		marginTop: 15,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 20,
		padding: 10,
	},
});
