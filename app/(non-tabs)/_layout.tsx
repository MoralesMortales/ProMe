import { Stack } from 'expo-router';

export default function NonTabsLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="DailyDetails" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}
