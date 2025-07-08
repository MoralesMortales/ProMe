// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, TextStyle } from 'react-native';
import { Image, StyleProp, ImageStyle } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
} as IconMapping;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: string; 
  size?: number;
  color?: string;
  style?: StyleProp<ImageStyle>;
}) {
  const iconMap = {
    'sun': require('@/assets/images/Sun.png'),
    'feather': require('@/assets/images/Feather.png'),
    'bookOpen': require('@/assets/images/bookOpen.png'),
  };

  return (
    <Image
      source={iconMap[name]}
      style={[
        { width: size, height: size, tintColor: color }, // tintColor opcional
        style,
      ]}
    />
  );
}
