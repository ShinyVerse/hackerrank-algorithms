logs = [
  "30 99 sign-in",
  "30 105 sign-out",
  "12 100 sign-in",
  "20 120 sign-in",
  "20, 101 sign-out",
  "12 120 sign-out",
];

const givenLogs = [
  "99 1 sign-in",
  "100 10 sign-in",
  "50 20 sign-in",
  "100 15 sign-out",
  "50 26 sign-out",
  "99 2 sign-out",
];

const maxSpanOfTimeSpentOnSite = 5;
//return an array of who signed n for that time or less.
const result = [99, 100];
