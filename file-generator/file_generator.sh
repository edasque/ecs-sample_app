#!/bin/bash
# bash generate a file with a random name and the date/time as content
#

# bash generate random 32 character alphanumeric string (upper and lowercase) and
FILE_NAME=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)

date > $FILE_NAME