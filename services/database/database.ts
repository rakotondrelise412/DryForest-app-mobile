import * as SQLite from "expo-sqlite";

export const dbPromise = SQLite.openDatabaseAsync("dryforest.db");

export async function initDatabase(): Promise<void> {
  const db = await dbPromise;

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS plantation_local (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      client_uuid TEXT NOT NULL,
      plant_number TEXT,
      date_plantation TEXT,
      diameter REAL,
      height REAL,
      id_reforestation INTEGER,
      id_species INTEGER,
      id_sub_plot INTEGER,
      carbon_sequestered REAL,
      image_local_uri TEXT,
      image_public_id TEXT,
      is_synced INTEGER DEFAULT 0
    );
  `);

  console.log("SQLite : table plantation_local prête");
}