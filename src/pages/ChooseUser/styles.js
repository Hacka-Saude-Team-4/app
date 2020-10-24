import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	selectMenu: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: 300,
	},

	selectUser: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},

	user: {
		borderColor: 'black',
		borderWidth: 2,
		width: 85,
		height: 85,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 20,
		marginRight: 20,
	},

	userSelected: {
		borderColor: 'red',
		borderWidth: 2,
		width: 85,
		height: 85,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 20,
		marginRight: 20,
	},

	nextBtn: {
		position: 'absolute',
		bottom: 15,
		backgroundColor: 'whitesmoke',
		padding: 15,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 20,
	},
});
