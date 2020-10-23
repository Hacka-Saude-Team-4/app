import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BarcodeReader from './pages/BarcodeReader';

export default function routes() {
	const { Navigator, Screen } = createStackNavigator();

	return (
		<NavigationContainer>
			<Navigator>
				<Screen name='BarcodeReader' component={BarcodeReader}></Screen>
			</Navigator>
		</NavigationContainer>
	);
}
