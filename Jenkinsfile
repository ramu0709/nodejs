node {
    
    stage('CheckoutCode') {
        git credentialsId: '4368c281-f352-4495-89c1-730c9742fca9', url: 'https://github.com/ramu0709/nodejs.git'
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
