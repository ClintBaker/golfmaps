# 🏌️ Golf Maps

A full-stack web application that helps golfers discover and explore golf courses using interactive maps. Built with React, Node.js, Express, and MongoDB, featuring real-time geolocation and course management capabilities.

![Golf Maps](https://img.shields.io/badge/React-18.3.1-blue) ![Node.js](https://img.shields.io/badge/Node.js-Express-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green) ![Mapbox](https://img.shields.io/badge/Mapbox-GL-orange)

## ✨ Features

- **Interactive Map Interface**: Powered by Mapbox GL for smooth, responsive mapping
- **Course Discovery**: Browse golf courses with detailed information including location, pricing, difficulty, and ratings
- **Geolocation Support**: Automatically centers the map on your current location
- **Course Management**: Full CRUD operations for golf course data
- **Responsive Design**: Built with Tailwind CSS for modern, mobile-friendly UI
- **Real-time Data**: MongoDB integration for dynamic course information

## 🛠️ Tech Stack

### Frontend

- **React 18.3.1** - Modern UI library with hooks
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Mapbox GL** - Interactive mapping library
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **Morgan** - HTTP request logger
- **CORS** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB instance)
- Mapbox account and API token

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/golfmaps.git
   cd golfmaps
   ```

2. **Install server dependencies**

   ```bash
   npm install
   ```

3. **Install client dependencies**

   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Environment Setup**

   Create a `.env` file in the root directory:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

   Create a `.env` file in the client directory:

   ```env
   VITE_MAPBOX_TOKEN=your_mapbox_token
   ```

5. **Start the development servers**

   In separate terminal windows:

   ```bash
   # Start the backend server
   npm run dev

   # Start the frontend development server
   cd client
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
golfmaps/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── providers/      # Context providers
│   │   ├── routes/         # Routing configuration
│   │   └── styles/         # CSS and styling
│   ├── public/            # Static assets
│   └── package.json
├── src/                   # Backend source
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   └── modules/           # Database connection
├── server.js              # Express server entry point
└── package.json
```

## 🔧 API Endpoints

| Method | Endpoint      | Description               |
| ------ | ------------- | ------------------------- |
| GET    | `/course`     | Get all golf courses      |
| GET    | `/course/:id` | Get specific course by ID |
| POST   | `/course`     | Create new golf course    |
| PUT    | `/course/:id` | Update existing course    |
| DELETE | `/course/:id` | Delete course             |

## 🗄️ Database Schema

```javascript
{
  name: String,           // Course name
  lat: Number,           // Latitude coordinate
  lng: Number,           // Longitude coordinate
  city: String,          // City location
  state: String,         // State location
  public: Boolean,       // Public/private course
  priceOfRound: Number,  // Cost per round
  difficulty: Number,    // Difficulty rating (1-5)
  rating: Number         // Overall rating (1-5)
}
```

## 🌍 Mapbox Integration

This project uses Mapbox GL for interactive mapping. To get started:

1. Sign up for a free Mapbox account at [mapbox.com](https://www.mapbox.com)
2. Create a new access token
3. Add your token to the client `.env` file as `VITE_MAPBOX_TOKEN`

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. Build the client: `cd client && npm run build`
2. Deploy the `dist` folder to your preferred hosting service

### Backend (Railway/Heroku)

1. Ensure your MongoDB Atlas cluster is accessible
2. Set environment variables in your hosting platform
3. Deploy the server code

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- [Mapbox](https://www.mapbox.com) for the mapping services
- [React](https://reactjs.org) for the frontend framework
- [Express.js](https://expressjs.com) for the backend framework
- [MongoDB](https://www.mongodb.com) for the database
