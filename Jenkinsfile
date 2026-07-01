pipeline {
  agent any


  tools {
    nodejs 'NodeJS'
  }

  environment {
    CI = 'true'
    PLAYWRIGHT_BROWSERS_PATH = '0'
  }

  options {
    ansiColor('xterm')
    timestamps()
    disableConcurrentBuilds()
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        script {
          if (isUnix()) {
            sh 'npm ci'
          } else {
            bat 'npm ci'
          }
        }
      }
    }

    stage('Install Playwright browsers') {
      steps {
        script {
          if (isUnix()) {
            sh 'npx playwright install --with-deps'
          } else {
            bat 'npx playwright install'
          }
        }
      }
    }

    stage('Run Playwright tests') {
      steps {
        script {
          if (isUnix()) {
            sh 'npm run test:ci'
          } else {
            bat 'npm run test:ci'
          }
        }
      }
    }

    stage('Generate Allure report') {
      steps {
        script {
          if (isUnix()) {
            sh 'npm run allure:generate'
          } else {
            bat 'npm run allure:generate'
          }
        }
      }
    }

    stage('Archive artifacts') {
      steps {
        archiveArtifacts artifacts: 'playwright-report/**, allure-results/**, allure-report/**', allowEmptyArchive: true
      }
    }
  }

  post {
    always {
      script {
        if (fileExists('test-results')) {
          junit allowEmptyResults: true, testResults: 'test-results/**/*.xml'
        }
      }
      cleanWs()
    }
  }
}
