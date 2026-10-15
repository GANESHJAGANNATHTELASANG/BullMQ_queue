import { emailQueue } from "./email.queue";

const job = await emailQueue.add("send-welcome-email", {
  email: "ganesh@gmail.com",
  name: "Ganesh",
});

console.log("Job added:", job.id);
