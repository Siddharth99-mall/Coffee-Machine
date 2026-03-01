// const sampleListings = [
//     {
//       title: "Cozy Beachfront Cottage",
//       description:
//         "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//       image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       price: 1500,
//       category:"Beach",
//       location: "Malibu",
//       country: "United States",
//     },
//     {
//       title: "Modern Loft in Downtown",
//       description:
//         "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//       image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       price: 1200,
//       category:"Mountain",
//       location: "New York City",
//       country: "United States",
//     },
//     {
//       title: "Mountain Retreat",
//       description:
//         "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//       image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       price: 1000,
//       category:"Room",
//       location: "Aspen",
//       country: "United States",
//     },
//     {
//       title: "Historic Villa in Tuscany",
//       description:
//         "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//       image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
//       price: 2500,
//       category:"Room",
//       location: "Florence",
//       country: "Italy",
//     },
//     {
//       title: "Secluded Treehouse Getaway",
//       description:
//         "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//       image:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      
//       price: 800,
//       category:"Mountain",  
//       location: "Portland",
//       country: "United States",
//     },
//     {
//       title: "Beachfront Paradise",
//       description:
//         "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//       image:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      
//       price: 2000,
//       category:"Mountain",
//       location: "Cancun",
//       country: "Mexico",
//     },
//     {
//       title: "Rustic Cabin by the Lake",
//       description:
//         "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//       image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    
//       price: 900,
//       category:"Mountain",
//       location: "Lake Tahoe",
//       country: "United States",
//     },
//     {
//       title: "Luxury Penthouse with City Views",
//       description:
//         "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//       image:"https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
//       price: 3500,
//       category:"Beach",
//       location: "Los Angeles",
//       country: "United States",
//     },
//     {
//       title: "Ski-In/Ski-Out Chalet",
//       description:
//         "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//       image:"https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
//       price: 3000,
//       category:"Beach",
//       location: "Verbier",
//       country: "Switzerland",
//     },
//     {
//       title: "Safari Lodge in the Serengeti",
//       description:
//         "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//       image:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
//       price: 4000,
//       category:"Mountain",
//       location: "Serengeti National Park",
//       country: "Tanzania",
//     },
//     {
//       title: "Historic Canal House",
//       description:
//         "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//       image:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      
//       price: 1800,
//       category:"Camping",
//       location: "Amsterdam",
//       country: "Netherlands",
//     },
//     {
//       title: "Private Island Retreat",
//       description:
//         "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//       image:"https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    
//       price: 10000,
//       category:"Mountain",
//       location: "Fiji",
//       country: "Fiji",
//     },
//     {
//       title: "Charming Cottage in the Cotswolds",
//       description:
//         "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//       image:"https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      
//       price: 1200,
//       category:"Beach",
//       location: "Cotswolds",
//       country: "United Kingdom",
//     },
//     {
//       title: "Historic Brownstone in Boston",
//       description:
//         "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//       image:"https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    
//       price: 2200,
//       category:"Beach",
//       location: "Boston",
//       country: "United States",
//     },
//     {
//       title: "Beachfront Bungalow in Bali",
//       description:
//         "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//       image:"https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
//       price: 1800,
//       category:"Mountain",
//       location: "Bali",
//       country: "Indonesia",
//     },
//     {
//       title: "Mountain View Cabin in Banff",
//       description:
//         "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//       image:"https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
//       price: 1500,
//       category:"Mountain",
//       location: "Banff",
//       country: "Canada",
//     },
//     {
//       title: "Art Deco Apartment in Miami",
//       description:
//         "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//       image:"https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
//       price: 1600,
//       category:"Arctic",
//       location: "Miami",
//       country: "United States",
//     },
//     {
//       title: "Tropical Villa in Phuket",
//       description:
//         "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//       image:"https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
//       price: 3000,
//       category:"Mountain",
//       location: "Phuket",
//       country: "Thailand",
//     },
//     {
//       title: "Historic Castle in Scotland",
//       description:
//         "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//       image:"https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
//       price: 4000,
//       category:"Beach",
//       location: "Scottish Highlands",
//       country: "United Kingdom",
//     },
//     {
//       title: "Desert Oasis in Dubai",
//       description:
//         "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//       image:"https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
//       price: 5000,
//       category:"Beach",
//       location: "Dubai",
//       country: "United Arab Emirates",
//     },
//     {
//       title: "Rustic Log Cabin in Montana",
//       description:
//         "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//       image:"https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
//       price: 1100,
//       category:"Camping",
//       location: "Montana",
//       country: "United States",
//     },
//     {
//       title: "Beachfront Villa in Greece",
//       description:
//         "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//       image:"https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
//       price: 2500,
//       category:"Room",
//       location: "Mykonos",
//       country: "Greece",
//     },
//     {
//       title: "Eco-Friendly Treehouse Retreat",
//       description:
//         "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
//       image:"https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
//       price: 750,
//       category:"Room",
//       location: "Costa Rica",
//       country: "Costa Rica",
//     },
//     {
//       title: "Historic Cottage in Charleston",
//       description:
//         "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//       image:"https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
//       price: 1600,
//       category:"Room",
//       location: "Charleston",
//       country: "United States",
//     },
//     {
//       title: "Modern Apartment in Tokyo",
//       description:
//         "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//       image:"https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
//       price: 2000,
//       category:"Room",
//       location: "Tokyo",
//       country: "Japan",
//     },
//     {
//       title: "Lakefront Cabin in New Hampshire",
//       description:
//         "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//       image:"https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
//       price: 1200,
//       category:"Room",
//       location: "New Hampshire",
//       country: "United States",
//     },
//     {
//       title: "Luxury Villa in the Maldives",
//       description:
//         "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//       image:"https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      
//       price: 6000,
//       category:"Room",
//       location: "Maldives",
//       country: "Maldives",
//     },
//     {
//       title: "Ski Chalet in Aspen",
//       description:
//         "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//       image:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    
//       price: 4000,
//       category:"Room",
//       location: "Aspen",
//       country: "United States",
//     },
//     {
//       title: "Secluded Beach House in Costa Rica",
//       description:
//         "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//       image:"https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       price: 1800,
//       category:"Room",
//       location: "Costa Rica",
//       country: "Costa Rica",
//     },
//   ];
  
