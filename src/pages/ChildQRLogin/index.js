import React, { useState, useEffect } from 'react';
import client from '../../config/config';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import Modal from 'react-native-modal';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import LoadingScreen from '../LoadingScreen';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function index({ navigation }) {
	const [isModalVisible, setModalVisible] = useState(true);
	const [secondModalVisible, setSecondModalVisible] = useState(true);
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);
	const [childID, setChildID] = useState('');
	const [childName, setChildName] = useState('');

	useEffect(() => {
		if (!hasPermission) {
			(async () => {
				const { status } = await BarCodeScanner.requestPermissionsAsync();
				setHasPermission(status === 'granted');
			})();
		}

		if (scanned) {
			loginUser();
		}
	}, [childID, scanned]);

	const handleBarCodeScanned = ({ type, data }) => {
		setScanned(true);
		setChildID(data);
		setSecondModalVisible(true);
	};

	if (hasPermission === null) {
		return <LoadingScreen />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	const storeData = async (key, value) => {
		try {
			await AsyncStorage.setItem(key, value);
		} catch (err) {
			console.warn('AsyncStorage Error: ' + err);
		}
	};

	const navigateToChildHomeScreen = () => {
		navigation.navigate('ChildHome');
	};

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	const cancelUser = () => {
		setScanned(false);
		setSecondModalVisible(false);
	};

	const confirmUser = () => {
		// TODO: change to ChildHomeScreen
		setSecondModalVisible(false);
		navigateToChildHomeScreen();
	};

	const loginUser = async () => {
		if (childID !== '') {
			try {
				const res = await client.post('/child/login', {
					id: childID,
				});

				if (res.status === 200) {
					// Store JWT access token
					if (res.data.accessToken) {
						storeData('accessToken', res.data.accessToken);
						setChildName(res.data.child.name);
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
			<LoadingScreen />

			<Modal
				useNativeDriver={true}
				isVisible={isModalVisible}
				onBackdropPress={() => setModalVisible(false)}
			>
				<View style={styles.modal}>
					<Text style={styles.msg}>Escaneie o código QR</Text>
					<Image
						style={styles.gif}
						source={require('../../../assets/lottieQRScan.gif')}
					/>
					<Text style={styles.eduh}>
						Peça que seu responsável te cadastre na plataforma e gere um código
						QR para você :)
					</Text>

					<TouchableOpacity style={styles.okBtn} onPress={toggleModal}>
						<View>
							<Text style={styles.textOkBtn}>Ok</Text>
						</View>
					</TouchableOpacity>
				</View>
			</Modal>

			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={StyleSheet.absoluteFillObject}
			>
				{!scanned && (
					<BarcodeMask
						lineAnimationDuration={1000}
						animatedLineColor={'whitesmoke'}
						width={300}
						height={300}
					/>
				)}

				<Modal
					useNativeDriver={true}
					isVisible={scanned && secondModalVisible}
					onBackdropPress={() => setSecondModalVisible(false)}
				>
					<View style={styles.modal}>
						<View style={styles.msg3}>
							<MaterialIcons name='account-circle' size={40} color='black' />
							<Text style={styles.msg2}>Fazer login como {childName}</Text>
						</View>

						<Image
							style={styles.gif2}
							source={require('../../../assets/watermelonHi.gif')}
						/>

						<View style={styles.loginConfirmationBtns}>
							<TouchableOpacity style={styles.decline} onPress={cancelUser}>
								<View>
									<MaterialIcons name='cancel' size={50} color='red' />

									<Text style={styles.styleIcon}>Cancelar</Text>
								</View>
							</TouchableOpacity>

							<TouchableOpacity style={styles.accept} onPress={confirmUser}>
								<View>
									<FontAwesome
										style={styles.styleIcon}
										name='check-circle'
										size={50}
										color='green'
									/>
									<Text>Confirmar</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
			</BarCodeScanner>
		</View>
	);
}
