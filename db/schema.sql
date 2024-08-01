DROP DATABASE IF EXISTS entries_dev;
CREATE DATABASE entries_dev;

\c entries_dev;

CREATE TABLE "entries" (
  "id" SERIAL PRIMARY KEY,
  "date" DATE NOT NULL DEFAULT CURRENT_DATE,
  "time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "last_meal" TEXT DEFAULT NULL,
  "carbs" INTEGER DEFAULT NULL,
  "calories" INTEGER DEFAULT NULL,
  "fat" INTEGER DEFAULT NULL,
  "fiber" INTEGER DEFAULT NULL,
  "glucose_gdl" INTEGER DEFAULT NULL,
  "a1c" FLOAT DEFAULT NULL
);