import React, { useEffect, useState } from 'react';
import client from '../../config/config';
import { View, Text, TouchableOpacity } from 'react-native';
import { removeItemValue, readData } from '../../services/asyncStorage';
import {
	useNavigation,
	useIsFocused,
	CommonActions,
} from '@react-navigation/native';

import styles from './styles';

export default function index() {
	const isFocused = useIsFocused();
	const [token, setToken] = useState('');
	const navigation = useNavigation();

	const navigateToWelcomeScreen = () => {
		navigation.dispatch(
			CommonActions.reset({
				index: 1,
				routes: [{ name: 'Welcome' }],
			})
		);
	};

	const logoutUser = () => {
		removeItemValue('accessToken');
		navigateToWelcomeScreen('Welcome');
	};

	useEffect(() => {
		(async () => {
			try {
				setToken(await readData('accessToken'));
				console.warn(token);
				const res = await client.post('/user/me', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				console.warn(token);

				if (res.status === 200) {
					console.warn(res.data);
				}
			} catch (err) {
				console.warn('Error while trying to get current user.', err, token);
			}
		})();
	}, [isFocused]);

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={logoutUser}>
				<View style={styles.btn}>
					<Text>Logout</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}
