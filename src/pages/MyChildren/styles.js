import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	flatListArea: {
		width: '100%',
		height: 300,
	},

	text: {
		color: 'red',
	},

	item: {
		backgroundColor: 'gray',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},

	name: {
		fontSize: 20,
		color: 'white',
	},

	addChildrenBtn: {
		position: 'relative',
		top: 20,
	},
});
