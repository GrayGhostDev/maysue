# LovedOneHomeCare Website

A modern, responsive website for LovedOneHomeCare, a home health care establishment specializing in Activities of Daily Living (ADL) assistance and accident recovery care.

## Features

- Responsive design that works on all devices
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

## Project Structure

```
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

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact [your contact information]. 