Building the application

amplify init within the Aerodrom directory

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify push" to deploy everything

⚠️ The maximum number of apps that you can create with Amplify in this region has likely been reached:
For more information on Amplify Service Quotas, see:
https://docs.aws.amazon.com/general/latest/gr/amplify.html#service-quotas-amplify


C:\Users\mitch\OneDrive\Documents\Business\CarrollCompute\Github\Aerodrome>amplify status

    Current Environment: staging
    
┌──────────┬───────────────┬───────────┬───────────────────┐
│ Category │ Resource name │ Operation │ Provider plugin   │
├──────────┼───────────────┼───────────┼───────────────────┤
│ Api      │ Aerodrome     │ No Change │ awscloudformation │
└──────────┴───────────────┴───────────┴───────────────────┘

GraphQL endpoint: https://dwaf65cwsbehhfjwhnvpzn3rte.appsync-api.us-east-2.amazonaws.com/graphql
GraphQL API KEY: da2-l6ao24zqxbgkro2n3tilo3lkti

GraphQL transformer version: 2

USAGE
  amplify <command> <subcommand> [flags]

COMMANDS
  init           Initialize a new Amplify project
  configure      Configure the CLI to work with your AWS profile
  push           Provisions cloud resources with the latest local changes
  pull           Fetch upstream backend changes from the cloud and updates the local environment
  env            Displays and manages environment related information for your Amplify project
  add            Adds a resource for an Amplify category in your local backend
  status         Shows the state of local resources not yet pushed to the cloud
  plugin         Configure Amplify plugins
  update         Update resource for an Amplify category in your local backend
  publish        Executes amplify push and hosts the frontend app
  remove         Removes a resource for an Amplify category in your local backend
  console        Opens the web console for the selected cloud resource
  delete         Delete the Amplify project
  upgrade        Download and install the latest version of the Amplify CLI
  import         Imports existing resources to your local backend
  override       Override Amplify-generated resources with Cloud Development Kit (CDK)
  diagnose       Capture non-sensitive Amplify backend metadata for debugging purposes
  logout         Logs out of Amplify Studio
  export         Export Amplify CLI-generated backend as a Cloud Development Kit (CDK) stack
  uninstall      Uninstall the Amplify CLI
  serve          Executes amplify push, and then test run the client-side application locally
  mock           Run mock server for testing categories locally
  codegen        Generates GraphQL statements and type annotations
  api            Enable an easy and secure solution to access backend data
  storage        Enable a mechanism for managing user content
  notifications  Configure notifications for your Amplify project
  auth           Enable sign-in, sign-up, and sign-out for your app
  geo            Configure geo resources for your Amplify project
  analytics      Add analytics resources to your Amplify project
  function       Configure function resources for your Amplify project
  hosting        Configure hosting resources for your Amplify project
  interactions   Configure interactions resources for your Amplify project
  predictions    Configure predictions resources for your Amplify project
  build          Builds all resources in the project

FLAGS
  -h | --help  Show help for a command

LEARN MORE
  Visit https://docs.amplify.aws/cli/


*** DELETED AMPLIFY APP FOLDER *** Starting over

C:\Users\mitch\OneDrive\Documents\Business\CarrollCompute\Github\Aerodrome>amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project Aerodrome
The following configuration will be applied:

Project information
| Name: Aerodrome
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: none
| Source Directory Path: src
| Distribution Directory Path: dist
| Build Command: npm.cmd run-script build
| Start Command: npm.cmd run-script start

? Initialize the project with the above configuration? No
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
√ Choose the type of app that you're building · javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm.cmd run-script build
? Start Command: npm.cmd run-script start
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS access keys
? accessKeyId:  ********************
? secretAccessKey:  ****************************************
? region:  us-east-2
Adding backend environment dev to AWS Amplify app: d2jigkiqy3qu0j

Deployment completed.
Deploying root stack Aerodrome [ ====================-------------------- ] 2/4
        amplify-aerodrome-dev-230730   AWS::CloudFormation::Stack     CREATE_IN_PROGRESS             Tue Jun 27 2023 23:07:33…
        AuthRole                       AWS::IAM::Role                 CREATE_COMPLETE                Tue Jun 27 2023 23:07:48…
        UnauthRole                     AWS::IAM::Role                 CREATE_COMPLETE                Tue Jun 27 2023 23:07:48…
        DeploymentBucket               AWS::S3::Bucket                CREATE_IN_PROGRESS             Tue Jun 27 2023 23:07:36…



C:\Users\mitch\OneDrive\Documents\Business\CarrollCompute\Github\Aerodrome>amplify init 
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project Aerodrome
The following configuration will be applied:

Project information
| Name: Aerodrome
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: none
| Source Directory Path: src
| Distribution Directory Path: dist
| Build Command: npm.cmd run-script build
| Start Command: npm.cmd run-script start

? Initialize the project with the above configuration? No
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
√ Choose the type of app that you're building · javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm.cmd run-script build
? Start Command: npm.cmd run-script start
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS access keys
? accessKeyId:  ********************
? secretAccessKey:  ****************************************
? region:  us-east-2
Adding backend environment dev to AWS Amplify app: d2x1ciwtemxceb

Deployment completed.
Deploying root stack Aerodrome [ ====================-------------------- ] 2/4
        amplify-aerodrome-dev-232629   AWS::CloudFormation::Stack     CREATE_IN_PROGRESS             Tue Jun 27 2023 23:26:32…
        AuthRole                       AWS::IAM::Role                 CREATE_COMPLETE                Tue Jun 27 2023 23:26:47…
        DeploymentBucket               AWS::S3::Bucket                CREATE_IN_PROGRESS             Tue Jun 27 2023 23:26:35…
        UnauthRole                     AWS::IAM::Role                 CREATE_COMPLETE                Tue Jun 27 2023 23:26:47…

√ Help improve Amplify CLI by sharing non sensitive configurations on failures (y/N) · no
Deployment state saved successfully.
√ Initialized provider successfully.
✅ Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify push" to deploy everything


C:\Users\mitch\OneDrive\Documents\Business\CarrollCompute\Github\Aerodrome>amplify status

    Current Environment: dev

┌──────────┬───────────────┬───────────┬─────────────────┐
│ Category │ Resource name │ Operation │ Provider plugin │
└──────────┴───────────────┴───────────┴─────────────────┘



C:\Users\mitch\OneDrive\Documents\Business\CarrollCompute\Github\Aerodrome>amplify push
√ Successfully pulled backend environment dev from the cloud.

    Current Environment: dev

┌──────────┬───────────────┬───────────┬─────────────────┐
│ Category │ Resource name │ Operation │ Provider plugin │
└──────────┴───────────────┴───────────┴─────────────────┘

No changes detected