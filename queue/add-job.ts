import { emailQueue } from "./email.queue";

await emailQueue.add(
  "normal-email",
  {
    email: "normal@gmail.com",
  },
  {
    priority: 10,
  },
);

await emailQueue.add(
  "password-reset",
  {
    email: "reset@gmail.com",
  },
  {
    priority: 5,
  },
);

await emailQueue.add(
  "payment-processing",
  {
    email: "payment@gmail.com",
  },
  {
    priority: 1,
  },
);

console.log("3 jobs added");
