import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

export default function index() {
	const addChildren = () => {
		console.warn('Add new');
	};

	return (
		<View style={styles.container}>
			<Text>Adicionar crianças</Text>
			<TouchableOpacity>
				<View>
					<MaterialIcons
						name='add-circle-outline'
						size={50}
						color='black'
						onPress={addChildren}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
}
