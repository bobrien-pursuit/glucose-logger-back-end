const db = require("../db/dbConfig.js");

// INDEX
const getAllEntries = async () => {
    try {
        const allEntries = await db.any('SELECT date, time, last_meal, carbs, calories, fat, fiber, glucose_gdl, a1c FROM entries');
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
        `INSERT INTO entries 
            ( 
                last_meal, 
                carbs, 
                calories, 
                fat, 
                fiber, 
                glucose_gdl, 
                a1c 
            ) 
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, 
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
            date_surrogate=$1,
            time_surrogate=$2,
            date=$3,
            time=$4,
            last_meal=$5,
            carbs=$6,
            calories=$7,
            fat=$8,
            fiber=$9,
            glucose_gdl=$10,
            a1c=$11 
        WHERE id=$12 RETURNING *`,
            [
                entry.date_surrogate,
                entry.time_surrogate,
                entry.date,
                entry.time,
                entry.last_meal,
                entry.carbs,
                entry.calories,
                entry.fat,
                entry.fiber,
                entry.glucose_gdl,
                entry.a1c,
                id
            ]
        );
        return updatedEntry;

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
        return deletedEntry;

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