pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/CarlosEResende/Desenvolvimento-API.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Start App') {
            steps {
                bat 'start /b npm start'
            }
        }
        stage('Stop App') {
            steps {
                bat 'taskkill /F /IM node.exe'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/dist/**/*.*', fingerprint: true
            mail to: 'carlozresende@example.com',  
                 subject: "Build ${currentBuild.fullDisplayName}",
                 body: "Build ${currentBuild.fullDisplayName} completed with status: ${currentBuild.result}"
        }
    }
}
