<<<<<<< HEAD
# LovedOneHomeCare Website

A modern, responsive website for LovedOneHomeCare, a home health care establishment specializing in Activities of Daily Living (ADL) assistance and accident recovery care.
=======
# May Sue Case Management Website

A modern, responsive website for May Sue Case Management, a healthcare provider specializing in Physical Therapy, Occupational Therapy, and Case Management services.
>>>>>>> 422b47b0f5b12eb8b1ddd162594f20c8297cfed5

## Features

- Responsive design that works on all devices
<<<<<<< HEAD
- HTMX integration for dynamic content loading without heavy JavaScript
- Detailed service information sections
- Payment options including Insurance, Medicare, and Medicaid
- Contact form with HTMX-powered submission
- Testimonials slider
- Mobile-friendly navigation

## Technologies Used

- HTML5
- CSS3 with custom variables and responsive design
- HTMX for interactive elements
- JavaScript for enhanced functionality
- Font Awesome for icons

## Color Scheme

The website uses a color scheme of:
- Primary colors: Green and Navy Blue
- Highlight colors: Red and Yellow
=======
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
>>>>>>> 422b47b0f5b12eb8b1ddd162594f20c8297cfed5

## Project Structure

```
<<<<<<< HEAD
LovedOneHomeCare/
├── index.html              # Main HTML file
├── static/                 # Static assets
│   ├── css/                # CSS stylesheets
│   │   └── styles.css      # Main stylesheet
│   ├── js/                 # JavaScript files
│   │   └── main.js         # Main JavaScript file
│   └── images/             # Image assets
└── templates/              # HTMX template fragments
    ├── adl-details.html            # ADL services details
    ├── accident-details.html       # Accident recovery details
    ├── health-details.html         # Health services details
    ├── companion-details.html      # Companion care details
    ├── insurance-info.html         # Insurance information
    ├── medicare-info.html          # Medicare information
    ├── medicaid-info.html          # Medicaid information
    ├── private-pay-info.html       # Private pay information
    ├── testimonials.html           # Client testimonials
    └── submit-contact.html         # Contact form submission response
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/lovedonehomecare.git
   ```

2. Navigate to the project directory:
   ```
   cd lovedonehomecare
   ```

3. Open the website:
   - For local development, you can use any local server solution:
     - Python: `python -m http.server`
     - Node.js: Install `http-server` and run it
     - VS Code: Use the Live Server extension
   - Open `index.html` in your browser

## Deployment

The website can be deployed to any standard web hosting service:

1. Upload all files maintaining the directory structure
2. Ensure the server supports serving HTML, CSS, and JavaScript files
3. No special server-side requirements as this is a static website with HTMX

## Customization

- Update the content in the HTML files to match your specific services and information
- Replace placeholder images in the `static/images/` directory with your own
- Adjust the color scheme in `static/css/styles.css` by modifying the CSS variables in the `:root` selector

## Browser Compatibility

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)
=======
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
>>>>>>> 422b47b0f5b12eb8b1ddd162594f20c8297cfed5

## License

This project is licensed under the MIT License - see the LICENSE file for details.

<<<<<<< HEAD
## Contact

For questions or support, please contact [your contact information]. 
=======
## Acknowledgments

- [HTMX](https://htmx.org/) for providing a simple way to access modern browser features
- [Font Awesome](https://fontawesome.com/) for the icons
- [Google Fonts](https://fonts.google.com/) for the typography 
>>>>>>> 422b47b0f5b12eb8b1ddd162594f20c8297cfed5
