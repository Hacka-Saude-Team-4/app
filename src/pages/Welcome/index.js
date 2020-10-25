import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function index({ navigation }) {
	const navigateToLoginScreen = () => {
		navigation.navigate('Login');
	};

	const navigateToRegisterScreen = () => {
		navigation.navigate('ChooseUser');
	};

	const navigateToChooseUser = (screen) => {
		navigation.navigate('ChooseUser', {
			screen,
		});
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => navigateToChooseUser('Login')}
				style={styles.btn}
			>
				<View>
					<Text>Login</Text>
				</View>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => navigateToChooseUser('Register')}
				style={styles.btn}
			>
				<View>
					<Text>Cadastro</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}
