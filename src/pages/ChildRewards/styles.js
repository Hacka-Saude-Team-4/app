import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	permissionText: {
		width: 300,
		textAlign: 'center',
		fontSize: 15,
	},

	yes: {
		marginTop: 15,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 20,
		padding: 25,
	},

	text: {
		fontSize: 20,
	},

	requestPermission: {
		flexDirection: 'row',
		width: 200,
		justifyContent: 'space-around',
	},
});
