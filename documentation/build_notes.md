| Step | Description                                                | Complete | Comments |
|------|------------------------------------------------------------|----------|----------|
| 1.   | Sign into the AWS Management Console.                       |    x      |          |
| 2.   | Navigate to AWS Amplify.                                   |    x      |          |
| 3.   | Click on "Get Started" under Deliver > Continuous deployment. |   x       |          |
| 4.   | Connect your repository.                                    |     x     |          |
| 5.   | Choose GitHub as the repository source.                     |   x       |          |
| 6.   | Authorize Amplify to access your GitHub account.            |     x     |          |
| 7.   | Select your repository and branch for deployment.           |    x      |    aerodrome-react-app      |
| 8.   | Configure the build settings.                               |    x      |          |
| 9.   | Review the settings and click Next.                         |     x     |          |
| 10.  | Review and Save & Deploy.                                   |   x       |          |
| 11.  | Wait for the deployment to complete.                        |   x       |          |
| 12.  | Click on the generated link to view your deployed app.      |          |          |
| 13.  | Navigate to the AWS Amplify Console.                        |          |          |
| 14.  | Select your app.                                            |          |          |
| 15.  | Click on "Backend environments" in the left side menu.      |          |          |
| 16.  | Click on "Add" to create a new backend environment.         |          |          |
| 17.  | Provide a name for the environment and click on "Create environment". |          |          |
| 18.  | Access the AWS Amplify Admin UI.                            |          |          |
| 19.  | Click on "Data" in the left side menu.                      |          |          |
| 20.  | Click on "Add model" to define your database structure.     |          |          |
| 21.  | Define your model attributes and click on "Save and deploy".|          |          |
| 22.  | Wait for Amplify to provision the database and API.          |          |          |
| 23.  | Navigate to the root of your React project.                 |          |          |
| 24.  | Run `amplify pull --appId <yourAppId> --envName <yourEnvName>` to update the backend configuration. |          |          |
| 25.  | Use AWS Amplify libraries to connect to your backend services in your React app. |          |          |
| 26.  | Push your changes to your GitHub repository.                 |          |          |
| 27.  | Wait for AWS Amplify to detect and deploy the changes.      |          |          |
| 28.  | Install the AWS Amplify CLI and configure it with your AWS credentials. |          |          |