// Insert a Tag
export const addTag = (name, type) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO Tag (name, type) VALUES (?, ?)',
      [name, type],
      () => console.log("Tag added"),
      (_, error) => console.error("Error adding tag", error)
    );
  });
};

// Get all Habits with their Tags (JOIN query)
export const getHabits = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT Habit.*, Tag.name as tagName 
       FROM Habit LEFT JOIN Tag ON Habit.tagId = Tag.id`,
      [],
      (_, { rows }) => callback(rows._array),
      (_, error) => console.error("Error fetching habits", error)
    );
  });
};
