import React from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

export default function index({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.permissionText}>CHILD REWARDS</Text>

			<View style={styles.requestPermission}>
				<TouchableOpacity style={styles.yes}>
					<View>
						<Text style={styles.text}>Sim</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}
