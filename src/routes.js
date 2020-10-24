import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import BarcodeReader from './pages/BarcodeReader';

export default function routes() {
	const { Navigator, Screen } = createStackNavigator();

	return (
		<NavigationContainer>
			<Navigator>
				<Screen name='Welcome' component={Welcome}></Screen>
				<Screen name='Login' component={Login}></Screen>
				<Screen name='BarcodeReader' component={BarcodeReader}></Screen>
			</Navigator>
		</NavigationContainer>
	);
}
