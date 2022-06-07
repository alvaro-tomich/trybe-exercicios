const { Book } = require('../models');

const getAll = () => {
    return Book.findAll();
};

const getById = (id) => {
    return Book.findByPk(id);
};

const createBook = ({ title, author, pageQuantity }) => {
    return Book.create({ title, author, pageQuantity })
}

const updateBook = async (id, { title, author, pageQuantity }) => {
    const [affectedRows] = await Book.update({
        title,
        author,
        pageQuantity
    },
      { where: { id }}
    );
    return affectedRows;
}

const deleteBook = async (id) => {
    const affectedRows = await Book.destroy({ where: { id } })
    return affectedRows;
};

module.exports = { getAll, getById, createBook, updateBook, deleteBook };