import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function index() {
	const [cpf, setCPF] = useState('');
	const [cep, setCEP] = useState('');

	const navigateToAddChildrenScreen = () => {
		// Navigate
		console.warn('add children');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				Informe apenas mais alguns dados para que possamos melhorar nossas
				políticas públicas :)
			</Text>
			<View style={styles.inputContainer}>
				<Text style={styles.inputTitle}>CPF</Text>
				<TextInput
					keyboardType='numeric'
					placeholder='15298865298'
					style={styles.textInput}
					value={cpf}
					onChangeText={(text) => setCPF(text)}
				></TextInput>
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.inputTitle}>CEP (código postal)</Text>
				<TextInput
					keyboardType='numeric'
					placeholder='29101558'
					style={styles.textInput}
					value={cep}
					onChangeText={(text) => setCEP(text)}
				></TextInput>
			</View>

			<TouchableOpacity
				style={styles.yes}
				onPress={navigateToAddChildrenScreen}
			>
				<View>
					<Text style={styles.textTouchable}>Avançar</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}
