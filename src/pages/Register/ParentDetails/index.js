import React, { useState } from 'react';
import client from '../../../config/config';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

export default function index({ navigation }) {
	const [name, setName] = useState('');
	const [birthdate, setBirthdate] = useState('');
	const [gender, setGender] = useState('');
	const [relationship, setRelationship] = useState('');
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');
	const [diseases, setDiseases] = useState('');
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

	const sendParentDetails = async () => {
		// Update parent information
		console.warn('Information updated');
		// const res = await client.post('/parent/details', {
		// 	name,
		// 	birthdate,
		// 	gender,
		// 	relationship,
		// 	height,
		// 	weight,
		// 	diseases,
		// });
	};

	return (
		<View style={styles.container}>
			{!buttonPressed && (
				<View style={styles.container}>
					<Text>Criar conta como responsável</Text>
					<View style={styles.inputContainer}>
						<Text style={styles.inputTitle}>Nome completo</Text>
						<TextInput
							placeholder='João da Silva'
							style={styles.textInput}
							value={name}
							onChangeText={(text) => setName(text)}
						></TextInput>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputTitle}>Data de nascimento</Text>
						<TextInput
							placeholder='24/11/1984'
							style={styles.textInput}
							value={birthdate}
							onChangeText={(text) => setBirthdate(text)}
						></TextInput>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputTitle}>Gênero</Text>
						<TextInput
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
				<View style={styles.container}>
					<Text>Precisamos de só mais alguns dados sobre você :)</Text>
					<View style={styles.inputContainer}>
						<Text style={styles.inputTitle}>Peso</Text>
						<TextInput
							placeholder='João da Silva'
							style={styles.textInput}
							value={weight}
							onChangeText={(text) => setWeight(text)}
						></TextInput>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputTitle}>Altura</Text>
						<TextInput
							placeholder='24/11/1984'
							style={styles.textInput}
							value={height}
							onChangeText={(text) => setHeight(text)}
						></TextInput>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputTitle}>
							Tem histórico de doenças crônicas?
						</Text>
						<TextInput
							placeholder='Homem'
							style={styles.textInput}
							value={diseases}
							onChangeText={(text) => setDiseases(text)}
						></TextInput>
					</View>

					<TouchableOpacity style={styles.sendBtn} onPress={sendParentDetails}>
						<View>
							<Text>Próximo</Text>
						</View>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
}
