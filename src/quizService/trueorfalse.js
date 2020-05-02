const TFBank = [
  {
    question: "Social engineering is the act of tricking someone into divulging confidential or personal information",
    answer: "T",
  },
  {
    question: "Attacks are threats carried out. ",
    answer: "T",
  },
  {
    question:
      "The problem of computer-generated passwords is that users have trouble remembering them. ",
    answer: "T",
  },
  {
    question: "Keylogging is a form of host attack. ",
    answer: "F",
  },
  {
    question:
      "The authorization function determines who is trusted for a given purpose.",
    answer: "T",
  },
  {
    question:
      "Malicious software cannot be used to trick users into revealing sensitive personal data. ",
    answer: "F",
  },
  {
    question: "Backing up important files offline, on an external hard drive or in the cloud, will help protect your business in the event of a cyber-attack. ",
    answer: "T",
  },
  {
    question: "Cyber criminals only target large companies. ",
    answer: "F",
  },
  {
    question: '"Dumpster Diving" is only whenever someone tries to search for computer parts in a garbage can.' ,
    answer: "F",
  },
  {
    question: "10.	Software key loggers are programs that silently capture all keystrokes, including passwords and sensitive information. ",
    answer: "T",
  }
];

export default (n = 1) =>
  Promise.resolve(TFBank.sort(() => 0.5 - Math.random()).slice(0, n));
