import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ParentHome from './pages/ParentHome';
import ChildHome from './pages/ChildHome';
import LoadingScreen from './pages/LoadingScreen';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import ChooseUser from './pages/ChooseUser';
import ChildQRLogin from './pages/ChildQRLogin';
import Register from './pages/Register';
import ParentDetails from './pages/Register/ParentDetails';
import SisvanConsent from './pages/Register/SisvanConsent';
import ParentCPF from './pages/Register/ParentCPF';
import MyChildren from './pages/MyChildren';
import AddChildren from './pages/AddChildren';
import BarcodeReader from './pages/BarcodeReader';
import AddChallenge from './pages/AddChallenge';
import AddReward from './pages/AddChallenge';
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
			console.warn('Error while reading AsyncStorage', e);
			return null;
		}
	};

	useEffect(() => {
		(async () => {
			const accessToken = await readData('accessToken');
			if (accessToken) {
				if (accessToken.includes === 'ey') {
					setIsAuthenticated(true);
				}
			}
			setIsLoading(false);
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
						name='MyChildren'
						component={MyChildren}
						options={{ headerShown: false }}
					></Screen>
					<Screen
						name='ParentHome'
						component={ParentHome}
						options={{ headerShown: false }}
					></Screen>
					<Screen
						name='AddChildren'
						component={AddChildren}
						options={{ headerShown: false }}
					></Screen>
					<Screen
						name='ChildQRLogin'
						component={ChildQRLogin}
						options={{ headerShown: false }}
					></Screen>
					<Screen
						name='ChildHome'
						component={ChildHome}
						options={{ headerShown: false }}
					></Screen>
					<Screen
						name='AddChallenge'
						component={AddChallenge}
						options={{ headerShown: false }}
					></Screen>
					<Screen
						name='AddReward'
						component={AddReward}
						options={{ headerShown: false }}
					></Screen>
					<Screen name='BarcodeReader' component={BarcodeReader}></Screen>
				</Navigator>
			)}

			{isAuthenticated && !isLoading && (
				<Navigator>
					<Screen
						name='ParentHome'
						component={ParentHome}
						options={{ headerShown: false }}
					></Screen>
					<Screen
						name='AddChildren'
						component={AddChildren}
						options={{ headerShown: false }}
					></Screen>
				</Navigator>
			)}
		</NavigationContainer>
	);
}
