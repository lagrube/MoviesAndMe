const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://lagrube:azerty@cluster0.hrvir.mongodb.net/movies_and_me",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
    },
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connexion", err));