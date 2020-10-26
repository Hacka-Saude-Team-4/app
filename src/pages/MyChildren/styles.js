import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFE598',
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

	name1: {
		color: '#04A777',
		fontSize: 20,
	},

	baby: {
		// backgroundColor: 'red',
		marginRight: 10,
	},

	childMore: {
		flexDirection: 'row',
		// backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
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

	family: {
		color: 'black',
		fontSize: 20,
		fontWeight: 'bold',
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
		width: 200,
		height: 200,
	},

	sa: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});
