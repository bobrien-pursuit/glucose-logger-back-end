const express = require("express");
const entries = express.Router();

// localhost:4001/entries/<id>
entries.use(`/:id`);

// QUERIES
const {
    getAllEntries,
    getEntry,
    createEntry,
    updateEntry,
    deleteEntry
} = require("../queries/entries.js");

// VALIDATIONS

// ROUTES

//localhost:4001/entries
entries.get("/", async (req, res) => {
const allEntries = await getAllEntries();

    allEntries[0] ?
    res.status(200).json(allEntries) :
    res.status(404).json({error: "server error"});

});

entries.post("/", async (req, res) => {
    try {
    const entry = await createEntry(req.body);
    res.json(entry);
  } catch {
    res.status(404).json({error: error});
    }
 }
);

//localhost:4001/entries/<id>
entries.get("/:id", async (req, res) => {
    const { id } = req.params;
    const entry =  await getEntry(id);

    entry ?
    res.json(entry) :
    res.status(404).json({error: "Entry not found in database"});

});

entries.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedEntry = await deleteEntry(id);

    deletedEntry.id ? 
    res.status(200).json(deletedEntry) : 
    res.status(404).json(error: "Entry not found.");

});

entries.put("/:id", async (req,res) => {
    const { id } = req.params;
    const updatedEntry = await updateEntry(id, req.body);

    res.status(200).json(updatedEntry);
});

module.exports = entries;