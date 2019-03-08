#docker rmi $(docker images --filter=reference=logreco/expresstest --format "{{.ID}}")
docker build -t logreco/expresstest .