# Adding Servers

::: tip Understanding Backups
Servers are exactly what they sound like. It is/are the machine(s) that host your code, databases, and files. Most projects will only have one server but feel free to add as many servers as your setup requires to include all your assets in any single backup.

Regardless of how many different servers contain your database, application files, repository instance does not matter. Mothership will perform the type of backup necessary on each server and combine that information as a single backup.
:::

## Adding Servers

When adding a server Mothership tests to confirm it can connect and to do that you will need to install the Mothership API key located in the server settings (Project Settings > Servers) or you can copy it from here:

```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQD2ZOz/sXzRND1wVR0Na1MmgU2wmwtciyHgr7/cvL62nBkGy+acM/NFMMwElSHyoKsTf2u9Bm0SUp9M9FLDlMQDPICdi4WYkB3kS+nGiMnH7E7rOi5VD/ZxEaF8QNmwZDQO9s3zA29/Sm+tFMYMIA2Y31saryj42nCSxkrsgewm+IXT23Ib9oZbXTH80XCVbbiJUksfqJRkR+7tbGbKyEBu6sT/y1EspZkVFuHoevSbCmiPS2JlSpDtJVWrpligGyZRLI4KXXjKW8KGKLWf1tyZsa2tet8rN1MlHg1bzpqaPhxGWU8jF/0IKmDVez6i7AbcnN8RRKmeuiKgA0kvvD7/ root@mothership
```

Copy the key and place it in your ~/.ssh/authorized_keys file on your server. If there isn't one then create it and add it.

Now add your connection credentials in the UI and click **Save**

![Mothership Server Settings Example](/imgs/server-settings.png "Mothership Server Settings Example")
