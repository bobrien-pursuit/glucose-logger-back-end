DROP DATABASE IF EXISTS entries_dev;
CREATE DATABASE entries_dev;

\c entries_dev;

CREATE TABLE "entries" (
  "id" SERIAL PRIMARY KEY,
  "date_surrogate" DATE DEFAULT CURRENT_DATE,
  "time_surrogate" TIMESTAMPTZ DEFAULT NOW(),
  "date" TEXT NOT NULL DEFAULT TO_CHAR(CURRENT_DATE, 'YYYY-MM-DD'),
  "time" TEXT NOT NULL DEFAULT TO_CHAR(LOCALTIME, 'yyyy-MM-ddThh:mm:ss.SSS'),
  "last_meal" TEXT DEFAULT NULL,
  "carbs" INTEGER DEFAULT NULL,
  "calories" INTEGER DEFAULT NULL,
  "fat" INTEGER DEFAULT NULL,
  "fiber" INTEGER DEFAULT NULL,
  "glucose_gdl" INTEGER DEFAULT NULL,
  "a1c" FLOAT DEFAULT NULL
);