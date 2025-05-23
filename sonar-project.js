const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'http://172.21.40.70:9000/',
    options: {
      'sonar.projectKey': 'NodeJsRamu',
      'sonar.projectName': 'Node JS Application - Sample',
      'sonar.projectDescription': 'This is a Node JS application',
      'sonar.projectVersion': '1.0',
      'sonar.sources': '.',
      'sonar.login': 'squ_e49c6d5fadc72205f815c326baab998ba80932f5'
    },
  },
  () => process.exit()
);
