import React, { useState } from 'react';
import client from '../../config/config';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

export default function index({ route, navigation }) {
	const { userType } = route.params;
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const registerUser = async () => {
		if (email !== '' && password !== '') {
			try {
				const res = await client.post('/parent/register', {
					email,
					password,
				});

				if (res.status === 200) {
					// Store JWT access token
					// Navigate to Parent details
				}
			} catch (err) {
				console.warn('Error: ' + err);
			}
		} else {
			console.warn('Por favor, preencha seus dados antes de registrar.');
		}
	};

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
					value={email}
					onChangeText={(text) => setEmail(text)}
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
					value={password}
					onChangeText={(text) => setPassword(text)}
				></TextInput>
			</View>

			<TouchableOpacity style={styles.sendBtn} onPress={registerUser}>
				<View>
					<Text>Cadastrar-se</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}
