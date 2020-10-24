import React from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

export default function index({ route, navigation }) {
	const { userType } = route.params;

	return (
		<View style={styles.container}>
			<Text>Criar conta como {userType.toUpperCase()}</Text>
			<View style={styles.inputContainer}>
				<Text style={styles.inputTitle}>E-mail</Text>
				<TextInput
					autoCapitalize='none'
					textContentType='emailAddress'
					placeholder='joao@gmail.com'
					style={styles.textInput}
				></TextInput>
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitle}>Senha</Text>
				<TextInput
					autoCapitalize='none'
					placeholder='********'
					style={styles.textInput}
					secureTextEntry={true}
					textContentType='password'
				></TextInput>
			</View>

			<TouchableOpacity style={styles.sendBtn}>
				<View>
					<Text>Cadastrar-se</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}
