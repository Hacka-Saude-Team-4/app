import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import ChooseUser from './pages/ChooseUser';
import Register from './pages/Register';
import ParentDetails from './pages/Register/ParentDetails';
import SisvanConsent from './pages/Register/SisvanConsent';
import ParentCPF from './pages/Register/ParentCPF';
import BarcodeReader from './pages/BarcodeReader';

export default function routes() {
	const { Navigator, Screen } = createStackNavigator();

	return (
		<NavigationContainer>
			<Navigator>
				<Screen
					name='Welcome'
					component={Welcome}
					options={{ headerShown: false }}
				></Screen>
				<Screen name='Login' component={Login}></Screen>
				<Screen
					name='ChooseUser'
					component={ChooseUser}
					options={{ headerShown: false }}
				></Screen>
				<Screen
					name='Register'
					component={Register}
					options={{ headerShown: false }}
				></Screen>
				<Screen
					name='ParentDetails'
					component={ParentDetails}
					options={{ headerShown: false }}
				></Screen>
				<Screen
					name='SisvanConsent'
					component={SisvanConsent}
					options={{ headerShown: false }}
				></Screen>
				<Screen
					name='ParentCPF'
					component={ParentCPF}
					options={{ headerShown: false }}
				></Screen>
				<Screen name='BarcodeReader' component={BarcodeReader}></Screen>
			</Navigator>
		</NavigationContainer>
	);
}
