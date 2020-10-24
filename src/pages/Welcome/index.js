import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function index() {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.btn}>
				<View>
					<Text>Login</Text>
				</View>
			</TouchableOpacity>

			<TouchableOpacity style={styles.btn}>
				<View>
					<Text>Cadastro</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}
