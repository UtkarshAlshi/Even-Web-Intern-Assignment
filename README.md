# Infinite Horizontal Scroll with Next.js

## Overview
This project implements an **infinite horizontal scrolling** feature using **Next.js**. Data is fetched from the [Rick and Morty API](https://rickandmortyapi.com/) and displayed as a sequence of character cards. When the user reaches the end of the list, more data is automatically loaded, ensuring a smooth infinite scrolling experience.

## Features
- 📜 **Infinite Horizontal Scroll**: Scroll horizontally to view cards, and once you reach the end, new cards are fetched automatically.
- 🔄 **Automatic API Calls**: Data is fetched dynamically using `fetch` when scrolling reaches the end.
- 📌 **Intersection Observer**: Efficiently detects when to fetch more data.
- 🚀 **Next.js & React Hooks**: Optimized for performance and smooth rendering.
- 🛠️ **Minimal UI**: Clean and responsive card-based layout.

## Tech Stack
- **Frontend**: Next.js, React, TypeScript
- **Data Fetching**: Native `fetch` API
- **State Management**: `useState` and `useEffect`
- **Infinite Scroll Handling**: Intersection Observer API
- **Styling**: Tailwind CSS

## Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-repo/infinite-scroll-nextjs.git
cd infinite-scroll-nextjs
```

### 2️⃣ Install Dependencies
```bash
npm install  # or yarn install
```

### 3️⃣ Run the Development Server
```bash
npm run dev  # or yarn dev
```

Now, open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure
```
/infinite-scroll-nextjs
│── /components
│   ├── Card.tsx        # UI component for displaying a character
│── /lib
│   ├── api.ts          # API fetching logic
│── /pages
│   ├── index.tsx       # Main page with infinite scroll logic
│── public              # Static assets
│── styles              # CSS styles (if any)
│── README.md           # Project documentation
│── package.json        # Dependencies and scripts
```

## API Details
The project fetches data from the **Rick and Morty API**:
- **Base URL**: `https://rickandmortyapi.com/api/character`
- **Pagination**: The API supports pagination using the `page` parameter.
- **Example API Call**:
  ```bash
  https://rickandmortyapi.com/api/character?page=1
  ```

## How It Works
1. **Initial Fetch**: On page load, the first set of characters is fetched from the API.
2. **Scrolling Detection**: Using the `IntersectionObserver`, the app detects when the user reaches the end of the scroll.
3. **Fetching More Data**: Once triggered, it fetches the next page of characters and appends them to the existing list.
4. **Repeat**: This continues indefinitely, ensuring an endless scrolling experience.

## Improvements & Future Enhancements
- 🔹 **Skeleton Loaders** for a better UX while fetching data.
- 🔹 **Error Handling & Retry Logic** for API failures.
- 🔹 **Lazy Loading Images** to optimize performance.
- 🔹 **Caching API Responses** to reduce redundant requests.

## Author
👨‍💻 **Utkarsh Alshi**  
📧 **utkarshalshi02@gmail.com**  
🔗 [GitHub] - https://github.com/UtkarshAlshi | 
[LinkedIn] - https://www.linkedin.com/in/utkarsh-alshi-70b0b6227/
---
Made with ❤️ using **Next.js** & **React**.

