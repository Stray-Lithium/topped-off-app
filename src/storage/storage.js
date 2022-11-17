export const getPlayers = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('players');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};
