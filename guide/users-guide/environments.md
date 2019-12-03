## What are Envrionments

> Mothership defines an environment as a singular instance of an application and should be named based on it's purpose. "Production" is usually what developers call the primary public application while "Staging" might be used for internal testing and dialog. Most of the time developers are only going to back up production using mothership but there are plenty of use cases where backups of "Staging", "Quality Assurance", etc might be awesome for developers to sync with on a regular basis. It's entirely up to you.

![Screenshot of the Environment Setup](/imgs/environment-setup.png "Screenshot of the Environment Setup")

You can add as many environments to your project as you wish (on a medium / enterprise plan). Inside an environment you define all the elements you want to backup. These can include:

-   Files / Directories on a server
-   Files / Directories in an S3 Bucket
-   Databases
-   Current Repository Commit Hash

## Adding Environments

Head to **Project Settings** > **Environments** and add a new environment by giving it a name. (Probably "**production**" to start). Click **manage** and add your the elements that you wish to backup and where you want to back them up to.

## Defining what will be backed up

::: tip Settings from the selected server's perspective
Keep in mind that the settings are all based on the perspective of the server you are selecting. "What is the Database Host Name" means: "What is the host name from the perspective of the server you've selected. If it's on the same server it's most likely "localhost" or "127.0.0.1" **not** the external IP address.
:::

### Databases

Mothership can backup databases from any of the servers you define. Currently, Mothership only supports MySQL (or MariaDB) databases.

#### Database Settings Explanations

-   **Label for the database**: This is really just for Mothership to display a "name" in the UI of Mothership. Typically, we suggest using the database name.
-   **Server the database is located on**: Exactly what it says.
-   **Host name**: The host address of your database (Please read the tip at the top of this section). You probably have this setting in your code or .env file.
-   **Port**: The port that your database is hosted on.
-   **Database Name**: The name of the database
-   **Database Username**: The username Mothership should use to connect to the database. Ensure that this user has access to export the database (mysqldump)
-   **Password**: Password for the user above
-   **Bucket to backup to**: This is where it will store the backup of the database.

### Directories / Cloud Files

Directory definitions will allow mothership to backup everything within a directory. Keep in mind that you will not want to backup your entire project as most of it is in source control (we hope). Only back up application directories with dynamic data in it that is not part of your source control like profile images or other dynamic files.

Cloud files are Amazon S3 buckets that you want to backup. While these data centers are extremely unlikely to go down it might be a good idea to add these to your backup to get them into a different data center or protect you from corrupted files or errors from your own software / users.

#### Directory Settings Explanations

-   **Label for the directory**: This is really just for Mothership to display a "name" in the UI of Mothership. You can name it "Rainbow farts" if you so choose.
-   **Location Type**: Tell Mothership if the files are on a S3 bucket or on a regular server that you've registered.
-   **Select the Server / Bucket**: Select the server or bucket that the directory is located on.
-   **Path**: The full path from root to the directory you want to backup.
-   **Bucket to backup to**: This is where it will store the backup of the directory.

### Individual Files

File definitions will allow Mothership to backup individual files. This is great for files that are not part of source control but you need for your application to run like .env files.

#### File Settings Explanations

-   **Label for the file**: This is really just for Mothership to display a "name" in the UI of Mothership.
-   **Select the Server**: Select the server that the file is located on.
-   **Path**: The full path from root to the file you want to backup.
-   **Bucket to backup to**: This is where it will store the backup of the file.

### Grabbing Repository Commit

The repository definition will allow Mothership to log the current commit of the source code at the time of backup. This allows Mothership CLI to sync your local box with the same version that was on product / staging / etc.

#### Repository Settings Explanations

-   **Label for the repository**: This is really just for Mothership to display a "name" in the UI of Mothership.
-   **Select the Server**: Select the server that the cloned repository is located on. Usually this is just your web server where you host your website.
-   **Path**: The full path from root to the root of the repository. This is the same directory if you wanted to manually `git pull` on the server.
