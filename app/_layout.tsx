import { AddButtonProvider } from "@/components/AddButtonProvider";
import { Stack } from "expo-router";
import { connectToDatabase, initDB, T_testDB } from "@/database/setup";
import { useEffect } from "react";
import { T_getTables } from "@/database/actions";

export default function RootLayout() {
  useEffect(() => {
    const initializeDB = async () => {
      try {
        const db = await connectToDatabase();

        await initDB(db);
        console.log("Database started");

        const sql = T_getTables();
        const tables = await T_testDB(sql);
        
        // 3. Mostrar resultados
        console.log("Tablas existentes:", tables);

      } catch (error) {
        console.error("Initialization failed:", error);
      }
    };

    initializeDB();
     }, []);

  return (
    <AddButtonProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(non-tabs)" options={{ headerShown: false }} />
      </Stack>
    </AddButtonProvider>
  );
}
