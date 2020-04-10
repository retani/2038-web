###ENV
```
GIT_REMOTE no effect
SSH_KEY
GIT_AUTHOR_EMAIL
GIT_AUTHOR_NAME
TINA_CEE - This needs to be set to ensure that Tina knows that it is being run in a Cloud Editing Environment (?)
```

###ENOSPC: System limit for number of file watchers reached

`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

Based on **Tina Grande** 