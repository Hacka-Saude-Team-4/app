import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import Modal from 'react-native-modal';

import styles from './styles';

export default function index() {
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);

	useEffect(() => {
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	const handleBarCodeScanned = ({ type, data }) => {
		setScanned(true);
		alert(`Bar code with type ${type} and data ${data} has been scanned!`);
	};

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View style={styles.container}>
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
