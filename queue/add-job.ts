import { emailQueue } from "./email.queue";

for (let i = 1; i <= 6; i++) {
  const job = await emailQueue.add(
    "send-welcome-email",
    {
      email: `user${i}@gmail.com`,
      name: `User ${i}`,
    },
    {
      delay: 5000,
    },
  );

  console.log(`Job added: ${job.id}`);
}
