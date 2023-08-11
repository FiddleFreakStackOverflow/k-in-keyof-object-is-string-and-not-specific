# k-in-keyof-object-is-string-and-not-specific

https://stackoverflow.com/questions/76879694/k-in-keyof-object-is-string-and-not-specific

Prerequisites and Setup/Install used with Windows 10 OS.

### Prerequisites

- (optional/recommended): cygwin
- git
- Visual Studio Code
- Nodejs
- Yarn
- Expo and expo-cli
- java jdk version 17 minimum
- android studio similator

### Setup and Install

### Hints

- If commands are failing after install or updating envirnment variables, open a new commandline.

### Cygwin

- download and install cygwin
- add `C:\cygwin64\bin` to system environment variables
- ensure you have access to cygwin commands in your commandline by running `ls`

### Git

- To install git, follow instructions here: https://github.com/git-guides/install-git
- Clone repository
  - Click the clone button at the top right
  - Click the button to "Copy clone URL to clipboard"
  - open cmd or powershell into the directory you want to clone this respository to.
  - enter the command `git clone https://github.com/FiddleFreakStackOverflow/k-in-keyof-object-is-string-and-not-specific.git`
    - (note): the link is the same link from the button you clicked "Copy clone URL to clipboard".
  - cd into the repository folder you just cloned: `cd k-in-keyof-object-is-string-and-not-specific`
- git commit prefixes:
  - feat: a new feature for the user
  - fix: bug fix for the user
  - chore: updates made with devops work: yaml files, toml files, pipelines, ect...
  - docs: work on updating documentation
  - refactor: restructure code to be cleaner and easier to work with
  - style: formatting code, missing semicolons, spacing, ect... (no code changes)
  - perf: code improvement in terms of process performance
  - test: working on tests and only tests, no production code
  - vendor: update version for dependancies and packages
- useful git commands:
- `git branch` shows a list of local branches
- `git branch -r` shows a list of remote branches
- `git checkout <existing-branch>` switch to an existing local or remote branch
- `git checkout -b <new-branch-name>` create a new branch
- `git switch -f <new-branch-name>` create a new branch with unsaved changes on current branch
- `git stash` or `git stash save` saves changes on current branch using ghost-like commits allowing you to checkout other branches
- `git stash pop` shortcut for both apply and drop (retrieves the last stashed changes and removes the ghost-like commit they were stored from history)
- `git pull origin <branch-name>` gets the latest changes from the branch to your selected branch
  - (note): if branch name is different than selected branch,
    this may cause merge conflicts with rebase.
    So only do this with your current selected branch to get the updates
- `git add -A` adds changes to branch to be ready for next commit
- `git commit -m "prefix: message"` allows you to
- `git commit --amend` allows you to change your commit message
- `git push origin <branch-name>` pushes changes and commit(s) to the remote branch. If the branch doesn't exist remotely, then one will be created.

### Visual Studio Code

- Google "visual studio code"
- Click the download link
- Click the big blue windows button
- Go through the installer (everything default is fine)
- In visual studio, go to the extensions tab and get the following extensions:
  - Code Runner
  - ESLint
  - indent-rainbow
  - Prettier - Code Formatter
  - vscode-icons
  - WSL

### Node

- download the latest stable node installer and install it
- ensure you have access to node in your commandline by running `node --version`

### Yarn

- execute command: `npm install --global yarn`

### Expo

```
yarn global add expo
yarn global add expo-cli
```

- add `C:\Users\<user>\AppData\Local\Yarn\bin` to system environment variables
- in the commandline, ensure you are in the project repository directory.
- then run the following command to install all the node packages `yarn` or `yarn install`

### Java

- Go to Google and in the search type "Java JDK"
- Go to oracle download section
- Select JDK 17 tab
- Select Windows tab
- download "x64 Installer"
- Run the installer and go through the wizard
- Add `C:\Program Files\Java\jdk-17\bin` to your environment variables

### Android studio similator

- ToDo: https://www.youtube.com/watch?v=0zx_eFyHRU0

## Android Similator

### Run Similator

cmd:
`cd C:\Users\%USERNAME%\AppData\Local\Android\Sdk\emulator` (-or-) `cd %userProfile%\AppData\Local\Android\Sdk\emulator`
`emulator -avd <device_name>`
powershell:
`cd C:\Users\$Env:UserName\AppData\Local\Android\Sdk\emulator` (-or-) `cd $env:UserProfile\AppData\Local\Android\Sdk\emulator`
`./emulator -avd <device_name>`

### Useful Android Similator Commands

- cmd:
  - list of available devices - `emulator -list-avds`
- powershell:
  - list of available devices - `./emulator -list-avds`
- cmd or powershell:
- reset connection to device - `adb reconnect offline`
- handle port error - `adb kill-server` and `adb start-server`

## Run project

- open commandline in project directory
  - if this is the first time running the project, execute command `yarn`
