# Use a base image with MySQL pre-installed
FROM mysql:latest

# Set the MySQL root password (replace 'your-password' with your actual password)
ENV MYSQL_ROOT_PASSWORD="intern123321"

# Create a database (replace 'your-database' with your actual database name)
ENV MYSQL_DATABASE="internHub"

# Expose MySQL port (default: 3306)
# EXPOSE 3306

# Optionally, copy SQL scripts to initialize the database schema (if needed)
COPY InternHub.sql /docker-entrypoint-initdb.d/
