import SQLite from 'react-native-sqlite-storage';

let db;


SQLite.enablePromise(true);

console.log("si");

const initializeDatabase = () => {
  return new Promise((resolve, reject) => {
    db = SQLite.openDatabase(
      { name: 'habittracker.db', location: 'default' },
      () => {
        console.log("Database connected successfully");
        resolve(db);
      },
      error => {
        console.error("Database connection error", error);
        reject(error);
      }
    );
  })
}

// Initialize tables
export const initDB = async () => {
  try {
    if (!db) {
      await initializeDatabase();
    }

    await new Promise((resolve, reject) => {
      db.transaction(
        tx => {
          // Create Tag table
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS Tag (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT,
              type TEXT
            );`,
            [],
            () => console.log('Tag table created successfully'),
            (_, error) => {
              console.error('Error creating Tag table', error);
              return false; // Esto continúa la transacción a pesar del error
            }
          );

          // Create Habit table (with Tag FK)
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS Habit (
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
            );`,
            [],
            () => console.log('Habit table created successfully'),
            (_, error) => {
              console.error('Error creating Habit table', error);
              return false;
            }
          );

          // Create Task table (with Tag FK)
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS Task (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              dayCreated DATE,
              name TEXT,
              tagId INTEGER,
              FOREIGN KEY (tagId) REFERENCES Tag(id)
            );`,
            [],
            () => console.log('Task table created successfully'),
            (_, error) => {
              console.error('Error creating Task table', error);
              return false;
            }
          );

          // Create MiniTask table (with Task FK)
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS MiniTask (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              taskId INTEGER,
              name TEXT,
              FOREIGN KEY (taskId) REFERENCES Task(id)
            );`,
            [],
            () => console.log('MiniTask table created successfully'),
            (_, error) => {
              console.error('Error creating MiniTask table', error);
              return false;
            }
          );

          // Create Diary table
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS Diary (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              dayCreated DATE,
              name TEXT,
              position INTEGER
            );`,
            [],
            () => console.log('Diary table created successfully'),
            (_, error) => {
              console.error('Error creating Diary table', error);
              return false;
            }
          );
        },
        error => {
          console.error('Transaction error:', error);
          reject(error);
        },
        () => {
          console.log('All tables created successfully');
          resolve(true);
        }
      );
    });
  } catch (error) {
    console.error('Error in initDB:', error);
    throw error;
  }
};

