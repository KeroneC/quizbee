const qBank = [

   {
    question:
      "Which of the following choices is a legit email Address?",
    answers: ["Jdoe@billerica.k12.ma.us", "Jdoe.billerica.k12.ma.us", "Www.jdoe.billerica.k12.ma.us"],
    correct: "Jdoe@billerica.k12.ma.us",
    questionId: "099099"
  },
  {
    question:
"A phishing email usually means...",
    answers: ["An email from a friend about the best places to buy fishing equipment online.", "An email that has a dirty joke in it.", "An email that asks for personal information, like passwords, credit card numbers..."],
    correct: "An email that asks for personal information, like passwords, credit card numbers...",
    questionId: "183452"
  },
  {
    question:
      "If you get a suspicious email from someone you don't know what should you do??",
    answers: ["Just delete the email right away", "Shut down the computer right away and call a techie!", "Try to figure out who sent you the email."],
    correct: "Just delete the email right away",
    questionId: "267908"
  },
  {
    question: 'What does the “https://” at the beginning of a URL denote, as opposed to http:// (without the “s”)?',
    answers: [
      "That the site has special high definition", "That information entered into the site is encrypted", "That the site is not accessible to certain computers",
      "That the site is the newest version available"
    ],
    correct: "That information entered into the site is encrypted",
    questionId: "333247"
  },
  {
    question: "Which of the following is an example of a “phishing” attack?",
    answers: ["Sending someone an email that contains a malicious link that is disguised to look like an email from someone the person knows", "Creating a fake website that looks nearly identical to a real website in order to trick users into entering their login information", "Sending someone a text message that contains a malicious link that is disguised to look like a notification that the person has won a contest", "All"],
    correct: "All",
    questionId: "496293"
  },
  {
    question:
      "A group of computers that is networked together and used by hackers to steal information is called a …",
    answers: [
      "Botnet",
      "Rootkit",
      "DDoS",
      "Operating System"
    ],
    correct: "Botnet",
    questionId: "588909"
  },
  {
    question:
      'Which of the following four passwords is the most secure?',
    answers: ["Boat123", "WTh!5Z", "123456", "into*48"],
    correct: "WTh!5Z",
    questionId: "648452"
  },
  {
    question: "Criminals access someone’s computer and encrypt the user’s personal files and data. The user is unable to access this data unless they pay the criminals to decrypt the files. This practice is called …",
    answers: ["Botnet", "Ransomware", "Spam", "Driving"],
    correct: "Ransomware",
    questionId: "786649"
  },
  {
    question:
      "What kind of cybersecurity risks can be minimized by using a Virtual Private Network (VPN)?",
    answers: ["Use of insecure Wi-Fi networks", "Key-logging", "Phishing attacks", "None"],
    correct: "Key",
    questionId: "839754"
  },
  {
    question:
      "What is the goal of social engineering?",
    answers: [
      "Sabotage a person's social media",
      "To gain vital personal information",
      "To catfish someone",
      "To build trust"
    ],
    correct: "To gain vital personal information",
    questionId: "98390"
  },
  {
    question: "Spammers want you to:",
    answers: ["Not open any links", "Think first and act later", "Act first and think later", "Update your software automatically"],
    correct: "Act first and think later",
    questionId: "1071006"
  },
  {
    question: "An email claiming that you have won the lottery, as long as you fill out the corresponding information, is an example of what type social engineering attack?",
    answers: ["Baiting", "Phishing", "Piggybacking", "Email from a friend"],
    correct: "Phishing",
    questionId: "1174154"
  },
  {
    question: "Which of the following is the technique used to look for information in trash or around dustbin container?",
    answers: ["Pretexting", "Baiting", " Quid Pro Quo", "Dumpster diving"],
    correct: "Dumpster diving",
    questionId: "1226535"
  },
  {
    question: "What is piggybacking?",
    answers: ["Trawling parking lots for goods", "Following employees into restricted areas", "Creating pretext or false stories to gain information", "Sending legitimate emails to people"],
    correct: "Following employees into restricted areas",
    questionId: "1310938"
  },
  {
    question: "Physical _________ is important to check & test for possible physical breaches.",
      answers: ["penetration test", "Hacking", "security check", "Access"],
    correct: "penetration test",
    questionId: "1436873"
  }

];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
