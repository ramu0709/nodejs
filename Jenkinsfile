node {
  stage("CheckOutCodeGit") {
    git branch: 'main', credentialsId: '9c54f3a6-d28e-4f8f-97a3-c8e939dcc8ff', url: 'https://github.com/ramu0709/nodejs.git'
  }

  stage("Build") {
    // Setup JDK and NodeJS paths manually
    def jdkHome = tool 'jdk17'          // jdk17 is the name configured in Jenkins Global Tools
    def nodeHome = tool 'nodejs24.1.0'  // nodejs installation name

    // Add JDK and NodeJS to PATH env variable
    env.PATH = "${jdkHome}/bin:${nodeHome}/bin:${env.PATH}"

    sh 'npm install'
  }

  stage('ExecuteSonarQubeReport') {
    def jdkHome = tool 'jdk17'
    def nodeHome = tool 'nodejs24.1.0'
    env.PATH = "${jdkHome}/bin:${nodeHome}/bin:${env.PATH}"

    sh 'npm run sonar'
  }

  stage('UploadintoNexus') {
    def jdkHome = tool 'jdk17'
    def nodeHome = tool 'nodejs24.1.0'
    env.PATH = "${jdkHome}/bin:${nodeHome}/bin:${env.PATH}"

    sh 'npm publish'
  }

  stage('RunNodeJsApp') {
    def jdkHome = tool 'jdk17'
    def nodeHome = tool 'nodejs24.1.0'
    env.PATH = "${jdkHome}/bin:${nodeHome}/bin:${env.PATH}"

    sh 'npm start &'
  }
}
