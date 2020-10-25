import React, { useEffect, useState } from 'react';
import client from '../../config/config';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DateTime } from 'luxon';

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

	const calculateAge = (date) => {
		let start = DateTime.fromISO(date);
		let end = DateTime.local();

		let diffInYears = end.diff(start, 'years');
		let time = diffInYears.toObject();

		return time.years;
	};

	const Item = ({ name, birthdate }) => (
		<View style={styles.item}>
			<Text style={styles.name}>{name}</Text>
			<Text style={styles.name}>
				{Math.floor(calculateAge(birthdate))} anos
			</Text>
		</View>
	);

	const renderItem = ({ item }) => (
		<Item name={item.name} birthdate={item.birthdate} />
	);

	return (
		<View style={styles.container}>
			<Text>Minhas crianças</Text>
			<SafeAreaView style={styles.flatListArea}>
				<FlatList
					data={children}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
				/>
			</SafeAreaView>
			<TouchableOpacity
				onPress={navigateToAddChildrenScreen}
				style={styles.addChildrenBtn}
			>
				<View>
					<MaterialIcons name='add-circle-outline' size={50} color='black' />
				</View>
			</TouchableOpacity>
		</View>
	);
}
