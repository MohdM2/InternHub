# Use a base image with Java 17 pre-installed
FROM openjdk:17

# Set the working directory in the container
WORKDIR /app

# Copy the packaged Java application JAR file into the container
COPY target/api.jar app.jar

# Command to run your Java application
CMD ["java", "-jar", "app.jar"]
