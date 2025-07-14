# Docker MongoDB Setup Guide

This repository contains a Docker Compose setup for MongoDB with initial database configuration.

## Prerequisites

- Docker
- Docker Compose
- MongoDB client (optional, for testing)

## Setup and Running

### Pre-requisites
- mongosh
```bash
brew install mongosh
```

### Setup
1. Clone this repository and navigate to the project directory

2. Start the MongoDB container using Docker Compose:

```bash
docker-compose up -d
```

3. Verify the container is running:

```bash
docker-compose ps
```

## Useful Docker Commands

### Container Management

```bash
# Stop the containers
docker-compose down

# View container logs
docker-compose logs

# View real-time logs
docker-compose logs -f

# Restart the containers
docker-compose restart
```

### Database Management

```bash
# Connect to MongoDB shell inside the container
docker exec -it mongodb mongosh -u root -p example MyDB

# Connect using MongoDB Compass
mongodb://root:example@localhost:27017/
```

## Testing the Connection

### Using MongoDB Shell
1. Connect to the database:

```bash
mongosh mongodb://root:example@localhost:27017/
```

2. Switch to MyDB:

```bash
use MyDB
```

3. Test the connection:

```bash
# List collections
show collections

# Insert a test document
db.Users.insertOne({ "name": "Test User" })

# Query the collection
db.Users.find()
```

### Using MongoDB Compass
1. Open MongoDB Compass
2. Use the following connection string:
```
mongodb://root:example@localhost:27017/
```

## Troubleshooting

- If you can't connect, ensure the container is running:

```bash
docker-compose ps
```

- Check container logs for errors:

```bash
docker-compose logs mongodb
```

- If you need to reset everything and start fresh:

```bash
# Stop containers and remove volumes
docker-compose down -v

# Start fresh
docker-compose up -d
```

## Data Persistence
MongoDB data is persisted in a Docker volume named `mongodb_data`. This ensures your data survives container restarts.

## Initial Database Setup
The MongoDB instance is initialized with two databases:
- `MyDB` with a `Users` collection
- `TestDB` with a `Users` collection

These are automatically created when the container first starts up through the mongo-init.js script.

## Security Note
The default credentials in this setup are:
- Root User: root/example

For production use, please change these credentials to secure values.

