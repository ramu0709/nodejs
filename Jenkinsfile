pipeline {
  agent any

  tools {
    jdk 'jdk17'
    nodejs 'nodejs24.1.0'
  }

  environment {
    PATH = "${tool 'nodejs24.1.0'}/bin:${tool 'jdk17'}/bin:${env.PATH}"
    JAVA_HOME = "${tool 'jdk17'}"
  }

  stages {
    stage("Checkout Code") {
      steps {
        git branch: 'main', credentialsId: '9c54f3a6-d28e-4f8f-97a3-c8e939dcc8ff', url: 'https://github.com/ramu0709/nodejs.git'
      }
    }
    stage("Build") {
      steps {
        sh 'npm install'
      }
    }
    stage("SonarQube Scan") {
      steps {
        sh 'npm run sonar'
      }
    }
    stage("Publish to Nexus") {
      steps {
        sh 'npm publish'
      }
    }
    stage("Run NodeJS App") {
      steps {
        sh 'npm start &'
      }
    }
  }
}
