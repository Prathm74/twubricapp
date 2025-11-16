## twubricapp — React Application

A modern, fully responsive React application to display and manage Twubric follower data with sorting, date filters, animations, skeleton loading, and a clean UI using glassmorphism.

## Live Demo

https://twubricapp-delta.vercel.app/

## Features

1. User Cards with Twubric Details
Each card displays the user’s:

Profile Image
Full Name & Username
Twubric Total Score
Friends
Influence
Chirpiness
Join Date

2. Sorting (ASC/DESC Toggle)
Sort followers by:

Score
Friends
Influence
Chirpiness
-Sorting button shows up/down arrow
-“Clear Sort” button appears only when active

3. Date Filtering

Filter users using:

Start Date

End Date
(Using React Datepicker)

4. Remove User

Smooth animation while removing a card.

5. Loading Skeleton

Beautiful skeleton loaders displayed before actual content loads.

6. Empty State UI

When no users match filters →
→ Shows friendly message
→ “Reset Filters” button

7. Full Responsive Layout

Grid adjusts to:

Desktop (4 cards per row)

Tablet (2–3 cards)

Mobile (1–2 cards)

8. Glassmorphism UI

Modern premium look:

Blur background

Soft shadows

Transparent effect

## Project Structure

src/
│
├── components/
│   ├── TwubricCard/
│   │   ├── TwubricCard.js
│   │   └── TwubricCard.css
│   ├── SkeletonCard/
│   │   ├── SkeletonCard.js
│   │   └── SkeletonCard.css
│   ├── EmptyState/
│   │   ├── EmptyState.js
│   │   └── EmptyState.css
│
├── pages/
│   └── Home/
│       ├── Home.js
│       └── Home.css
│
├── data/
│   └── twubric.json
│
├── styles/
│   └── global.css
│
└── App.js

## Tech Stack

Frontend

-React.js (18+)

-React Datepicker

-CSS3 Modules

-Flexbox + Grid

-Glassmorphism UI

Build Tools

-Vite

-Node.js

Hosting

-Vercel

## Installation & Setup

1. Clone the repo

git clone https://github.com/Prathm74/twubricapp

2. Install dependencies

npm install

3. Run app

npm run dev

## Author

Prathmesh Kadam
7420858349
prathmeshkadam280@gmail.com
