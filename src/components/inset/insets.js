import {useSafeAreaInsets} from 'react-native-safe-area-context';
const insets = useSafeAreaInsets();

export const isInset = () => {
  return insets.bottom !== 0 ? 0 : 10;
};
