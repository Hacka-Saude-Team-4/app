import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

export default function index({ navigation, route }) {
	const [selectedUser, setSelectedUser] = useState('none');
	const { screen } = route.params;

	const navigateToNextScreen = () => {
		navigation.navigate(screen, {
			userType: selectedUser,
		});
	};

	return (
		<View style={styles.container}>
			<View>
				<Text>Escolha seu tipo de usuário</Text>
			</View>

			<View style={styles.selectMenu}>
				<View style={styles.selectUser}>
					<TouchableOpacity
						style={
							selectedUser === 'parent' ? styles.userSelected : styles.user
						}
						onPress={() => setSelectedUser('parent')}
					>
						<View>
							<Text>Pai</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={selectedUser === 'child' ? styles.userSelected : styles.user}
						onPress={() => setSelectedUser('child')}
					>
						<View>
							<Text>Criança</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={
							selectedUser === 'professional'
								? styles.userSelected
								: styles.user
						}
						onPress={() => setSelectedUser('professional')}
					>
						<View>
							<Text>Profissional</Text>
						</View>
					</TouchableOpacity>
				</View>

				{selectedUser !== 'none' && (
					<View style={styles.nextBtn}>
						<TouchableOpacity onPress={navigateToNextScreen}>
							<View>
								<Text>Avançar</Text>
							</View>
						</TouchableOpacity>
					</View>
				)}
			</View>
		</View>
	);
}
