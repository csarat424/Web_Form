pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Check out the source code from the repository
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install Node.js and dependencies
                nodejs(nodeJSInstallationName: 'NodeJS', configId: 'node-config')
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests using npm or your preferred test runner
                sh 'npm test'
            }
        }

        stage('Build and Deploy') {
            steps {
                // Perform build and deployment steps here
                // For example, you can build assets or deploy to a server
                // sh 'npm run build'
                // sh 'npm run deploy'
            }
        }
    }
}
