import { AddButtonProvider } from "@/components/AddButtonProvider";
import { Stack } from "expo-router";
import { initDB } from "@/database/setup";
import { useEffect } from "react";

export default function RootLayout() {
useEffect(() => {
    const initializeApp = async () => {
      try {
        await initDB();
        console.log("Database initialized successfully");
      } catch (error) {
        console.error("Failed to initialize database:", error);
      }
    };
    initializeApp();
  }, []);


  return (
    <AddButtonProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      </AddButtonProvider>
  );
}
