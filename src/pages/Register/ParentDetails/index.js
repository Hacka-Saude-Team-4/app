import React, { useState } from 'react';
import client from '../../../config/config';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

export default function index({ navigation }) {
	const [name, setName] = useState('');
	const [birthdate, setBirthdate] = useState('');
	const [gender, setGender] = useState('');
	const [relationship, setRelationship] = useState('');
	const [buttonPressed, setButtonPressed] = useState(false);

	const next = () => {
		if (
			name !== '' &&
			birthdate !== '' &&
			gender !== '' &&
			relationship !== ''
		) {
			setButtonPressed(true);
		} else {
			alert('Por favor preencha todos os campos antes de continuar.');
		}
	};

	return (
		<View style={styles.container}>
			{!buttonPressed && (
				<View style={styles.container}>
					<Text>Criar conta como responsável</Text>
					<View style={styles.inputContainer}>
						<Text style={styles.inputTitle}>Nome completo</Text>
						<TextInput
							autoCapitalize='none'
							placeholder='João da Silva'
							style={styles.textInput}
							value={name}
							onChangeText={(text) => setName(text)}
						></TextInput>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputTitle}>Data de nascimento</Text>
						<TextInput
							autoCapitalize='none'
							placeholder='24/11/1984'
							style={styles.textInput}
							value={birthdate}
							onChangeText={(text) => setBirthdate(text)}
						></TextInput>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputTitle}>Gênero</Text>
						<TextInput
							autoCapitalize='none'
							placeholder='Homem'
							style={styles.textInput}
							value={gender}
							onChangeText={(text) => setGender(text)}
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
							value={relationship}
							onChangeText={(text) => setRelationship(text)}
						></TextInput>
					</View>

					<TouchableOpacity style={styles.sendBtn} onPress={next}>
						<View>
							<Text>Próximo</Text>
						</View>
					</TouchableOpacity>
				</View>
			)}

			{buttonPressed && (
				<View>
					<Text>pressed</Text>
				</View>
			)}

			{/* <View>
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
			</View> */}
		</View>
	);
}
