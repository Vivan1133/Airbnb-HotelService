## Steps to setup the starter template

1. Clone the project

```
git clone https://github.com/Vivan1133/Airbnb-hotelService.git
<ProjectName>
```

2. Move in to the folder structure

```
cd <ProjectName>
```

3. Install npm dependencies

```
npm i
```

4. Create a new .env file in the root directory and add the env variables

```
PORT=port-number
DB_USERNAME="your-db-username"
DB_PASSWORD="your-db-password"
DB_NAME="airbnb_dev"
DB_HOST="your-db-host-add"
DB_DIALECT="mysql"
DB_PORT="db-port-3306-default"
REDIS_SERVER_URL="redis-server-url"
ROOM_CRON="* * * * *"
```

5. Start the express server

```
npm run dev
```

## Database Details
```Database Name: airbnb_dev```

### Hotels                                  
----------------------------            
| Field        | Type      |
| ------------ | --------- |
| id           | number    |
| name         | string    |
| location     | string    |
| city         | string    |
| state        | string    |
| pincode      | string    |
| rating       | number    |
| rating_count | number    |
| description  | string    |
| manager_id   | number    |
| createdAt    | timestamp |
| updatedAt    | timestamp |
| deletedAt    | timestamp |
----------------------------

### Rooms
--------------------------------
| Field            | Type      |
| ---------------- | --------- |
| id               | number    |
| hotel_id         | number    |
| room_category_id | number    |
| booking_id       | number    |
| date_of_avail    | date      |
| price            | number    |
| created_at       | timestamp |
| updated_at       | timestamp |
| deleted_at       | timestamp |
--------------------------------

### room_categories
--------------------------
| Field      | Type      |
| ---------- | --------- |
| id         | number    |
| category   | string    |
| price      | number    |
| hotel_id   | number    |
| room_left  | number    |
| created_at | timestamp |
| updated_at | timestamp |
| deleted_at | timestamp |
--------------------------


### Base URL
```
{server-url}/api/v1
ex: http://localhost:3000/api/v1
```

### 🏨 Hotel Routes
Base Path: ```/hotels```


| Method   | Endpoint      | Description          |
| -------- | ------------- | -------------------- |
| `POST`   | `/hotels`     | Create a new hotel   |
| `GET`    | `/hotels`     | Fetch all hotels     |
| `GET`    | `/hotels/:id` | Fetch hotel by ID    |
| `PATCH`  | `/hotels/:id` | Update hotel details |
| `DELETE` | `/hotels/:id` | Soft delete hotel    |

### 🛏️ Room Category Routes
Base Path: ```/room-categories```


| Method | Endpoint                    | Description                  |
| ------ | --------------------------- | ---------------------------- |
| POST   | `/room-categories`          | Create room category         |
| GET    | `/room-categories`          | Get all room categories      |
| GET    | `/room-categories/:id`      | Get room category by ID      |
| GET    | `/room-categories/:hotelId` | Get room categories by hotel |
| PATCH  | `/room-categories/:id`      | Update room category         |
| DELETE | `/room-categories/:id`      | Delete room category         |


### ⚙️ Room Generation (Async via Redis)
Rooms are created asynchronously using Redis queues.
Workers automatically consume jobs and create room records.

Base Path: ```/room-generation```
| Method | Endpoint           | Description                   |
| ------ | ------------------ | ----------------------------- |
| POST   | `/room-generation` | Generate rooms asynchronously |

📌 This process is manual and places a job into Redis, which workers pick up.

### ⏰ Scheduler (Cron Jobs)
The application starts a cron job automatically on app startup to extend room availability periodically.
Base Path: ```/scheduler```

| Method | Endpoint            | Description                       |
| ------ | ------------------- | --------------------------------- |
| POST   | `/scheduler/start`  | Start scheduler                   |
| POST   | `/scheduler/stop`   | Stop scheduler                    |
| GET    | `/scheduler/status` | Get scheduler status              |
| POST   | `/scheduler/extend` | Manually extend room availability |


### 🔁 Room Availability Flow

App starts → Scheduler starts automatically
Scheduler periodically checks room availability
New rooms are generated when required
Rooms are created asynchronously using Redis workers




