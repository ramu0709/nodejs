pipeline {
  agent any

  environment {
    NODEJS_HOME = tool name: 'nodejs24.1.0', type: 'NodeJS'
    PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
  }

  stages {
    stage('CheckOutCodeGit') {
      steps {
        git branch: 'main', credentialsId: '9c54f3a6-d28e-4f8f-97a3-c8e939dcc8ff', url: 'https://github.com/ramu0709/nodejs.git'
      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('ExecuteSonarQubeReport') {
      steps {
        // Important: make sure Java 17 or compatible JDK is configured on Jenkins agent to avoid the class version error.
        sh 'npm run sonar'
      }
    }

    stage('UploadintoNexus') {
      steps {
        sh 'npm publish'
      }
    }

    stage('RunNodeJsApp') {
      steps {
        // Run app in background or consider using Jenkins 'background' plugins or proper services.
        sh 'npm start &'
      }
    }
  }

  post {
    always {
      echo 'Cleaning workspace...'
      cleanWs()
    }
    success {
      echo 'Build succeeded!'
    }
    failure {
      echo 'Build failed!'
    }
  }
}
