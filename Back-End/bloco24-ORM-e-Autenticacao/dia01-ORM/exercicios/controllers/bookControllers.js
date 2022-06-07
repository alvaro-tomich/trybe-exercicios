const bookServices = require('../services/bookServices')

const getAll = async (_req, res) => {
    const books = await bookServices.getAll();
    return res.status(200).json(books);
}

const getById = async (req, res) => {
    const { id } = req.params;
    const book = await bookServices.getById(parseInt(id));
    return res.status(201).json(book);
};

const createBook = async (req, res) => {
    const book = bookServices.createBook(req.body);
    return res.status(201).json({ message: "Livro criado com sucesso!"});
}

const updateBook = async (req, res) => {
    const { id } = req.params;
    const book = await bookServices.updateBook(parseInt(id), req.body);

    return res.status(201).json({ message: `Livro ${book} atualizado com sucesso!`})
}

const deleteBook = async (req, res) => {
    const { id } = req.params;
    const book = await bookServices.deleteBook(parseInt(id));

    return res.status(201).json({ message: `Livro ${book} removido com sucesso!`})
}

module.exports = { getAll, getById, createBook, updateBook, deleteBook };