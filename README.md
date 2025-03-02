# May Sue Case Management Website

A modern, responsive website for May Sue Case Management, a healthcare provider specializing in Physical Therapy, Occupational Therapy, and Case Management services.

## Features

- Responsive design that works on all devices
- Interactive elements using HTMX for enhanced user experience
- SEO-optimized content and structure
- Navy blue and bright yellow color scheme
- Comprehensive information about PT, OT, and Case Management services
- Contact form with HTMX validation and submission

## Technologies Used

- HTML5, CSS3, JavaScript
- [HTMX](https://htmx.org/) for interactive elements without heavy JavaScript
- Express.js for the backend server
- EJS for HTML templating
- Font Awesome for icons
- Google Fonts for typography

## Project Structure

```
may-sue-case-management/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── templates/
│   ├── index.html
│   ├── services.html
│   ├── contact.html
│   ├── service-physical-therapy.html
│   ├── service-occupational-therapy.html
│   └── service-case-management.html
├── server.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/may-sue-case-management.git
   cd may-sue-case-management
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## HTMX Implementation

This project uses HTMX to enhance the user experience without heavy JavaScript. Some key implementations include:

- Dynamic loading of service details when clicking on service cards
- Form submissions with validation and feedback
- FAQ accordion functionality
- Testimonial loading

## Deployment

To deploy the website to production:

1. Build the project:
   ```
   npm run build
   ```

2. Start the production server:
   ```
   npm start
   ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [HTMX](https://htmx.org/) for providing a simple way to access modern browser features
- [Font Awesome](https://fontawesome.com/) for the icons
- [Google Fonts](https://fonts.google.com/) for the typography 