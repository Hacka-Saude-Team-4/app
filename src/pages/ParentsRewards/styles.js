import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#735290',
	},

	permissionText: {
		width: 300,
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
	},

	yes: {
		marginTop: 15,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 20,
		padding: 25,
	},

	emoji: {
		fontSize: 30,
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
		// height: Dimensions.get('window').height,
		marginTop: 10,
		height: '100%',
	},

	text: {
		color: 'red',
	},

	item: {
		width: Dimensions.get('window').width,
		borderColor: 'gray',
		borderWidth: 3,
		padding: 20,
		// paddingTop: 40,
		// paddingBottom: 40,
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
		borderRadius: 20,
		backgroundColor: '#dedede',
		// borderTopEndRadius: 20,
	},

	childInfo: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		width: '100%',
	},

	qr: {},

	access: {
		fontSize: 20,
		paddingBottom: 30,
	},

	name: {
		fontSize: 17,
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

	coin: {
		width: 40,
		height: 40,
	},

	coinContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: 200,
		justifyContent: 'flex-end',
		// backgroundColor: 'red',
	},

	title: {
		// fontWeight: 'bold',
		fontSize: 17,
		fontWeight: 'bold',
	},

	name1: {
		width: 180,
		fontSize: 20,
		flexShrink: 1,
	},

	fragment: {
		// paddingBottom: 20,
		flexDirection: 'column',
		paddingBottom: 10,
	},

	editOrDelete: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		// backgroundColor: 'red',
	},

	edit: {
		padding: 5,
	},

	rightSide: {
		position: 'relative',
		justifyContent: 'space-between',
		// backgroundColor: 'red',
		right: 15,
		// marginRight: 20,
	},

	fab: {
		position: 'absolute',
		backgroundColor: 'red',
		width: Dimensions.get('window').width,
		// justifyContent: 'flex-end',
		// alignItems: 'flex-end',
		// marginRight: 20,
	},

	main: {
		marginTop: 150,
		// backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
