const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'templates'));

// Helper function to read HTML files
const readHtmlFile = (filePath) => {
  return fs.readFileSync(path.join(__dirname, 'templates', filePath), 'utf8');
};

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'services.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'contact.html'));
});

// HTMX Service Detail Endpoints
app.get('/services/physical-therapy', (req, res) => {
  const html = readHtmlFile('service-physical-therapy.html');
  res.send(html);
});

app.get('/services/occupational-therapy', (req, res) => {
  const html = readHtmlFile('service-occupational-therapy.html');
  res.send(html);
});

app.get('/services/case-management', (req, res) => {
  const html = readHtmlFile('service-case-management.html');
  res.send(html);
});

app.get('/services/transportation', (req, res) => {
  const html = readHtmlFile('service-transportation.html');
  res.send(html);
});

app.get('/services/dental-case-management', (req, res) => {
  const html = readHtmlFile('service-dental-case-management.html');
  res.send(html);
});

// HTMX Testimonials Endpoint
app.get('/testimonials', (req, res) => {
  const html = readHtmlFile('testimonials.html');
  res.send(html);
});

// HTMX Testimonial Navigation
app.get('/testimonials/prev', (req, res) => {
  const html = readHtmlFile('testimonials.html');
  res.send(html);
});

app.get('/testimonials/next', (req, res) => {
  const html = readHtmlFile('testimonials.html');
  res.send(html);
});

// HTMX FAQ Endpoints
const faqs = [
  {
    id: 1,
    question: "What should I expect during my first physical therapy session?",
    answer: "During your first physical therapy session, our therapist will conduct a comprehensive evaluation of your condition, including a review of your medical history, assessment of your current symptoms, and examination of your strength, flexibility, range of motion, and functional abilities. Based on this evaluation, we'll discuss your goals and develop a personalized treatment plan. The session typically lasts about 60 minutes."
  },
  {
    id: 2,
    question: "How long will my therapy sessions last?",
    answer: "Therapy sessions typically last 45-60 minutes, depending on your specific needs and treatment plan. The total duration of your therapy program will vary based on your condition, progress, and goals. Some patients may achieve their goals in just a few weeks, while others with more complex conditions may benefit from several months of therapy. Your therapist will provide you with an estimated timeline during your initial evaluation."
  },
  {
    id: 3,
    question: "Do I need a referral to receive physical therapy?",
    answer: "In many states, you can access physical therapy services directly without a physician referral through what's called 'direct access.' However, some insurance plans may require a referral for coverage. We recommend checking with your insurance provider regarding their specific requirements. If you do need a referral, we're happy to help you navigate this process."
  },
  {
    id: 4,
    question: "What is the difference between physical therapy and occupational therapy?",
    answer: "While both physical therapy (PT) and occupational therapy (OT) aim to improve quality of life and function, they focus on different aspects of recovery and daily living. Physical therapy primarily addresses movement, strength, and physical function of the body as a whole. Occupational therapy focuses more on improving a person's ability to perform daily activities and specific tasks, often with adaptive techniques or equipment. Many patients benefit from both types of therapy working together as part of their rehabilitation plan."
  },
  {
    id: 5,
    question: "How does case management work with therapy services?",
    answer: "Case management complements therapy services by coordinating all aspects of your healthcare journey. Our case managers work closely with your physical and occupational therapists to ensure your treatment plan is integrated with other healthcare services you may be receiving. They help navigate insurance coverage, coordinate appointments, connect you with community resources, and advocate for your needs across all healthcare settings. This collaborative approach ensures comprehensive care that addresses all aspects of your health and well-being."
  }
];

app.get('/faq/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const faq = faqs.find(f => f.id === id);
  
  if (!faq) {
    return res.status(404).send('FAQ not found');
  }
  
  let template = readHtmlFile('faq-response.html');
  template = template.replace('{{id}}', faq.id);
  template = template.replace('{{question}}', faq.question);
  template = template.replace('{{answer}}', faq.answer);
  
  res.send(template);
});

app.get('/faq/:id/close', (req, res) => {
  const id = parseInt(req.params.id);
  const faq = faqs.find(f => f.id === id);
  
  if (!faq) {
    return res.status(404).send('FAQ not found');
  }
  
  res.send(`
    <div class="faq-item" hx-get="/faq/${id}" hx-target="this" hx-swap="outerHTML" hx-trigger="click">
      <div class="faq-question">
        <h3>${faq.question}</h3>
        <span class="faq-icon"><i class="fas fa-plus"></i></span>
      </div>
    </div>
  `);
});

// Contact form submission endpoint
app.post('/submit-contact', (req, res) => {
  const { name, email, phone, message, service } = req.body;
  
  // In a real application, you would process the form data here
  // For example, save to database, send email notification, etc.
  
  // Simulate a delay to show loading indicator
  setTimeout(() => {
    res.send(`
      <div id="form-response" class="alert alert-success">
        <p><strong>Thank you for contacting us, ${name}!</strong></p>
        <p>We have received your message and will get back to you shortly at ${email}.</p>
        ${service ? `<p>We look forward to discussing our ${service.replace('-', ' ')} services with you.</p>` : ''}
      </div>
    `);
  }, 1000);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 