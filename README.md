SYNAPSE App 🚗

An AI-powered vehicle control app prototype built using React Native and Expo. The app allows users to control vehicle functions like starting/stopping the engine, locking/unlocking the car, and viewing activities. Additionally, it shows traffic near the user's location and logs engine sessions dynamically with start time, end time, total duration, and distance traveled.

---

Features
- Quick Actions: 
  - Start/Stop the engine
  - Lock/Unlock the car
- Activity Logging:
  - Logs each engine session with:
    - Start time
    - End time
    - Total duration
    - Distance traveled
- Traffic Map:
  - Displays live traffic near the user's current location.
- Dynamic Updates:
  - Real-time updates for activity logs.
- Simple UI:
  - Easy-to-use interface with intuitive navigation.

---

Folder Structure
VehicleControlApp/
├── App.js                  # Main application file
├── package.json            # Project dependencies
├── context/                # Context API for state management
│   └── ActivitiesContext.js # Manages activities and session data
├── screens/                # Individual app screens
│   ├── HomeScreen.js        # Quick actions and traffic map
│   ├── ActivityScreen.js    # Activity log display
│   └── MapScreen.js         # Full-screen map view
├── assets/                 # Static assets (e.g., images)


---

Prerequisites
- Node.js: Ensure you have Node.js installed on your system. [Download here](https://nodejs.org/).
- Expo CLI: Install the Expo CLI globally:
  npm install -g expo-cli
- Expo Go App: Install the Expo Go app on your smartphone (available on the [App Store](https://apps.apple.com/) or [Google Play Store](https://play.google.com/)).

---

Installation
1. Clone the repository:
   git clone https://github.com/your-username/vehicle-control-app.git
   cd vehicle-control-app

2. Install dependencies:
   npm install

3. Start the development server:
   expo start

4. Run the app:
   - Open the Expo Go app on your smartphone.
   - Scan the QR code displayed in the terminal or browser.

---

Usage
1. Navigate to the Home Screen to:
   - Start/Stop the engine.
   - Lock/Unlock the car.
   - View traffic near your current location.
2. Navigate to the Activity Screen to view:
   - Engine session logs with:
     - Start and end time.
     - Total duration.
     - Distance traveled.

---

How It Works
1. Quick Actions:
   - Use startEngine and stopEngine functions in ActivitiesContext to log and manage engine sessions.
2. Traffic Map:
   - Fetches the user's location using expo-location.
   - Displays traffic with the react-native-maps library.
3. Activity Log:
   - Logs each engine session dynamically and displays the details on the Activity Screen.

---

Technologies Used
- React Native
- Expo
- React Navigation
- Context API
- react-native-maps for traffic maps
- expo-location for accessing the user's location

---
