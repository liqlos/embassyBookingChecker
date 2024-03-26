Just a script for checking available appointments in embassy with sending a message to my telegram. 
It may be poorly written, but I just want to try to save 300 euros here :D

This script uses playwright, running in headless mode inside a docker container.
All sensitive data is stored as github secrets which are passed as env variables on docker image building stage.
Docker image is built and executed on a remote host with help of github actions pipeline.

