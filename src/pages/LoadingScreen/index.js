import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default function index() {
	return (
		<View style={styles.container}>
			<Image
				style={styles.gif2}
				source={require('../../../assets/spinner.gif')}
			/>
		</View>
	);
}
