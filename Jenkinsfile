pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'cc'
    }

    stages {
        stage('Cloner le dépôt Git') {
            steps {
                git 'https://github.com/zhengsunny2/jenkinsDockerNodejs.git'  // Remplacez par votre dépôt GitHub
            }
        }

        stage('Construire l\'image Docker') {
            steps {
                script {
                    // Construire l'image Docker de l'application Node.js
                    docker.build(DOCKER_IMAGE)
                }
            }
        }

        stage('Exécuter les tests avec Selenium') {
            steps {
                script {
                    // Exécuter les tests Selenium
                    docker.image(DOCKER_IMAGE).inside {
                        sh 'npm test' // Assurez-vous que vous avez un script de test dans package.json
                    }
                }
            }
        }

        stage('Déployer en environnement de test') {
            steps {
                script {
                    // Déployer l'application dans un environnement de test simulé
                    docker.image(DOCKER_IMAGE).run('-d -p 5500:5500')  // Exécuter l'application en arrière-plan
                }
            }
        }

        stage('Vérification de l\'application en environnement de test') {
            steps {
                script {
                    // Vérifier que l'application fonctionne bien en environnement de test (par exemple, avec des tests Selenium)
                    sh 'curl http://localhost:5500' // Ou exécuter d'autres tests de validation
                }
            }
        }

        stage('Déployer en production') {
            when {
                branch 'main'  // Déployer en production uniquement si la branche est 'main'
            }
            steps {
                script {
                    // Déployer l'application dans un environnement de production simulé
                    docker.image(DOCKER_IMAGE).run('-d -p 8080:5500')  // Exécuter l'application sur un autre port pour la production
                }
            }
        }
    }

    post {
        always {
            // Nettoyage ou autres étapes post-pipeline
            cleanWs()
        }
        success {
            echo 'Le déploiement a réussi !'
        }
        failure {
            echo 'Le déploiement a échoué.'
        }
    }
}
