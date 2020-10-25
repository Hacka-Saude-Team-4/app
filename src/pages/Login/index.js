import React, { useState } from 'react';
import client from '../../config/config';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

export default function index({ navigation }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const storeData = async (key, value) => {
		try {
			await AsyncStorage.setItem(key, value);
		} catch (err) {
			console.warn('AsyncStorage Error: ' + err);
		}
	};

	const navigateToParentHomeScreen = () => {
		navigation.navigate('ParentHome');
	};

	const loginUser = async () => {
		if (email !== '' && password !== '') {
			try {
				const res = await client.post('/user/login', {
					email,
					password,
				});

				if (res.status === 200) {
					// Store JWT access token
					if (res.data.accessToken) {
						storeData('accessToken', res.data.accessToken);

						// Navigate to Parent details
						navigateToParentHomeScreen();
					} else {
						console.warn(res.data);
						throw Error('No access token. User not allowed.');
					}
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
			<Text>Fazer login na plataforma</Text>
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

			<TouchableOpacity style={styles.sendBtn} onPress={loginUser}>
				<View>
					<Text>Entrar</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}
