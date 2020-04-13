###ENV
```
GIT_REMOTE no effect
SSH_KEY
GIT_AUTHOR_EMAIL
GIT_AUTHOR_NAME
TINA_CEE - This needs to be set to ensure that Tina knows that it is being run in a Cloud Editing Environment (?)
```
###docker

```
docker build --tag 2038-news:latest .
docker run -it --rm -p 8000:8000 2038-news:latest develop
```

Based on **Tina Grande** 