import { Config } from '@/constants/config';
import { Stack } from 'expo-router';

export default function NonTabsLayout() {
  return (
    <Stack screenOptions={{
        contentStyle: { backgroundColor: Config.darkMode ? "#4c4c4c" : "#eee"},
      }}>
      <Stack.Screen 
        name="DailyDetails" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}
