import { QueueEvents } from "bullmq";
import { connection } from "./connection";

const queueEvents = new QueueEvents("email-queue", {
  connection,
});

queueEvents.on("completed", ({ jobId }) => {
  console.log(`Job ${jobId} completed`);
});

queueEvents.on("failed", ({ jobId, failedReason }) => {
  console.log(` Job ${jobId} failed: ${failedReason}`);
});

queueEvents.on("active", ({ jobId }) => {
  console.log(` Job ${jobId} is active`);
});

queueEvents.on("waiting", ({ jobId }) => {
  console.log(` Job ${jobId} is waiting`);
});
