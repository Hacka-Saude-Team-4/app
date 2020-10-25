import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	SafeAreaView,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import client from '../../config/config';
import { readData } from '../../services/asyncStorage';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import styles from './styles';

export default function index({ navigation }) {
	const [childChallenges, setChildChallenges] = useState([]);
	const isFocused = useIsFocused();

	useEffect(() => {
		(async () => {
			try {
				const res = await client.get('/child/challenges', {
					headers: {
						Authorization: `Bearer ${await readData('accessToken')}`,
					},
				});

				if (res.status === 200) {
					setChildChallenges(res.data.challenges);
				}
			} catch (err) {
				console.warn('Error while trying to get children.', err);
			}
		})();
	}, [isFocused]);

	// TODO: add its own component-- nah, NO TIME BROTHA
	const Item = ({ title, reward, cost, level }) => (
		<View>
			<View style={styles.item}>
				<View style={styles.childInfo}>
					<Text style={styles.name}>Desafio: {title}</Text>
					<Text style={styles.name}>Recompensa: {reward}</Text>
					<Text style={styles.name}>Custo: {cost}</Text>
					<Text style={styles.name}>Nível para desbloquear: {level}</Text>
				</View>
			</View>
		</View>
	);

	const renderItem = ({ item }) => (
		<Item
			title={item.title}
			reward={item.description}
			cost={item.cost}
			level={item.level}
		/>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.permissionText}>CHILD REWARDS</Text>

			<SafeAreaView style={styles.flatListArea}>
				<FlatList
					data={childChallenges}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
				/>
			</SafeAreaView>
		</View>
	);
}
