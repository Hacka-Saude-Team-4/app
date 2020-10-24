import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function index({ route, navigation }) {
	const { userType } = route.params;

	return (
		<View style={styles.container}>
			<Text>Registro para: {userType}</Text>
		</View>
	);
}
