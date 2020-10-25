import AsyncStorage from '@react-native-async-storage/async-storage';

export const removeItemValue = async (key) => {
	try {
		await AsyncStorage.removeItem(key);
		return true;
	} catch (exception) {
		return false;
	}
};

export const readData = async (key) => {
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
