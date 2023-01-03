import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeWinners = async winningPlayers => {
  try {
    const jsonValue = JSON.stringify(winningPlayers);
    await AsyncStorage.setItem('winners', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getWinners = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('winners');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};
