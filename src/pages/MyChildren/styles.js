import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
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
});
