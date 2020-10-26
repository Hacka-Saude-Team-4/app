import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
// import styles from './styles';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

import MyChildren from '../MyChildren';
import ParentChallenges from '../ParentChallenges';
import Settings from '../Settings';
import ParentsRewards from '../ParentsRewards';

const FirstRoute = () => (
	<View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
	<View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const getTabBarIcon = (props) => {
	const { route } = props;

	if (route.key === 'account') {
		return <FontAwesome name='trophy' size={24} color='white' />;
	} else if (route.key === 'challenges') {
		return <Foundation name='target-two' size={24} color='white' />;
	} else if (route.key === 'children') {
		return <FontAwesome name='child' size={24} color='white' />;
	} else if (route.key === 'stats') {
		return <SimpleLineIcons name='graph' size={24} color='white' />;
	} else if (route.key === 'settings') {
		return <FontAwesome5 name='cog' size={24} color='white' />;
	}
};

const initialLayout = { width: Dimensions.get('window').width };

export default function index({ navigation }) {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{
			key: 'children',
		},
		{
			key: 'challenges',
		},
		{ key: 'account' },
		{
			key: 'stats',
		},
		{
			key: 'settings',
		},
	]);

	const renderScene = SceneMap({
		children: MyChildren,
		challenges: ParentChallenges,
		account: ParentsRewards,
		stats: SecondRoute,
		settings: Settings,
	});

	return (
		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={initialLayout}
			renderTabBar={(props) => (
				<TabBar
					{...props}
					indicatorStyle={{ backgroundColor: '#04A777' }}
					renderIcon={(props) => getTabBarIcon(props)}
					tabStyle={styles.bubble}
					labelStyle={styles.noLabel}
					style={{ backgroundColor: 'black' }}
				/>
			)}
			tabBarPosition='bottom'
		/>
	);
}

const styles = StyleSheet.create({
	scene: {
		flex: 1,
	},
});
