pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "html-app:latest" 
        GIT_REPO = "https://github.com/zhengsunny2/jenkinsDockerNodejs.git" 
        CONTAINER_NAME = "html-app-container"
        PORT = "5500" 
    }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: "${GIT_REPO}"
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }
        stage('Run Container') {
            steps {
                script {
                    sh """
                    docker rm -f ${CONTAINER_NAME} || true
                    docker run -d --name ${CONTAINER_NAME} -p ${PORT}:5500 ${DOCKER_IMAGE}
                    """
                }
            }
        }
    }
    post {
        success {
            echo "Deployment Successful! Access the app at http://localhost:${PORT}"
        }
        failure {
            echo "Deployment Failed. Please check the logs."
        }
    }
}
