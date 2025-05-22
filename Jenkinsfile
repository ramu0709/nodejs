pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'nodejs24.1.0', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        JAVA_HOME = tool name: 'jdk17'
        PATH = "${NODE_HOME}/bin:${JAVA_HOME}/bin:$PATH"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/ramu0709/nodejs.git', branch: 'main', credentialsId: 'github-credentials'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Scan') {
            environment {
                SONAR_TOKEN = credentials('sonarqube-token')
            }
            steps {
                withSonarQubeEnv('My SonarQube Server') {
                    sh 'npm run sonar'
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Publish to Nexus') {
            steps {
                sh 'npm publish'
            }
        }

        stage('Run NodeJS App') {
            steps {
                sh 'node index.js &'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed!'
        }
    }
}
