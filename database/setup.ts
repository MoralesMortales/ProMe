import * as SQLite from "expo-sqlite";

export const connectToDatabase = async () => {
  return SQLite.openDatabaseAsync('proMe.db');
};

export const initDB = async (db: any) => {

  const initTagsQuery = 
            `CREATE TABLE IF NOT EXISTS Tags (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT,
              type TEXT
            );`

  const initHabitsQuery = 
            `CREATE TABLE IF NOT EXISTS Habits (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              dayCreated DATE,
              name TEXT,
              description TEXT,
              type TEXT,
              quantity INTEGER,
              tagId INTEGER,
              startHour DATE,
              endHour DATE,
              FOREIGN KEY (tagId) REFERENCES Tag(id)
            );`

  const initTasksQuery = 
            `CREATE TABLE IF NOT EXISTS Tasks (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              dayCreated DATE,
              name TEXT,
              tagId INTEGER,
              FOREIGN KEY (tagId) REFERENCES Tag(id)
            );`

  const initMiniTaskQuery = 
            `CREATE TABLE IF NOT EXISTS MiniTask (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              taskId INTEGER,
              name TEXT,
              FOREIGN KEY (taskId) REFERENCES Task(id)
            );`

  const initDiariesQuery = 
            `CREATE TABLE IF NOT EXISTS Diaries (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              dayCreated DATE,
              name TEXT,
              position INTEGER
            );`

  try {
    await db.execAsync(initTagsQuery)
    await db.execAsync(initHabitsQuery)
    await db.execAsync(initTasksQuery)
    await db.execAsync(initMiniTaskQuery)
    await db.execAsync(initDiariesQuery)
  } catch (error) {
    console.error(error)
    throw Error(`Failed to create tables`)
  }
}
