                                                  EcoRouteMobile App
                                                  
EcoRouteMobile** est une application React Native qui compare différents modes de transport selon leur distance, durée, 
émission de CO₂ et un score d'efficacité environnementale. Elle vise à aider les utilisateurs à choisir le trajet le plus écoresponsable.

                                                    Quick Start
Prerequis
>> Node.js
>> npm or yarn
>> Expo CLI: "npm install -g expo-cli"

                                                   Installation
git clone https://github.com/jaulin10/EcoRouteMobile.git
cd EcoRouteMobile
npm install

                                                      Run App 
npx expo start

                                                    Mock Data 
File : assets/routes.json
Content: List of routes containing mode, distance_km, time_min, CO2_g, and score.
Loading: Direct import into InputScreen.tsx:
import routesData from '../assets/routes.json';

                                                Design Decisions 
Main Framework: React Native with Expo
Navigation: @react-navigation/native with Stack Navigator
Data: Mock data in JSON, no backend
Structure:
screens/: Page components (InputScreen.tsx, ResultsScreen.tsx, MapPreviewScreen.tsx)
assets/routes.json: Mock data
App.tsx: Entry point with navigation
Simplicity: The app is designed to be readable, modular, and easily extensible.

                                               Next Steps 
To move towards a production version, we can proceed with the following steps:

1. API Connection: Replace routes.json with a real API (Google Maps, Mapbox, OpenTripPlanner)
to calculate live routes based on start/end points.

2. Add an interactive map: Integrate a dynamic MapView with geolocation, real-time routes,
and traffic-based calculations.

3. User Authentication: Add Firebase Auth or Auth0 to allow users to save their favorite routes.

4. Local Storage/Caching: Use AsyncStorage or SQLite to avoid unnecessary recalculations
and improve responsiveness.

5. Accessibility and UX: Improve the interface with animations, haptic feedback, a dark theme, etc.

6. CI/CD:
>> GitHub Actions for automatic lint/test/build
>> OTA deployment via Expo or to TestFlight/Google Play

7. Automated testing: Implement unit tests (Jest) and UI tests (React Native Testing Library).
