import React, { useState } from 'react';
import client from '../../../config/config';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

export default function index({ route, navigation }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const readData = async (key) => {
		try {
			const value = await AsyncStorage.getItem(key);
			if (value !== null) {
				console.warn(value);
			}
		} catch (e) {
			// error reading value
		}
	};

	const test = () => {
		readData('accessToken');
	};

	return (
		<View style={styles.container}>
			<Text>Criar conta como responsável</Text>
			<View style={styles.inputContainer}>
				<Text style={styles.inputTitle}>Nome completo</Text>
				<TextInput
					autoCapitalize='none'
					textContentType='emailAddress'
					placeholder='João da Silva'
					style={styles.textInput}
					value={email}
					onChangeText={(text) => setEmail(text)}
				></TextInput>
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitle}>Data de nascimento</Text>
				<TextInput
					autoCapitalize='none'
					placeholder='24/11/1984'
					style={styles.textInput}
					textContentType='password'
					value={password}
					onChangeText={(text) => setPassword(text)}
				></TextInput>
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitle}>Gênero</Text>
				<TextInput
					autoCapitalize='none'
					placeholder='Homem'
					style={styles.textInput}
					textContentType='password'
					value={password}
					onChangeText={(text) => setPassword(text)}
				></TextInput>
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitle}>
					Grau de parentesco com a(s) criança(s)
				</Text>
				<TextInput
					autoCapitalize='none'
					placeholder='Pai'
					style={styles.textInput}
					textContentType='password'
					value={password}
					onChangeText={(text) => setPassword(text)}
				></TextInput>
			</View>

			<TouchableOpacity style={styles.sendBtn} onPress={test}>
				<View>
					<Text>Próximo</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}
