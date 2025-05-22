const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://172.21.40.70:9000/',
  options: {
    'sonar.projectKey': 'NodeJsRamu',
    'sonar.projectName': 'Node JS Application - Sample',
    'sonar.projectDescription': 'This is a Node JS application',
    'sonar.projectVersion': '1.0',
    'sonar.login': process.env.SONAR_TOKEN,
    'sonar.language': 'js',
    'sonar.sourceEncoding': 'UTF-8',
    'sonar.sources': '.',
  },
}, () => {
  console.log('SonarQube scan completed.');
});