//   module.exports = { data: sampleListings };
const sampleListings = [
  {
    title: "Premium Espresso Pro X1",
    description: "High-performance espresso machine with advanced pressure control for perfect crema.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    price: 45000,
    category: "Automatic",
    location: "Mumbai",
    country: "India",
  },
  {
    title: "CaféMaster 2000",
    description: "Compact coffee machine ideal for small offices and home kitchens.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    price: 22000,
    category: "Manual",
    location: "Delhi",
    country: "India",
  },
  {
    title: "Barista Touch Elite",
    description: "Touchscreen-enabled smart coffee machine with customizable brewing options.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    price: 52000,
    category: "Automatic",
    location: "Bangalore",
    country: "India",
  },
  {
    title: "BrewMaster Classic",
    description: "Traditional manual espresso maker for authentic café-style coffee.",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31",
    price: 18000,
    category: "Manual",
    location: "Pune",
    country: "India",
  },
  {
    title: "QuickBrew Office Pro",
    description: "High-speed coffee vending machine designed for corporate environments.",
    image: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff",
    price: 60000,
    category: "Semi-Automatic",
    location: "Hyderabad",
    country: "India",
  },
  {
    title: "LatteArt Supreme",
    description: "Steam wand equipped machine for perfect latte art creations.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    price: 38000,
    category: "Semi-Automatic",
    location: "Chennai",
    country: "India",
  },
  {
    title: "Urban Brew Mini",
    description: "Portable and lightweight coffee maker for small apartments.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
    price: 15000,
    category: "Manual",
    location: "Kolkata",
    country: "India",
  },
  {
    title: "CafePro Deluxe 5G",
    description: "WiFi-enabled smart coffee machine with mobile app support.",
    image: "https://images.unsplash.com/photo-1507914372368-b2b085b925a1",
    price: 72000,
    category: "Automatic",
    location: "Ahmedabad",
    country: "India",
  },
  {
    title: "OfficeBrew 12L",
    description: "Large capacity coffee dispenser ideal for meetings and events.",
    image: "https://images.unsplash.com/photo-1509401934319-cfe8d16779aa",
    price: 85000,
    category: "Automatic",
    location: "Noida",
    country: "India",
  },
  {
    title: "HomeBarista Compact",
    description: "User-friendly coffee machine for beginners.",
    image: "https://images.unsplash.com/photo-1527169402691-feff5539e52c",
    price: 19000,
    category: "Manual",
    location: "Jaipur",
    country: "India",
  },

  // Remaining 20 (shortened description style but same format)

  { title: "Elite Brew Max", description: "High-pressure Italian espresso system.", image: "https://images.unsplash.com/photo-1521305916504-4a1121188589", price: 47000, category: "Automatic", location: "Surat", country: "India" },
  { title: "Café Smart X", description: "AI-powered bean grinding technology.", image: "https://images.unsplash.com/photo-1507919909716-c8262e491cde", price: 55000, category: "Automatic", location: "Indore", country: "India" },
  { title: "SteamPro Latte", description: "Professional steam wand for creamy froth.", image: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e", price: 41000, category: "Semi-Automatic", location: "Lucknow", country: "India" },
  { title: "QuickShot Mini", description: "Fast brewing under 60 seconds.", image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2", price: 17000, category: "Manual", location: "Patna", country: "India" },
  { title: "Grande Café Station", description: "Multi-flavor vending coffee machine.", image: "https://images.unsplash.com/photo-1498804103079-a6351b050096", price: 90000, category: "Automatic", location: "Nagpur", country: "India" },
  { title: "Barista Pro 360", description: "360° rotating steam control system.", image: "https://images.unsplash.com/photo-1497935586041-939f8c3aaf4c", price: 43000, category: "Semi-Automatic", location: "Bhopal", country: "India" },
  { title: "CaféLite Office", description: "Energy-efficient commercial machine.", image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb", price: 62000, category: "Automatic", location: "Chandigarh", country: "India" },
  { title: "MorningBrew Basic", description: "Simple and reliable coffee maker.", image: "https://images.unsplash.com/photo-1510626176961-4b37d5f0b4b4", price: 12000, category: "Manual", location: "Varanasi", country: "India" },
  { title: "AromaMaster Pro", description: "Advanced aroma extraction system.", image: "https://images.unsplash.com/photo-1494314671902-399b18174975", price: 68000, category: "Automatic", location: "Goa", country: "India" },
  { title: "BrewElite Silver", description: "Premium stainless steel finish.", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e", price: 39000, category: "Semi-Automatic", location: "Mysore", country: "India" },
  { title: "CafeNova X2", description: "Dual brewing system technology.", image: "https://images.unsplash.com/photo-1498804103079-a6351b050096", price: 73000, category: "Automatic", location: "Coimbatore", country: "India" },
  { title: "EspressoEdge", description: "Compact high-pressure espresso unit.", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085", price: 25000, category: "Manual", location: "Amritsar", country: "India" },
  { title: "CafeTurbo Max", description: "Turbo heat-up technology.", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", price: 58000, category: "Automatic", location: "Raipur", country: "India" },
  { title: "FrothMaster 5", description: "Specialized milk frothing system.", image: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff", price: 36000, category: "Semi-Automatic", location: "Ranchi", country: "India" },
  { title: "BrewPoint Classic", description: "Traditional drip coffee maker.", image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31", price: 14000, category: "Manual", location: "Shimla", country: "India" },
  { title: "CaféUltra Touch", description: "Digital panel with temperature control.", image: "https://images.unsplash.com/photo-1507914372368-b2b085b925a1", price: 64000, category: "Automatic", location: "Dehradun", country: "India" },
  { title: "BeanCraft Pro", description: "Fresh bean grinder integration.", image: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e", price: 71000, category: "Automatic", location: "Guwahati", country: "India" },
  { title: "CaféWave Smart", description: "Smart timer and brew scheduler.", image: "https://images.unsplash.com/photo-1527169402691-feff5539e52c", price: 48000, category: "Semi-Automatic", location: "Thiruvananthapuram", country: "India" },
  { title: "JavaJet Compact", description: "Minimalist design for modern homes.", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348", price: 21000, category: "Manual", location: "Agra", country: "India" },
  { title: "CaféInfinity Pro", description: "Commercial-grade heavy duty machine.", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", price: 95000, category: "Automatic", location: "Vadodara", country: "India" },
];

module.exports = { data: sampleListings };