import { connectToDatabase } from "./setup";

export const T_getTables = () => {
  return `SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';`;
};

export const T_addTag = async (name: string, type: string = "General") => {
  const db = await connectToDatabase();

  try {
    // Validación básica
    if (!name.trim()) {
      throw new Error("El nombre del tag no puede estar vacío");
    }

    // Verificar si el tag ya existe
    const existingTags = await db.getAllAsync(
      `SELECT * FROM Tags WHERE name = ?;`,
      [name]
    );

    if (existingTags.length > 0) {
      throw new Error(`El tag "${name}" ya existe`);
    }

    // Insertar el nuevo tag
    const result = await db.runAsync(
      `INSERT INTO Tags (name, type) VALUES (?, ?);`,
      [name, type]
    );

    console.log(`Tag añadido ID: ${result.lastInsertRowId}`);
    return result;
  } catch (error) {
    console.error("Error en T_addTag:", error.message);
    throw error; // Re-lanzamos el error para manejo externo
  }
};

export const T_getAllTags = async () => {
  const db = await connectToDatabase();
  return await db.getAllAsync("SELECT * FROM Tags ORDER BY name;");
};
