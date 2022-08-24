import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminder";
import Reminder from "../models/reminder";

const router = Router();

const reminders: Reminder[] = [
    { id: 1, title: "def-reminder", isComplete: false },
];

router.get("/reminders", (req, res) => {
    res.send(reminders);
});

router.post("/reminders", (req, res) => {
    const { title } = req.body as CreateReminderDto;
    const reminder = new Reminder(title);
    reminders.push(reminder);
    res.status(201).send(reminder);
});

router.put("/reminders/:id", (req, res) => {
    const reminder = reminders.find((r) => r.id === parseInt(req.params.id));
    if (!reminder) return res.status(404).send("ID not found!");

    const { title } = req.body as CreateReminderDto;
    reminder.title = title;
    res.send(reminder);
});

router.delete("/reminders/:id", (req, res) => {
    const reminder = reminders.find((r) => r.id === parseInt(req.params.id));
    if (!reminder) return res.status(404).send("ID not found!");

    const index = reminders.indexOf(reminder);
    reminders.splice(index, 1);

    res.send(reminder);
});

router.get("/reminders/:id", (req, res) => {
    const reminder = reminders.find((r) => r.id === parseInt(req.params.id));
    if (!reminder) return res.status(404).send("ID not found!");

    res.send(reminder);
});

export default router;
