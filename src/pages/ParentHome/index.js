import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
// import styles from './styles';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import MyChildren from '../MyChildren';

const FirstRoute = () => (
	<View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
	<View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const getTabBarIcon = (props) => {
	const { route } = props;

	if (route.key === 'account') {
		return <MaterialCommunityIcons name='account' size={24} color='white' />;
	} else if (route.key === 'children') {
		return <FontAwesome name='child' size={24} color='white' />;
	} else if (route.key === 'stats') {
		return <SimpleLineIcons name='graph' size={24} color='white' />;
	}
};

const initialLayout = { width: Dimensions.get('window').width };

export default function index({ navigation }) {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'account' },
		{
			key: 'stats',
		},
		{
			key: 'children',
		},
	]);

	const renderScene = SceneMap({
		account: FirstRoute,
		stats: SecondRoute,
		children: MyChildren,
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
					indicatorStyle={{ backgroundColor: 'red' }}
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
