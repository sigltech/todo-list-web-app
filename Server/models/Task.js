const { init } = require("../dbConfig");
const { ObjectId } = require("mongodb");

module.exports = class Book {
    constructor(data){
        this.id = data.doc_id;
        this.date = data.date;
        this.task = data.task;
    };

    static get all() {
        return new Promise(async (resolve, reject) => {
          try {
            const db = await init();
            const taskData = await db.collection("tasks").find().toArray();
            // const taskData = await init();
            console.log(taskData);
            let tasks = taskData.map((b) => new Task(b));
            resolve(tasks);
          } catch (err) {
            reject("Task not found");
          }
        });
      }
}
