import React, { useEffect, useState } from 'react';
import client from '../../config/config';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';

export default function index() {
	const navigation = useNavigation();
	const isFocused = useIsFocused();
	const [children, setChildren] = useState([]);

	const readData = async (key) => {
		try {
			const value = await AsyncStorage.getItem(key);
			if (value !== null) {
				return value;
			}
		} catch (e) {
			console.warn('Error while reading AsyncStorage', e);
			return null;
		}
	};

	useEffect(() => {
		(async () => {
			try {
				const res = await client.get('/parent/children', {
					headers: {
						Authorization: `Bearer ${await readData('accessToken')}`,
					},
				});

				if (res.status === 200) {
					console.warn(res.data);
					setChildren(res.data.children);
				}
			} catch (err) {
				console.warn('Error while trying to get children.', err);
			}
		})();
	}, [isFocused]);

	const navigateToAddChildrenScreen = () => {
		navigation.navigate('AddChildren');
	};

	return (
		<View style={styles.container}>
			<Text>Adicionar crianças</Text>
			<TouchableOpacity onPress={navigateToAddChildrenScreen}>
				<View>
					<MaterialIcons name='add-circle-outline' size={50} color='black' />
				</View>
				{children.map((child) => {
					return (
						<View>
							<Text>{child.name}</Text>
						</View>
					);
				})}
			</TouchableOpacity>
		</View>
	);
}
