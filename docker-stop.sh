docker rm $(docker stop -t 1 $(docker ps -a -q --filter ancestor=logreco/expresstest --format="{{.ID}}"))