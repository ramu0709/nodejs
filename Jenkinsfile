node {
    
    stage('CheckoutCode') {
       git branch: 'main', credentialsId: '9c54f3a6-d28e-4f8f-97a3-c8e939dcc8ff', url: 'https://github.com/ramu0709/nodejs.git'
    }

    stage('Build') {
        nodejs(nodeJSInstallationName: 'nodejs24.1.0') {
            sh 'npm install'
        }
    }

    stage('ExecuteSonarQubeReport') {
        nodejs(nodeJSInstallationName: 'nodejs24.1.0') {
            sh 'npm run sonar'
        }
    }

    stage('UploadArtifcatsintoNexus') {
        nodejs(nodeJSInstallationName: 'nodejs24.1.0') {
            sh 'npm publish'
        }
    }

    stage('RunNodeJsApp') {
        nodejs(nodeJSInstallationName: 'nodejs24.1.0') {
            sh 'nohup npm start &'
        }
    }
}
