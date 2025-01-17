import React, { useEffect, useState } from 'react';
import client from '../../config/config';
import { View, Text, FlatList, SafeAreaView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DateTime } from 'luxon';
import Modal from 'react-native-modal';
import QRCode from 'react-native-qrcode-svg';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ActionButton from 'react-native-action-button';

import styles from './styles';

export default function index() {
	const navigation = useNavigation();
	const isFocused = useIsFocused();
	const [children, setChildren] = useState([]);
	const [isModalVisible, setModalVisible] = useState(false);
	const [selectedChild, setSelectedChild] = useState('');
	const [selectedChildID, setSelectedChildID] = useState('');

	const toggleModal = (name, id) => {
		setModalVisible(!isModalVisible);
		setSelectedChild(name);
		setSelectedChildID(id);
	};

	const readData = async (key) => {
		try {
			const value = await AsyncStorage.getItem(key);
			if (value !== null) {
				return value;
			}
		} catch (e) {
			console.warn('Error while reading AsyncStorage', e);
			return null;
		}
	};

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
				}
			} catch (err) {
				console.warn('Error while trying to get children.', err);
			}
		})();
	}, [isFocused]);

	const navigateToAddChildrenScreen = () => {
		navigation.navigate('AddChildren');
	};

	const calculateAge = (date) => {
		let start = DateTime.fromISO(date);
		let end = DateTime.local();

		let diffInYears = end.diff(start, 'years');
		let time = diffInYears.toObject();

		return time.years;
	};

	const Item = ({ name, birthdate, id, heightM, heightCM, weight }) => (
		<View>
			<View style={styles.item}>
				<View style={styles.childInfo}>
					<View style={styles.childMore}>
						<Image
							style={styles.baby}
							source={require('../../../assets/babyFace.png')}
						/>
						<View>
							<Text style={styles.name1}>{name.toUpperCase()}</Text>
							<Text style={styles.name}>
								{Math.floor(calculateAge(birthdate))} anos
							</Text>
						</View>
					</View>

					{/* <Text style={styles.name}>{weight} kg</Text> */}
					{/* <Text style={styles.name}> */}
					{/* {heightM}m{heightCM}cm{' '} */}
					{/* </Text> */}
				</View>

				<TouchableOpacity
					style={styles.qr}
					onPress={() => toggleModal(name, id)}
				>
					<MaterialCommunityIcons name='qrcode' size={35} color='black' />
				</TouchableOpacity>
			</View>
		</View>
	);

	const renderItem = ({ item }) => (
		<Item
			name={item.name}
			birthdate={item.birthdate}
			id={item.id}
			height={item.height}
			heightM={item.heightM}
			heightCM={item.heightCM}
			weight={item.weight}
		/>
	);

	return (
		<View style={styles.container}>
			<View style={styles.sa}>
				<Image
					style={styles.coin}
					source={require('../../../assets/family.png')}
				/>
				<Text style={styles.family}>Minha família</Text>
			</View>

			<SafeAreaView style={styles.flatListArea}>
				<FlatList
					data={children}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
				/>
			</SafeAreaView>
			<ActionButton
				buttonColor='#04A777'
				onPress={() => {
					navigateToAddChildrenScreen();
				}}
			/>
			<Modal
				useNativeDriver={true}
				isVisible={isModalVisible}
				onBackdropPress={() => setModalVisible(false)}
			>
				<View style={styles.modal}>
					<Text style={styles.access}>Conceder acesso a {selectedChild}</Text>
					<QRCode value={selectedChildID.toString()} size={200} />
					<Text style={styles.eduh}>
						Seu filho deve escanear o QR Code para que possa acessar a
						plataforma.
					</Text>

					<TouchableOpacity title='Hide modal' onPress={toggleModal} />
				</View>
			</Modal>
		</View>
	);
}
