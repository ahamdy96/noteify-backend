const mongoose = require('mongoose');
const { noteModel } = require('../../models');

const deleteNote = async (id, user) => {
    return new Promise(async (resolve, reject) => {
        await noteModel.findOneAndRemove({ _id: id, author: user._id }, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    })
}

module.exports = deleteNote;