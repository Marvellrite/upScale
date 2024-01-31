require( "express-async-errors");
require("dotenv").config();
// Security
// const cors = require("cors");
const helmet = require("helmet");
const xssCleaner = require("xss-clean"); /* xss-cleaner dependency was written in javascript and has no types declaration file for TypeScript so nothing could be done about the red squiggle */
const rateLimiter = require("express-rate-limit");
// Import express and initialise app
const express = require("express");
let app = express();
// Import Middlewares
const errorHandler = require("./middlewares/errorHandler.js");
const notFound =  require("./middlewares/notFound.js");
const connectDB = require("./db/connect.js")
// const authenticate = require("./middlewares/authenticate.js");

//Import Routers
// const auth = require("./routes/auth");
const clientRouter = require("./routes/clientRouter.js");
const adminRouter = require("./routes/adminRouter");
//Import Models



app.set("trust proxy", 1);
// // const rateLimitOptions = app.use(rateLimiter({
// //     windowMs: 60 * 1000,
// //     limit: 30,
// //     standardHeaders: true
// // }));
// app.use(cors());
app.use(helmet());
app.use(xssCleaner());


app.use(express.json());




app.use(express.static("public"));

app.use("/client", clientRouter);
app.use("/admin", adminRouter);


app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
const start = async () => {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log("Server listening at port " + PORT));
};

// module.exports = app;

// start().then(async ()=>{
//     await client_side_account_details.deleteMany({});
// });
start();
