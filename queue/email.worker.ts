import { Worker } from "bullmq";
import { connection } from "./connection";

const emailWorker = new Worker(
  "email-queue",
  async (job) => {
    console.log(`Processing: ${job.name}`);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log(`Finished: ${job.name}`);
  },
  {
    connection,
  },
);
