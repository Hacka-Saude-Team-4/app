import * as React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './pages/Home';
import LoadingScreen from './pages/LoadingScreen';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import ChooseUser from './pages/ChooseUser';
import Register from './pages/Register';
import ParentDetails from './pages/Register/ParentDetails';
import SisvanConsent from './pages/Register/SisvanConsent';
import ParentCPF from './pages/Register/ParentCPF';
import AddChildren from './pages/AddChildren';
import BarcodeReader from './pages/BarcodeReader';
import { useEffect } from 'react';

export default function routes() {
	const { Navigator, Screen } = createStackNavigator();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const readData = async (key) => {
		try {
			const value = await AsyncStorage.getItem(key);
			if (value !== null) {
				return value;
			}
		} catch (e) {
			console.warn('Error while reading AsyncStorage', err);
			return null;
		}
	};

	useEffect(() => {
		(async () => {
			const accessToken = await readData('accessToken');
			if (accessToken !== null) {
				setIsAuthenticated(true);
				setIsLoading(false);
			} else {
				setIsLoading(false);
			}
		})();
	}, []);

	return (
		<NavigationContainer>
			{isLoading && (
				<Navigator>
					<Screen
						name='LoadingScreen'
						component={LoadingScreen}
						options={{ headerShown: false }}
					></Screen>
				</Navigator>
			)}

			{!isAuthenticated && !isLoading && (
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
					<Screen
						name='AddChildren'
						component={AddChildren}
						options={{ headerShown: false }}
					></Screen>
					<Screen name='BarcodeReader' component={BarcodeReader}></Screen>
				</Navigator>
			)}

			{isAuthenticated && !isLoading && (
				<Navigator>
					<Screen
						name='Home'
						component={Home}
						options={{ headerShown: false }}
					></Screen>
				</Navigator>
			)}
		</NavigationContainer>
	);
}
