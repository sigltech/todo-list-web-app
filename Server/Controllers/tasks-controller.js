const Task = require('../models/Task');

async function index (req,res) {
    try {
        const tasks = await Task.all;
        res.json({ tasks });
      } catch (err) {
        res.status(500).json({ err });
      }
}

module.exports = index;
