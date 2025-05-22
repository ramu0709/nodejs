const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
  {
    serverUrl: 'http://172.21.40.70:9000/',
    options: {
      'sonar.projectKey': 'NodeJsRamu',
      'sonar.projectName': 'Node JS Application - Sample',
      'sonar.projectDescription': 'This is a Node JS application',
      'sonar.projectVersion': '1.0',

      // Authentication token (preferred over username/password)
      'sonar.login': 'squ_e49c6d5fadc72205f815c326baab998ba80932f5',

      // Project settings
      'sonar.language': 'js',                   // Optional in modern SonarQube (auto-detects language)
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.sources': '.',                     // Scan current directory
      // 'sonar.tests': 'test',                 // Optional: set this if you have tests
      // 'sonar.inclusions': 'src/**',          // Optional: only include files in src/
    },
  },
  () => {
    console.log('SonarQube scan completed.');
  }
);
