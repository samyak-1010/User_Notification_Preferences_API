# User Notification Preferences API

A serverless API built with Nest.js to manage user notification preferences and simulate sending notifications. This project includes user preference CRUD operations, notification delivery simulation, and logging, with robust validation, error handling, and testing.

## 🚀 Features

- **User Preferences Management**  
  Create, retrieve, update, and delete user notification preferences.
- **Notification Delivery Simulation**  
  Send notifications based on user preferences via email, SMS, or push.
- **Notification Logging**  
  Track notification status (pending, sent, failed) and log failure reasons.
- **Rate Limiting**  
  Protect endpoints from abuse with basic rate limiting.
- **Statistics Tracking**  
  Simple API to track notification delivery stats.
- **Serverless Deployment**  
  Deployable to Vercel or AWS Lambda.

## 🛠️ Tech Stack

- **Framework:** Nest.js (TypeScript)  
- **Database:** MongoDB with Mongoose  
- **Validation:** `class-validator`, `class-transformer`  
- **Testing:** Jest  
- **Deployment:** Serverless (Vercel or AWS Lambda)  

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
2. **Install dependencies:**
   ```bash
   npm install
3. **Create a `.env` file** using the provided `env.template`.  
   - Example:
     ```makefile
     DATABASE_URL=<MongoDB_Connection_String>
     PORT=3000
     ```
4. **Start the development server:**
   ```bash
   npm run start:dev

# 🧪 Testing

- **Run unit and integration tests:**
  ```bash
  npm run test

# 🚀 Deployment

### Deploy to Vercel
1. Link your repository with Vercel.
2. Configure environment variables in the Vercel dashboard.
3. Deploy automatically through Vercel’s CI/CD pipeline.

### Deploy to AWS Lambda
1. Build the project for production:
   ```bash
   npm run build
2. Deploy using the serverless framework:
   ```bash
   serverless deploy

# 📊 Statistics & Bonus Features

- **Statistics Tracking:** Access aggregate delivery statistics via `/api/notifications/stats`.
- **OpenAPI/Swagger Documentation:** Available at `/api/docs` (if implemented).
- **Rate Limiting:** Configured using Nest.js rate-limiting middleware.
- **Queueing Simulation:** Notification sending is simulated with delay and status tracking.

---

# 📚 Resources

- [Nest.js Documentation](https://docs.nestjs.com)
- [Mongoose Documentation](https://mongoosejs.com)
- [Class Validator Documentation](https://github.com/typestack/class-validator)
- [Serverless Framework Documentation](https://www.serverless.com/framework/docs)

---

# 🏆 Bonus Points

- **API Key Authentication:** Add headers with an API key for secure access.
- **Request Caching:** Implement caching for frequently accessed endpoints.
- **Performance Monitoring:** Use tools like New Relic or AWS CloudWatch.

---



