const interview = keyword => {
  if (!keyword) return ``;
  const questions = [
    `Would you be interested working with ${keyword}?`,
    `Have you ever shown interest in ${keyword}?`,
    `Is working with ${keyword} something that interests you?`,
    `Have you ever considered working with ${keyword}`
  ];

  const getRandomIndex = () => Math.floor(Math.random() * questions.length);

  return questions[getRandomIndex()];
};

export default {
  interview
};
