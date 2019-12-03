# Using Mothership Sync

## About

Mothership CLI allows for you to sync your backups at [mothership.app](https://mothership.app) to your local development environment in seconds. first thig you will need is a [Mothership account](https://mothership.app) with some backups running so once you're setup there come on back and we'll get you syncing!

Oh... done already? Let's get started!

## Installing

This will go quick. There are a few items that you're going to need to run Mothership CLI. Follow the instructions below to install AWS CLI and NodeJS before you install Mothership CLI.

### Requirements

#### AWS CLI

You will need the AWS CLI on your system. You can get that from here: [Installing AWS CLI version 1](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html). There are [bundled installers for Linux and MacOS](https://docs.aws.amazon.com/cli/latest/userguide/install-bundle.html) and [MSI installers for Windows](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html#install-msi-on-windows).

#### NodeJS

You will need to [install NodeJS](https://nodejs.org/en/download/) on your system.

### Install Mothership CLI

To install mothership you'll want to install it globally so that it can be run from anywhere. To do that run the following on your terminal:

```sh
npm install -g mothership-cli
```

### MySQL

If syncing databases you need to ensure that you have the ``mysql` command available in your terminal

## Usage

### Syncing

```
mothership sync
```

### Setting environment on command line

You can go ahead and tell Mothership CLI which environment you want to sync with to get a little faster.

```
mothership sync production
```

### backup by date

You can also tell Mothership CLI which date to pull from an environment. It's a little unrealistic for you to know what the date and time is so we've provided buttons throughout Mothership.app that will allow you to copy the command to your clipboard. Just look for the buttons with **Copy Sync Command**.

```
mothership sync production --backup-date="Mon, Nov 18 2019 @ 10:00:29 pm"
```

### Syncing Particular Things

You can pass the following arguments (as many as you like) to only sync the things you want:

```
mothership sync --databases --directories --repositories --files
```

### Tweaking configuration

If you want to make changes to your mothership configuration for a project simply edit the .mothership.json configuration file. There you can change all of the settings for your project including profiles, passwords, etc.

### Resetting configuration

```
mothership reset
```
