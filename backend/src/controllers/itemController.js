const Item = require('../models/itemModel');

const getAllItems = async (req, res) => {
    try {
        const result = await Item.find().sort({ createdAt: -1 });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching all items' });
    }
};

const getSeachedItems = async (req, res) => {
    const { q } = req.query;
    try {
        let items;
        if (q) {
            items = await Item.find({ name: { $regex: q, $options: 'i' } });
        } else {
            items = await Item.find();
        }
        res.status(200).json(items);
    } catch (error) {
        console.error("Error fetching searched items:", error); // Log error for debugging
        res.status(500).json({ message: 'Error fetching searched items' });
    }
};

const getSingleItem = async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
    } catch (error) {
        console.error("Error fetching single item:", error); // Log error for debugging
        res.status(500).json({ message: 'Error fetching single item' });
    }
};

module.exports = {
    getAllItems,
    getSeachedItems,
    getSingleItem
};
