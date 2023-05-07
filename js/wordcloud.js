const words = [
  'Business Development',
  'Business Ethics',
  'Small Business Financial Management',
  'Small Business Marketing',
  'Leadership Development',
  'Team Building',
  'Teamwork',
  'Leadership',
  'Time Management',
  'Event Planning',
  'Entrepreneurship',
  'Small Business Management',
  'Social Media Marketing',
  'Organization',
  'Procative',
  'Business-to-Business Negotiation',
  'Data Entry',
  'Data Analysis',
  'Data Cleaning',
  'Data Visualization',
  'Active Listening',
  'Reading Comprehension',
  'Critical Thinking',
  'Social Perceptiveness',
  'Judgment and Decision Making',
  'Complex Problem Solving',
  'Developing Learning Strategies',
  'Operation Monitoring',
  'Negotiation',
  'Management of Personnel Resources',
  'Systems Analysis',
  'Systems Evaluation',
  'Management of Financial Resources',
  'Management of Material Resources',
  'Quality Control Analysis',
  'Technology Design',
  'Web Programming',
  'Web Design',
  'Equipment Maintenance',
  'Equipment Selection',
  'Operations Analysis'
];

const wordCloud = document.getElementById('word-cloud');

words.forEach(word => {
  const wordElement = document.createElement('div');
  wordElement.classList.add('word');
  wordElement.textContent = word;
  wordCloud.appendChild(wordElement);

  wordElement.style.fontSize = `${Math.floor(Math.random() * 2.5) + 1}rem`;
});

window.addEventListener('resize', () => {
  const wordElements = document.querySelectorAll('.word');
  const wordCloudWidth = wordCloud.offsetWidth;

  wordElements.forEach(wordElement => {
    const fontSize = parseInt(wordElement.style.fontSize);
    const newFontSize = fontSize * (wordCloudWidth / 800);
    wordElement.style.fontSize = `${newFontSize}rem`;
  });
});
