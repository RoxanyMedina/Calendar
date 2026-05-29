const express = require("express");
const cors = require("cors");

const newStudentsRoutes = require("./routes/newStudents");

const newScheduleRoutes = require("./routes/newSchedule");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/student", newStudentsRoutes);
app.use("/schedule", newScheduleRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:{PORT}`);
});

