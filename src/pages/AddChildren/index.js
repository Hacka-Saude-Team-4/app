import React, { useState } from 'react';
import client from '../../config/config';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

export default function index({ navigation }) {
	const [name, setName] = useState('');
	const [birthdate, setBirthdate] = useState(new Date());
	const [gender, setGender] = useState('');
	const [relationship, setRelationship] = useState('');
	const [heightM, setHeightM] = useState(0);
	const [heightCM, setHeightCM] = useState(0);
	const [weight, setWeight] = useState(0);
	const [diseases, setDiseases] = useState('');
	const [buttonPressed, setButtonPressed] = useState(false);
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date) => {
		hideDatePicker();
		setBirthdate(date);
	};

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

	const readData = async (key) => {
		try {
			const value = await AsyncStorage.getItem(key);
			if (value !== null) {
				return value;
			}
		} catch (e) {
			console.warn('Error while reading AsyncStorage', err);
		}
	};

	const navigateToMyChildren = () => {
		navigation.navigate('ParentHome');
	};

	const sendChildrenDetails = async () => {
		// Update parent information

		if (heightM !== 0 && heightCM !== 0 && weight !== '' && diseases !== '') {
			try {
				const height = parseInt(heightM) * 100 + parseInt(heightCM);
				const res = await client.post(
					'/parent/child',
					{
						name,
						birthdate: birthdate.toLocaleString(),
						gender,
						relationship,
						height,
						weight,
						diseases,
					},
					{
						headers: {
							Authorization: `Bearer ${await readData('accessToken')}`,
						},
					}
				);

				if (res.status === 200) {
					// Redirect to SISVAN agreement page
					navigateToMyChildren();
				}
			} catch (err) {
				console.warn('Error while trying to update parent information.', err);
			}
		}
	};

	return (
		<View style={styles.container}>
			{!buttonPressed && (
				<View style={styles.container}>
					<Text>Criar conta para criança</Text>
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
						<TouchableOpacity
							style={styles.textInputTouchable}
							onPress={showDatePicker}
						>
							<View>
								<Text>{birthdate.toLocaleDateString()}</Text>
							</View>
						</TouchableOpacity>
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

					<DateTimePickerModal
						isVisible={isDatePickerVisible}
						mode='date'
						onConfirm={handleConfirm}
						onCancel={hideDatePicker}
					/>
				</View>
			)}

			{buttonPressed && (
				<View style={styles.container}>
					<Text>Precisamos de só mais alguns dados sobre você :)</Text>
					<View style={styles.inputContainer}>
						<Text style={styles.inputTitle}>Peso</Text>
						<View style={styles.heightInputContainer}>
							<TextInput
								placeholder='70'
								keyboardType={'numeric'}
								style={styles.textInputHeight}
								value={weight}
								onChangeText={(text) => setWeight(text)}
							></TextInput>
							<Text style={styles.unitMeasure}>kg</Text>
						</View>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputTitle}>Altura</Text>
						<View style={styles.heightInputContainer}>
							<TextInput
								placeholder='1'
								style={styles.textInputHeight}
								keyboardType={'numeric'}
								value={heightM}
								onChangeText={(text) => setHeightM(text)}
							></TextInput>
							<Text style={styles.unitMeasure}>m</Text>
							<TextInput
								placeholder='40'
								keyboardType={'numeric'}
								style={styles.textInputHeight}
								value={heightCM}
								onChangeText={(text) => setHeightCM(text)}
							></TextInput>
							<Text style={styles.unitMeasure}>cm</Text>
						</View>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputTitle}>
							Possui doenças crônicas? Quais?
						</Text>
						<TextInput
							placeholder='Diabetes, anemia...'
							style={styles.textInput}
							value={diseases}
							onChangeText={(text) => setDiseases(text)}
						></TextInput>
					</View>

					<TouchableOpacity
						style={styles.sendBtn}
						onPress={sendChildrenDetails}
					>
						<View>
							<Text>Próximo</Text>
						</View>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
}