- execute command `npx expo`
  - (optional) to run the app with cache cleard, enter `expo start -c` instead
- to load the app onto the running android similator, type `a`
  - (note: similator must be running for this to work)
- to load the app into your web browser, type `w`

## (Optional): Deep linking with galactic-app

- load app in android similator
- navigate to any news id screen

```
cd %userProfile%\AppData\Local\Android\Sdk\platform-tools
- npx uri-scheme open exp://localhost:19000/--/list/9123 --android
```

## (Optional): Creating new projects with expo and react-native

### Create project with expo-router

```
npx create-expo-app <app name> --example with-router
cd <app name>
touch tsconfig.json
(change index.js to index.ts)
npx expo
```

- enter `y` to install all typescript dependancy packages
- (you should now see the app running in your commandline)
- ctrl+c to close the running project

### Create project with expo and react-navigation

```
npx create-expo-app <app name> -t expo-template-blank-typescript
cd <app name>
yarn add axios @react-navigation/native @react-navigation/native-stack
npx expo install expo-router expo-constants expo-linking expo-splash-screen expo-status-bar
npx expo install expo-secure-store
npx expo install react-native-screens react-native-safe-area-context
```

### Use expo template to create an app

- execute command `expo init`
- use arrow keys to select one you want and hit enter
- give a name for your application
- execute command `cd <app-name>`
- execute command `yarn web`

### Other optional packages

- allows browser support for navigation links in the url

```
yarn add react-native-web react-dom @expo/webpack-config
yarn add @react-navigation/web
```

## (Optional): Helpful vs code user snippets

- javascriptreact.json

```
  "Functional Component": {
    "prefix": "rfc",
    "body": [
      "import React from 'react';",
      "",
      "export default function ${ComponentName}() {",
      "  return <div>${ComponentName}</div>;",
      "}",
      ""
    ]
  },
  "React Native Functional Component": {
    "prefix": "rnfc",
    "body": [
      "import React from 'react';",
      "import { Text, View } from 'react-native';",
      "",
      "export default function ${ComponentName}() {",
      "  return (",
      "    <View>",
      "      <Text>${ComponentName}</Text>",
      "    </View>",
      "  );",
      "}",
      ""
    ]
  },
  "React Native Functional Component With Styles": {
    "prefix": "rnfcws",
    "body": [
      "import React from 'react';",
      "import { StyleSheet, Text, View } from 'react-native';",
      "",
      "export default function ${ComponentName}() {",
      "  return (",
      "    <View style={styles.container}>",
      "      <Text>${ComponentName}</Text>",
      "    </View>",
      "  );",
      "}",
      "",
      "const styles = StyleSheet.create({",
      "  container: {",
      "    flex: 1,",
      "    justifyContent: 'center',",
      "    alignItems: 'center'",
      "  }",
      "});",
      ""
    ]
  },
  "Console Log": {
    "prefix": "conl",
    "body": "console.log('${message}');"
  },
  "Console Log Variable": {
    "prefix": "conlv",
    "body": "console.log('${value}:', ${value});"
  }
```

- typescriptreact.json

```
  "React Functional Component": {
    "prefix": "rfc",
    "body": [
      "import React from 'react';",
      "",
      "// interface Props {}",
      "",
      "export default function ${ComponentName}(): JSX.Element {",
      "  return <div>${ComponentName}</div>;",
      "}",
      ""
    ]
  },
  "React Native Functional Component": {
    "prefix": "rnfc",
    "body": [
      "import React from 'react';",
      "import { Text, View } from 'react-native';",
      "",
      "// interface Props {}",
      "",
      "export default function ${ComponentName}(): JSX.Element {",
      "  return (",
      "    <View>",
      "      <Text>${ComponentName}</Text>",
      "    </View>",
      "  );",
      "}",
      ""
    ]
  },
  "React Native Functional Component With Styles": {
    "prefix": "rnfcws",
    "body": [
      "import React from 'react';",
      "import { StyleSheet, Text, View } from 'react-native';",
      "",
      "// interface Props {}",
      "",
      "export default function ${ComponentName}(): JSX.Element {",
      "  return (",
      "    <View style={styles.container}>",
      "      <Text>${ComponentName}</Text>",
      "    </View>",
      "  );",
      "}",
      "",
      "const styles = StyleSheet.create({",
      "  container: {",
      "    flex: 1,",
      "    justifyContent: 'center',",
      "    alignItems: 'center'",
      "  }",
      "});",
      ""
    ]
  },
  "Console Log": {
    "prefix": "conl",
    "body": "console.log('$1');"
  },
  "Console Log Variable": {
    "prefix": "conlv",
    "body": "console.log('${value}:', ${value});"
  }
```

## Acknowledgements

- Simon Grimm
  - https://www.youtube.com/watch?v=RglRiycD0oQ
  - https://www.youtube.com/watch?v=9vydY9SDtAo
