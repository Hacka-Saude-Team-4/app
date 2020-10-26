import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	SafeAreaView,
	FlatList,
	TouchableOpacity,
	Image,
} from 'react-native';
import client from '../../config/config';
import { readData } from '../../services/asyncStorage';
import { useIsFocused } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ActionButton from 'react-native-action-button';

import styles from './styles';

export default function index() {
	const [childChallenges, setChildChallenges] = useState([]);
	const isFocused = useIsFocused();

	const navigation = useNavigation();

	const navigateToAddRewardScreen = () => {
		navigation.navigate('AddReward');
	};

	useEffect(() => {
		(async () => {
			try {
				const res = await client.get('/parent/rewards', {
					headers: {
						Authorization: `Bearer ${await readData('accessToken')}`,
					},
				});

				if (res.status === 200) {
					setChildChallenges(res.data.rewards);
				}
			} catch (err) {
				console.warn('Error while trying to get children.', err);
			}
		})();
	}, [isFocused]);

	const getUserName = async (requestedId) => {
		try {
			const res = await client.get('/user/name', {
				id: parseInt(requestedId),
			});

			if (res.status === 200) {
				return res.data.username;
			}
		} catch (err) {
			console.warn('Error while trying to get child name.', err);
			return null;
		}
	};

	// TODO: add its own component-- nah, NO TIME BROTHA
	const Item = ({ title, coins, assignedToName }) => {
		return (
			<View>
				<View style={styles.item}>
					<View style={styles.childInfo}>
						<View>
							<View style={styles.fragment}>
								<Text style={styles.title}>🥇 Recompensa</Text>
								<Text style={styles.name1}>{title}</Text>
							</View>
						</View>

						<View style={styles.rightSide}>
							<View style={styles.editOrDelete}>
								<View style={styles.edit}>
									<Feather name='edit' size={24} color='black' />
								</View>

								{/* <View style={styles.edit}>
									<MaterialCommunityIcons
										name='delete'
										size={24}
										color='black'
									/>
								</View> */}
							</View>

							<View style={styles.coinContainer}>
								<Text>{coins}</Text>
								<Image
									style={styles.coin}
									source={require('../../../assets/coin.png')}
								/>
							</View>
						</View>
					</View>
				</View>
			</View>
		);
	};

	const renderItem = ({ item }) => (
		<Item
			title={item.title}
			coins={item.coins}
			assignedToName={item.assignedToName}
		/>
	);

	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Text style={styles.emoji}>🏆</Text>
				<Text style={styles.permissionText}>RECOMPENSAS</Text>
			</View>

			<View>
				<SafeAreaView style={styles.flatListArea}>
					<FlatList
						data={childChallenges}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
					/>
				</SafeAreaView>
			</View>

			<ActionButton
				buttonColor='#04A777'
				onPress={() => {
					navigateToAddRewardScreen();
				}}
			/>
		</View>
	);
}