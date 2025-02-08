# Redis Commands Reference

This README contains a list of Redis commands with a short explanation of their functionality.

## Key Commands

### `DEL`

- **Description**: Deletes one or more keys.
- **Syntax**: `DEL key1 key2 ...`

### `EXISTS`

- **Description**: Checks if a key exists.
- **Syntax**: `EXISTS key`

### `KEYS`

- **Description**: Returns all keys matching a pattern.
- **Syntax**: `KEYS pattern`

### `MOVE`

- **Description**: Moves a key from the current database to the specified one.
- **Syntax**: `MOVE key db`

### `RENAME`

- **Description**: Renames a key.
- **Syntax**: `RENAME oldkey newkey`

### `TTL`

- **Description**: Gets the time to live (TTL) of a key.
- **Syntax**: `TTL key`

### `SETEX`

- **Description**: Sets the value and expiration of a key.
- **Syntax**: `SETEX key seconds value`

## String Commands

### `SET`

- **Description**: Sets the value of a key.
- **Syntax**: `SET key value`

### `GET`

- **Description**: Gets the value of a key.
- **Syntax**: `GET key`

### `APPEND`

- **Description**: Appends a value to an existing key.
- **Syntax**: `APPEND key value`

### `INCR`

- **Description**: Increments the integer value of a key by one.
- **Syntax**: `INCR key`

### `DECR`

- **Description**: Decrements the integer value of a key by one.
- **Syntax**: `DECR key`

## Hash Commands

### `HSET`

- **Description**: Sets the value of a field in a hash.
- **Syntax**: `HSET hash field value`

### `HGET`

- **Description**: Gets the value of a field in a hash.
- **Syntax**: `HGET hash field`

### `HGETALL`

- **Description**: Returns all fields and values in a hash.
- **Syntax**: `HGETALL hash`

### `HDEL`

- **Description**: Deletes one or more fields in a hash.
- **Syntax**: `HDEL hash field1 field2 ...`

## List Commands

### `LPUSH`

- **Description**: Inserts an element at the head of a list.
- **Syntax**: `LPUSH list value`

### `RPUSH`

- **Description**: Inserts an element at the tail of a list.
- **Syntax**: `RPUSH list value`

### `LPOP`

- **Description**: Removes and returns the first element of a list.
- **Syntax**: `LPOP list`

### `RPOP`

- **Description**: Removes and returns the last element of a list.
- **Syntax**: `RPOP list`

### `LRANGE`

- **Description**: Gets a range of elements from a list.
- **Syntax**: `LRANGE list start stop`

## Set Commands

### `SADD`

- **Description**: Adds one or more members to a set.
- **Syntax**: `SADD set member1 member2 ...`

### `SMEMBERS`

- **Description**: Gets all the members of a set.
- **Syntax**: `SMEMBERS set`

### `SREM`

- **Description**: Removes one or more members from a set.
- **Syntax**: `SREM set member1 member2 ...`

### `SISMEMBER`

- **Description**: Checks if a member is in a set.
- **Syntax**: `SISMEMBER set member`

## Sorted Set Commands

### `ZADD`

- **Description**: Adds one or more members to a sorted set, or updates its score if it already exists.
- **Syntax**: `ZADD zset score member1 score2 member2 ...`

### `ZRANGE`

- **Description**: Returns a range of members in a sorted set.
- **Syntax**: `ZRANGE zset start stop`

### `ZREM`

- **Description**: Removes one or more members from a sorted set.
- **Syntax**: `ZREM zset member1 member2 ...`

### `ZSCORE`

- **Description**: Gets the score of a member in a sorted set.
- **Syntax**: `ZSCORE zset member`

## Pub/Sub Commands

### `PUBLISH`

- **Description**: Publishes a message to a channel.
- **Syntax**: `PUBLISH channel message`

### `SUBSCRIBE`

- **Description**: Subscribes to one or more channels.
- **Syntax**: `SUBSCRIBE channel1 channel2 ...`

### `UNSUBSCRIBE`

- **Description**: Unsubscribes from one or more channels.
- **Syntax**: `UNSUBSCRIBE channel1 channel2 ...`

## Server Commands

### `INFO`

- **Description**: Returns information and statistics about the server.
- **Syntax**: `INFO`

### `FLUSHALL`

- **Description**: Deletes all keys in all databases.
- **Syntax**: `FLUSHALL`

### `FLUSHDB`

- **Description**: Deletes all keys in the current database.
- **Syntax**: `FLUSHDB`

## Transaction Commands

### `MULTI`

- **Description**: Marks the start of a transaction block.
- **Syntax**: `MULTI`

### `EXEC`

- **Description**: Executes all commands in a transaction.
- **Syntax**: `EXEC`

### `DISCARD`

- **Description**: Discards all commands in a transaction.
- **Syntax**: `DISCARD`

### `WATCH`

- **Description**: Watches one or more keys for changes in a transaction.
- **Syntax**: `WATCH key1 key2 ...`

---

For more details on each command, refer to the official [Redis documentation](https://redis.io/docs/).
