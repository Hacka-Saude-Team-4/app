import React, { useState, useEffect } from 'react';
import client from '../../config/config';
import { View, Text, Image, Picker } from 'react-native';
import { readData } from '../../services/asyncStorage';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

export default function index() {
	const navigation = useNavigation();
	const [title, setTitle] = useState('');
	const [coins, setCoins] = useState(0);
	const [selectedValue, setSelectedValue] = useState('Escolher filho');
	const [selectedValueID, setSelectedValueID] = useState('');
	const [children, setChildren] = useState([]);
	const isFocused = useIsFocused();

	useEffect(() => {
		(async () => {
			try {
				const res = await client.get('/parent/children', {
					headers: {
						Authorization: `Bearer ${await readData('accessToken')}`,
					},
				});

				if (res.status === 200) {
					setChildren(res.data.children);
					setSelectedValue(res.data.children[0].name);
				}
			} catch (err) {
				console.warn('Error while trying to get children.', err);
			}
		})();
	}, []);

	useEffect(() => {
		const selectedChild = children.filter((child) => {
			return child.name === selectedValue;
		});

		if (selectedChild && selectedChild[0]) {
			setSelectedValueID(selectedChild[0].id);
		}
	}, [selectedValue]);

	const navigateToMyChildren = () => {
		navigation.navigate('ParentHome');
	};

	const addChallenge = async () => {
		// Update parent information
		try {
			const res = await client.post(
				'/parent/challenge',
				{
					title,
					coins,
					assignedTo: parseInt(selectedValueID),
				},
				{
					headers: {
						Authorization: `Bearer ${await readData('accessToken')}`,
					},
				}
			);

			if (res.status === 200) {
				// Redirect to SISVAN agreement page
				console.warn(res.data);
				navigateToMyChildren();
			}
		} catch (err) {
			console.warn('Error while trying to send challenge.', err);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Criar desafio</Text>
			<Image
				style={styles.flag}
				source={require('../../../assets/goalFlag.png')}
			/>
			<View style={styles.inputContainer}>
				<Text style={styles.inputTitle}>Quem vai ser desafiado?</Text>

				<View style={styles.pickerWrapper}>
					<Picker
						selectedValue={selectedValue}
						style={styles.picker}
						onValueChange={(itemValue, itemIndex) => {
							setSelectedValue(itemValue);
						}}
					>
						{children.map((child) => {
							return (
								<Picker.Item
									label={child.name}
									value={child.name}
									key={child.id}
								/>
							);
						})}
					</Picker>
				</View>

				<Text style={styles.inputTitle}>Desafio</Text>

				<TextInput
					placeholder='Comer vegetais no almoço'
					style={styles.textInput}
					value={title}
					onChangeText={(text) => setTitle(text)}
				></TextInput>
			</View>

			<View style={styles.coinWrapper}>
				<View style={styles.coinInputContainer}>
					<View>
						<Text style={styles.inputTitle}>Moedas</Text>

						<View style={styles.new}>
							<TextInput
								placeholder='50'
								style={styles.coinInput}
								value={coins}
								keyboardType='numeric'
								onChangeText={(text) => setCoins(text)}
							></TextInput>
							<Text style={styles.x}>x</Text>
							<Image
								style={styles.coin}
								source={require('../../../assets/coin.png')}
							/>
						</View>
					</View>
				</View>
			</View>

			<TouchableOpacity style={styles.sendBtn} onPress={addChallenge}>
				<View>
					<Text>Lançar desafio</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}
