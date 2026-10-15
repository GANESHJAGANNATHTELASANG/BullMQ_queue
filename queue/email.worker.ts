import { Worker } from "bullmq";
import { connection } from "./connection";

const emailWorker = new Worker(
  "email-queue",
  async (job) => {
    console.log(`Processing job ${job.id}, attempt ${job.attemptsMade + 1}`);

    console.log("Email:", job.data.email);

    if (job.attemptsMade < 2) {
      console.log("Email service is temporarily down ");

      throw new Error("Email service is down");
    }

    console.log("Email service is working ");
    console.log("Email sent successfully!");

    return {
      success: true,
    };
  },
  {
    connection,
    concurrency: 1,
  },
);

emailWorker.on("completed", (job) => {
  console.log(`Job ${job.id} completed `);
});

emailWorker.on("failed", (job, err) => {
  console.log(`Job ${job?.id} failed :`, err.message);
});
