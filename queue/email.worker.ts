import { Worker } from "bullmq";
import { connection } from "./connection";

const emailWorker = new Worker(
  "email-queue",
  async (job) => {
    console.log(`Processing: ${job.name}, priority: ${job.opts.priority}`);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log(`Finished: ${job.name}`);
  },
  {
    connection,
    concurrency: 1,
  },
);
