const db = require("../db/dbConfig.js");

// INDEX
const getAllEntries = async () => {
    try {
        const allEntries = await db.any('SELECT * FROM entries');
        return allEntries;
    }   catch (error) {
        return error;
    }
}

// SHOW
const getEntry = async (id) => {
    try {
        const singleEntry = await db.one('SELECT * FROM entries WHERE id=$1', id);
        return singleEntry;
    }   catch (error) {
        return error;
    }
}

// CREATE

const createEntry = async (entry) => {
    try {
        const newEntry = await db.one(
        "INSERT INTO entries ( last_meal, carbs, calories, fat, fiber, glucose_gdl, a1c) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", 
            [ 
                entry.last_meal, 
                entry.carbs, 
                entry.calories, 
                entry.fat, 
                entry.fiber, 
                entry.glucose_gdl, 
                entry.a1c 
            ]
        );
        return newEntry;
    }   catch (error) {
        return error;
    }

}

// UPDATE

const updateEntry = async (id, entry) => {
    try {
        const updatedEntry = await db.one(
        `UPDATE entries SET
            date=$1,
            time=$2,
            last_meal=$3,
            carbs=$4,
            calories=$5,
            fat=$6,
            fiber=$7,
            glucose_gdl=$8,
            a1c=$9 
        WHERE id=$10 RETURNING *`,
            [
                entry.date,
                entry.time,
                entry.last_meal,
                entry.carbs,
                entry.calories,
                entry.fat,
                entry.fiber,
                entry.glucose_gdl,
                entry.a1c
            ]
        );

    }   catch (error) {
        return error;
    }
}

// DELETE

const deleteEntry = async (id) => {
    try {
        const deletedEntry = await db.one(
            `DELETE FROM entries WHERE id=$1 RETURNING *`,
            id
        );

    }   catch (error) {
        return error;
    }

}

module.exports = {
    getAllEntries,
    getEntry,
    createEntry,
    updateEntry,
    deleteEntry
};