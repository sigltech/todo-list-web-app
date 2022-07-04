const db = connect(process.env.MONGODB_URI || "mongodb://localhost:27017/tasks");

db.tasks.drop();

db.tasks.insertMany([
  {
    doc_id: "1",
    date: "03/07/2022",
    task: "ride bike"
  },
  {
    doc_id: "2",
    date: "03/07/2022",
    task: "drink water"
  }
]);

