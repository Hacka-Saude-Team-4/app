import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BarcodeReader from './pages/BarcodeReader';
import Login from './pages/Login';

export default function routes() {
	const { Navigator, Screen } = createStackNavigator();

	return (
		<NavigationContainer>
			<Navigator>
				<Screen name='Login' component={Login}></Screen>
				<Screen name='BarcodeReader' component={BarcodeReader}></Screen>
			</Navigator>
		</NavigationContainer>
	);
}
