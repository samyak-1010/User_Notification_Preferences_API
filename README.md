# User_Notification_Preferences_API

User Notification Preferences API
A serverless API built with Nest.js to manage user notification preferences and simulate sending notifications. This project includes user preference CRUD operations, notification delivery simulation, and logging, with robust validation, error handling, and testing.

🚀 Features
User Preferences Management
Create, retrieve, update, and delete user notification preferences.
Notification Delivery Simulation
Send notifications based on user preferences via email, SMS, or push.
Notification Logging
Track notification status (pending, sent, failed) and log failure reasons.
Rate Limiting
Protect endpoints from abuse with basic rate limiting.
Statistics Tracking
Simple API to track notification delivery stats.
Serverless Deployment
Deployable to Vercel or AWS Lambda.
🛠️ Tech Stack
Framework: Nest.js (TypeScript)
Database: MongoDB with Mongoose
Validation: class-validator, class-transformer
Testing: Jest
Deployment: Serverless (Vercel or AWS Lambda)
📄 API Documentation
User Preferences Endpoints
Create User Preferences

http
Copy code
POST /api/preferences
Body:
json
Copy code
{
  "userId": "user123",
  "email": "user@example.com",
  "preferences": {
    "marketing": true,
    "newsletter": false,
    "updates": true,
    "frequency": "weekly",
    "channels": {
      "email": true,
      "sms": false,
      "push": true
    }
  },
  "timezone": "America/New_York"
}
Get User Preferences

http
Copy code
GET /api/preferences/:userId
Update User Preferences

http
Copy code
PATCH /api/preferences/:userId
Delete User Preferences

http
Copy code
DELETE /api/preferences/:userId
Notification Management Endpoints
Send Notification

http
Copy code
POST /api/notifications/send
Body:
json
Copy code
{
  "userId": "user123",
  "type": "marketing",
  "channel": "email",
  "content": {
    "subject": "Special Offer",
    "body": "Check out our latest deals!"
  }
}
Get Notification Logs

http
Copy code
GET /api/notifications/:userId/logs
Get Notification Stats

http
Copy code
GET /api/notifications/stats
🔧 Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
cd <repository-name>
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file using the provided env.template.
Example:
makefile
Copy code
DATABASE_URL=<MongoDB_Connection_String>
PORT=3000
Start the development server:

bash
Copy code
npm run start:dev
Access the API at http://localhost:3000.

🧪 Testing
Run unit and integration tests:

bash
Copy code
npm run test
Check test coverage:

bash
Copy code
npm run test:cov
🚀 Deployment
Deploy to Vercel
Link your repository with Vercel.
Configure environment variables in the Vercel dashboard.
Deploy automatically through Vercel’s CI/CD pipeline.
Deploy to AWS Lambda
Build the project for production:
bash
Copy code
npm run build
Deploy using the serverless framework:
bash
Copy code
serverless deploy
📊 Statistics & Bonus Features
Statistics Tracking: Access aggregate delivery statistics via /api/notifications/stats.
OpenAPI/Swagger Documentation: Available at /api/docs (if implemented).
Rate Limiting: Configured using Nest.js rate-limiting middleware.
Queueing Simulation: Notification sending is simulated with delay and status tracking.
📚 Resources
Nest.js Documentation
Mongoose Documentation
Class Validator Documentation
Serverless Framework Documentation
🏆 Bonus Points
API Key Authentication: Add headers with an API key for secure access.
Request Caching: Implement caching for frequently accessed endpoints.
Performance Monitoring: Use tools like New Relic or AWS CloudWatch.
🤝 Contribution
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a feature branch:
bash
Copy code
git checkout -b feature-name
Commit your changes and push:
bash
Copy code
git commit -m "Description of feature"
git push origin feature-name
Create a pull request.
📧 Contact
For any queries, reach out to:

Name: Samyak Singh
Email: samyaksingh1028@gmail.com

