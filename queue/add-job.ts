import { emailQueue } from "./email.queue";

for (let i = 1; i <= 21; i++) {
  const job = await emailQueue.add("send-welcome-email", {
    email: `user${i}@gmail.com`,
    name: `User ${i}`,
  });

  console.log(`Job added: ${job.id}`);
}
