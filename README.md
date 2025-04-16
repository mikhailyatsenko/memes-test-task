# Memes Directory App

A modern web application for browsing and managing popular memes, built with Next.js and HeroUI.

## Features

- **Two View Modes**:
  - Table view with editable meme properties
  - Card-based grid view for visual browsing
- **Meme Management**:
  - Edit meme properties through modal dialogs
  - Persistent storage of meme data
  - Image preview support
- **Responsive Design**:
  - Works seamlessly on desktop and mobile devices
  - Optimized for Chrome on Windows, macOS, and Android

## Technical Stack

- **Frontend**: Next.js, React, HeroUI
- **Deployment**: Railway
- **Data Storage**: Cookies

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Meme Properties

Each meme in the directory contains the following properties:
- **ID**: Read-only integer identifier
- **Name**: Required string (3-100 characters)
- **Image**: Required JPG image URL
- **Likes**: Required integer (0-99, randomly generated)

## Development

The application is built using Next.js and follows modern React development practices. The UI is implemented using HeroUI components for a consistent and professional look.

## Deployment

This application is deployed on Railway. For deployment instructions, refer to the [Railway React Guide](https://docs.railway.com/guides/react).

## Browser Support

The application is tested and optimized for:
- Chrome (latest) on Windows
- Chrome (latest) on macOS
- Chrome (latest) on Android

## License

This project is open source and available under the MIT License.
