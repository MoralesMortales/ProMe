import { AddButtonProvider } from "@/components/AddButtonProvider";
import { Stack } from "expo-router";
import { connectToDatabase, initDB } from "@/database/setup";
import { useEffect } from "react";

export default function RootLayout() {
useEffect(() => {
  const initializeDB = async () => {
    try {
      const db = await connectToDatabase();
        
      await initDB(db);
      console.log('Database started');

    } catch (error) {
      console.error('Initialization failed:', error);
    }
  };
  
  initializeDB();
}, []);

  return (
    <AddButtonProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </AddButtonProvider>
  );
}
