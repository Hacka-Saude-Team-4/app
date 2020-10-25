import React from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

export default function index({ navigation }) {
	const navigateToParentCPFScreen = () => {
		navigation.navigate('ParentCPF');
	};

	const navigateToMyChildrenScreen = () => {
		navigation.navigate('ParentHome');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.permissionText}>
				Você aceita compartilhar os dados cadastrados e gerados na plataforma
				com profissionais da saúde para pesquisas e ações futuras?
			</Text>

			<View style={styles.requestPermission}>
				<TouchableOpacity
					style={styles.yes}
					onPress={navigateToParentCPFScreen}
				>
					<View>
						<Text style={styles.text}>Sim</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.yes}
					onPress={navigateToMyChildrenScreen}
				>
					<View>
						<Text style={styles.text}>Não</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}
