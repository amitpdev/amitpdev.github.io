# My Projects & Open Source Contributions

Over the years, I've had the opportunity to build various products and tools that solve real problems. Here's a collection of some of the work I'm most proud of - from full-scale applications to open-source libraries that help other developers.

## 🛠️ Open Source Libraries

Open source has always been an important part of my development journey. Here are some libraries I've created to solve common problems:

### [react-native-streetview](https://github.com/nesterapp/react-native-streetview)

A Google Street View component that works seamlessly on both iOS and Android. This library saves developers hours of platform-specific implementation by providing a unified API.

### [react-native-google-places-textinput](https://github.com/amitpdev/react-native-google-places-textinput)

A customizable Google Places autocomplete TextInput component that integrates the power of Google's location database with the flexibility of React Native's UI system.

### [react-native-fast-range-slider](https://github.com/amitpdev/react-native-fast-range-slider)

After getting frustrated with the performance limitations of existing range slider components, I built this high-performance dual-knob range slider that maintains 60fps animations even on older devices.

## 🏠 Nester

[Nester](https://nester.co.il) started as a vision to modernize the home rental experience in Israel. What began as a side project eventually grew into a full-featured rental platform with thousands of users.

### The Journey

Building Nester was a complete end-to-end product experience. I designed and developed:

- iOS app (Swift)
- Android app (React Native)
- Backend services
- Admin dashboard

One of the interesting technical challenges was creating a geo-data engine that efficiently handled address search and displayed complex rental zone polygons on MapKit. This required optimizing PostGIS queries and designing a [custom caching layer](/ios-cache-handler) that kept the app responsive even with large datasets.

### Data Collection & Processing

A key innovation behind Nester was its ability to aggregate rental listings from across the web. I developed a sophisticated data pipeline that:

- Collected unstructured rental posts from social media platforms using Python-based web scrapers (Selenium and BeautifulSoup)
- Processed this raw data through a custom natural language processing system built with pre-LLM era tools (BERT models via Hugging Face)
- Extracted structured information like addresses, prices, number of bedrooms, square footage, and floor numbers from free-text descriptions
- Validated and normalized the data to ensure consistency

This approach allowed Nester to offer a comprehensive view of the rental market that no competitor could match, with fresh listings appearing automatically rather than requiring manual entry.

### Technical Highlights

- **In-App Purchases**: Implemented using Apple's StoreKit 2.0, which simplified receipt validation and subscription management
- **Localization System**: Built a dynamic language switching system with full RTL support for Hebrew
- **Push Notification Architecture**: Created a segmented notification system allowing targeted messages based on user preferences and geographic areas
- **CI/CD Pipeline**: Automated the entire release process with GitHub Actions and Fastlane

## 🧭 Ingeo SDK for iOS

After working on location-based features in multiple apps, I noticed a common pattern - the standard Core Location framework either drained battery quickly or provided inaccurate results. This led me to create the [Ingeo SDK](https://github.com/IngeoSDK/ingeo-ios-sdk).

This framework provides enhanced location capabilities with dramatically reduced battery consumption - perfect for apps that need background location without draining users' batteries.

Written in Objective-C with a clean Swift interface, the SDK uses sophisticated algorithms to intelligently adjust location precision based on context. The implementation includes:

- Kalman filters to reduce noise in location data, avoiding redundant data points
- Intelligent filtering to prevent location data inflation with non-valid coordinates
- Motion-aware system that detects if the user is stationary, walking, cycling, or driving
- Context-based sampling rates that adapt to the user's movement patterns
- Power-optimized background tracking modes that balance accuracy with battery life

### Real-World Testing

Unlike many location frameworks only tested in simulations, I tested Ingeo in real-world conditions with friends and family across various transportation modes - walking, cycling, and driving. This hands-on approach revealed insights that simulations would have missed, leading to significant algorithm refinements and better performance.

## 📈 Coin-Ranks

[Coin-Ranks](https://coin-ranks.com) is a cryptocurrency tracking tool I built to solve a specific problem in the crypto investment space - understanding historical ranking movements of coins.

### The Problem

While most crypto platforms focus on price movements, I noticed that coin ranking shifts (based on market capitalization) provide equally valuable insights about market trends and relative performance. When a coin moves up or down in rankings, it often tells a story that pure price data might miss.

### The Solution

I developed Coin-Ranks as a web application that pulls data from CoinGecko's API and presents it with a focus on rank shifts over time. The site allows investors to:

- Track historical ranking changes for any cryptocurrency
- Compare multiple coins' ranking trajectories
- Identify emerging coins moving up the rankings
- Spot previously popular coins losing ground

### Tech Stack

- **Frontend**: React.js with responsive design to work across devices
- **Backend**: Node.js API service that handles data aggregation
- **Database**: PostgreSQL for storing historical ranking data and relationships
- **Caching**: Redis for high-performance data access and reducing API calls
- **Data**: Integration with CoinGecko's API for current market data

## What's Next?

I'm focused on enhancing my open source libraries while exploring AI and LLM integrations for mobile applications. Currently seeking a full-time mobile developer position where I can apply my cross-platform and full-stack experience and contribute to innovative products.

Follow along on this blog or check out my [GitHub](https://github.com/amitpdev) to see what I'm working on next! Feel free to reach out if you have questions about these projects or want to discuss collaboration opportunities.