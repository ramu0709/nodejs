pipeline {
  agent any

  tools {
    nodejs 'nodejs24.1.0'
  }

  environment {
    PATH = "${tool 'nodejs24.1.0'}/bin:${env.PATH}"
  }

  stages {

    stage("CheckOutCodeGit") {
      steps {
        git branch: 'main', credentialsId: '9c54f3a6-d28e-4f8f-97a3-c8e939dcc8ff', url: 'https://github.com/ramu0709/nodejs.git'
      }
    }

    stage("Build") {
      steps {
        sh 'npm install'
      }
    }

    stage('ExecuteSonarQubeReport') {
      steps {
        // Use Java 17 explicitly for SonarScanner
        withEnv([
          "JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64",
          "PATH=/usr/lib/jvm/java-17-openjdk-amd64/bin:${env.PATH}"
        ]) {
          sh 'java -version'  // verify Java 17 usage
          sh 'npm run sonar'
        }
      }
    }

    stage('UploadintoNexus') {
      steps {
        sh 'npm publish'
      }
    }

    stage('RunNodeJsApp') {
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
