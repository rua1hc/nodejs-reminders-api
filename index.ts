import express from "express";
import reminderRouters from "./routers/reminders";

const app = express();

app.use(express.json());
app.use("/", reminderRouters);

app.listen(8000, () => console.log("Listening on.."));
