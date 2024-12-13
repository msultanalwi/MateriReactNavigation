import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, data) => {
      await AsyncStorage.setItem(key, JSON.stringify(data));
};

export const getData = async (key) => {

      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null;
} 

export const clear = async () => {
    await AsyncStorage.clear();
}
  