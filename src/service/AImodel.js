import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate travel plan for location: Las vagas, for 3 days for a couple with cheap budget, give me hotels options list with hotel Name, hotel Address, Price, hotel image url, geo coordinates, ratings, descriptions and suggest itinerary with placeName, Place Details, place image url, geo coordinates, ticket pricing, ratings, time to travel each of the location for 3 days with each day plan, with best time to visit in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: 'I cannot directly access and display images or real-time pricing information for hotels.  Hotel prices fluctuate constantly.  Furthermore, I cannot access real-time geo-coordinates for every location with the precision you might expect from a map service.  However, I can provide you with a JSON structure containing the other information you requested, which you can then populate with data from online travel agencies (like Booking.com, Expedia, etc.) and map services (like Google Maps).\n\n\n```json\n{\n  "tripDetails": {\n    "destination": "Las Vegas, NV",\n    "duration": "3 days",\n    "travelers": "Couple",\n    "budget": "Cheap",\n    "bestTimetoVisit": "September-November (avoid peak summer heat and holiday crowds)"\n  },\n  "hotels": [\n    {\n      "hotelName": "Hotel Name 1",\n      "hotelAddress": "Address 1, Las Vegas, NV",\n      "price": "Enter price range here (e.g., $50-$80/night)",\n      "hotelImageUrl": "Enter image URL here",\n      "geoCoordinates": {\n        "latitude": "Enter Latitude",\n        "longitude": "Enter Longitude"\n      },\n      "ratings": "Enter rating (e.g., 3.5 stars)",\n      "description": "Enter hotel description"\n    },\n    {\n      "hotelName": "Hotel Name 2",\n      "hotelAddress": "Address 2, Las Vegas, NV",\n      "price": "Enter price range here",\n      "hotelImageUrl": "Enter image URL here",\n      "geoCoordinates": {\n        "latitude": "Enter Latitude",\n        "longitude": "Enter Longitude"\n      },\n      "ratings": "Enter rating",\n      "description": "Enter hotel description"\n    },\n    {\n      "hotelName": "Hotel Name 3",  //Example: Circus Circus (often budget-friendly)\n      "hotelAddress": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "Enter price range here",\n      "hotelImageUrl": "Enter image URL here",\n      "geoCoordinates": {\n        "latitude": "36.1204",\n        "longitude": "-115.1717"\n      },\n      "ratings": "Enter rating",\n      "description": "Enter hotel description"\n    }\n\n  ],\n  "itinerary": {\n    "day1": [\n      {\n        "placeName": "Fremont Street Experience",\n        "placeDetails": "Free light show, street performers, casinos",\n        "placeImageUrl": "Enter image URL here",\n        "geoCoordinates": {\n          "latitude": "36.1693",\n          "longitude": "-115.1405"\n        },\n        "ticketPricing": "Free",\n        "ratings": "Enter rating",\n        "travelTime": "30 minutes (walking/transit from hotel)"\n      },\n      {\n        "placeName": "Neon Museum",\n        "placeDetails": "Collection of vintage Las Vegas signs (admission fee)",\n        "placeImageUrl": "Enter image URL here",\n        "geoCoordinates": {\n          "latitude": "36.1378",\n          "longitude": "-115.1504"\n        },\n        "ticketPricing": "Enter price",\n        "ratings": "Enter rating",\n        "travelTime": "20 minutes (taxi/rideshare/bus)"\n      }\n    ],\n    "day2": [\n      {\n        "placeName": "The Strip (walking)",\n        "placeDetails": "Explore the casinos, hotels, and atmosphere",\n        "placeImageUrl": "Enter image URL here",\n        "geoCoordinates": {\n          "latitude": "36.1146",\n          "longitude": "-115.1728"\n        },\n        "ticketPricing": "Free (unless entering specific attractions)",\n        "ratings": "Enter rating",\n        "travelTime": "All day, depending on walking pace"\n      },\n      {\n        "placeName": "Bellagio Fountains",\n        "placeDetails": "Free water show",\n        "placeImageUrl": "Enter image URL here",\n        "geoCoordinates": {\n          "latitude": "36.1146",\n          "longitude": "-115.1728"\n        },\n        "ticketPricing": "Free",\n        "ratings": "Enter rating",\n        "travelTime": "5 minutes (walking from other Strip locations)"\n      }\n    ],\n    "day3": [\n      {\n        "placeName": "Seven Magic Mountains",\n        "placeDetails": "Art installation outside the city (requires transportation)",\n        "placeImageUrl": "Enter image URL here",\n        "geoCoordinates": {\n          "latitude": "36.0037",\n          "longitude": "-115.0673"\n        },\n        "ticketPricing": "Free",\n        "ratings": "Enter rating",\n        "travelTime": "30-45 minutes drive (rental car recommended)"\n      },\n      {\n        "placeName": "Downtown Container Park",\n        "placeDetails": "Unique shopping and dining experience",\n        "placeImageUrl": "Enter image URL here",\n        "geoCoordinates": {\n          "latitude": "36.1610",\n          "longitude": "-115.1404"\n        },\n        "ticketPricing": "Free to enter, prices vary for food and shopping",\n        "ratings": "Enter rating",\n        "travelTime": "15-20 minutes from hotel (taxi/rideshare)"\n      }\n    ]\n  }\n}\n```\n\nRemember to replace the placeholder values with actual data from your research.  Prioritize free or low-cost activities given your "cheap budget" constraint.  Consider using public transportation (buses) to minimize transportation costs.  Always check for updated pricing and opening times before your trip.\n',
        },
      ],
    },
  ],
});

export const AI_PROMPT =
  "Generate travel plan for location: {location}, for {totalDays} days for {traveller} people with {budget} budget, give me hotels options list with hotel Name, hotel Address, Price, hotel image url, geo coordinates, ratings, descriptions and suggest itinerary with placeName, Place Details, place image url, geo coordinates, ticket pricing, ratings, time to travel each of the location for {totalDays} days with each day plan, with best time to visit in JSON format";
