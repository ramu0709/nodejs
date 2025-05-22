pipeline {
  agent any

  tools {
    nodejs 'nodejs24.1.0'
    sonarScanner 'sonar-scanner'
  }

  environment {
    PATH = "${tool 'nodejs24.1.0'}/bin:${env.PATH}"
    JAVA_HOME = "/usr/lib/jvm/java-17-openjdk-amd64"
    PATH = "${JAVA_HOME}/bin:${env.PATH}"
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

    stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv('MySonarQubeServer') {
          sh 'sonar-scanner'
        }
      }
    }

    stage('Publish to Nexus') {
      steps {
        sh 'npm publish'
      }
    }

    stage('Run Node.js App') {
      steps {
        sh 'npm start &'
      }
    }
  }

  post {
    always {
      echo 'Cleaning workspace...'
      cleanWs()
    }
    failure {
      echo 'Build failed!'
    }
  }
}
