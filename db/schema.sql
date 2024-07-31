DROP DATABASE IF EXISTS entries_dev;
CREATE DATABASE entries_dev;

\c entries_dev;

CREATE TABLE "entries" (
  "id" SERIAL PRIMARY KEY,
  "date" DATE NOT NULL DEFAULT CURRENT_DATE,
  "time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "last_meal" TEXT,
  "carbs" INTEGER,
  "calories" INTEGER,
  "fat" INTEGER,
  "fiber" INTEGER,
  "glucose_gdl" INTEGER,
  "a1c" FLOAT
);