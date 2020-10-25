import { StyleSheet, Dimensions } from 'react-native';

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

	flatListArea: {
		width: Dimensions.get('window').width,
		height: 400,
		marginTop: 10,
	},

	text: {
		color: 'red',
	},

	item: {
		width: Dimensions.get('window').width,
		borderColor: 'black',
		borderWidth: 1,
		padding: 20,
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
	},

	childInfo: {},

	qr: {},

	access: {
		fontSize: 20,
		paddingBottom: 30,
	},

	name: {
		fontSize: 20,
		color: 'black',
	},

	modal: {
		backgroundColor: 'white',
		height: 400,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},

	addChildrenBtn: {
		position: 'relative',
		top: 20,
	},

	eduh: {
		marginTop: 20,
		width: 200,
		textAlign: 'center',
	},
});
