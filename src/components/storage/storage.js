import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeWinners = async winningPlayers => {
  try {
    const jsonValue = JSON.stringify(winningPlayers);
    console.log(jsonValue, 'json test');
    await AsyncStorage.setItem('winners', jsonValue);
  } catch (e) {}
};

export const getWinners = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('winners');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};
