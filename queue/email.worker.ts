import { Worker } from "bullmq";
import { connection } from "./connection";

const emailWorker = new Worker(
  "email-queue",
  async (job) => {
    console.log("Processing job:", job.name);

    console.log("Email:", job.data.email);
    console.log("Name:", job.data.name);

    console.log("Sending welcome email...");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Email sent successfully!");
  },
  {
    connection,
    concurrency: 3,
  },
);

emailWorker.on("completed", (job) => {
  console.log(`Job ${job.id} completed`);
  console.log("----------------------------------------------------------");
});

emailWorker.on("failed", (job, err) => {
  console.log(`Job ${job?.id} failed:`, err.message);
});
