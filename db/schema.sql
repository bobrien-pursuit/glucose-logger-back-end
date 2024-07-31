DROP DATABASE IF EXISTS entries_dev;
CREATE DATABASE entries_dev;

\c entries_dev;

CREATE TABLE "entries" (
  "id" int PRIMARY KEY,
  "date" date NOT NULL,
  "time" time NOT NULL,
  "last_meal" text,
  "carbs" int,
  "calories" int,
  "fat" int,
  "fiber" int,
  "glucose_gDl" int,
  "a1c" float,
  "a1c_time" timestamp
);
