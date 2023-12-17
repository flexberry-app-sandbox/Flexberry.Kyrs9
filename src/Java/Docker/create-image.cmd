docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kyrs9-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kyrs9-java/app ../../..
