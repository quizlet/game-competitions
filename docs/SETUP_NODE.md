# Setup Node

### For Mac

Run the following command depending on your initial setup:

~~~shell
# If brew command is not installed, run below
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew update; brew upgrade nodenv node-build;
brew install nodenv
nodenv install $(cat .node-version)
~~~

### For Windows

1. Go to the Node.js website (https://nodejs.org/en/download/) and download the Windows installer for Node.js version 18.15.0.
2. Run the installer.
3. Follow the prompts in the installer to complete the installation. You can leave most of the default settings as they are, but make sure to select the option to add Node.js to your PATH environment variable during the installation process.

### Verify Installation

Verify that Node.js is installed and check the version by running the following command in your Command Prompt or PowerShell window:

~~~shell
node -v
~~~

### Install yarn

~~~shell
yarn --check-files install
~~~