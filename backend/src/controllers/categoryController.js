const Category = require('../models/categoryModel');
const Item = require('../models/itemModel');

const getCategory = async (req, res) => {
    const { category } = req.params;

    try {
        // Find category case-insensitively
        const categoryData = await Category.findOne({ name: new RegExp(`^${category}$`, 'i') });
        if (!categoryData) {
            return res.status(404).json({ message: "Category not found!" });
        }

        // Find items by menuId
        const items = await Item.find({ menuId: categoryData.menuId });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "An error occurred while fetching the category." });
    }
};

module.exports = {
    getCategory,
};
