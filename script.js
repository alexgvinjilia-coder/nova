/**
 * NEXUS AI - Modern Interactive Landing Page Logic
 * Features:
 * - Neural constellation particle canvas
 * - Mouse 3D tilt effects
 * - Live stats counter animation on viewport entry
 * - Multilingual translation system (GEO / ENG)
 * - Dark & Light theme switcher with local storage persistence
 * - Interactive feature category filtering & dynamic card glow tracking
 * - Interactive modal with simulated terminal benchmark runner
 * - Connect form validation with loading state & toast notifications
 * - One-click clipboard copy for contact details
 * - Active scroll-spy navigation & responsive mobile menu
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. Translations / Multilingual Dictionary (GE / EN)
  // =========================================================================
  const translations = {
    ka: {
      "nav.hero": "მთავარი",
      "nav.about": "ჩვენ შესახებ",
      "nav.features": "ფუნქციები",
      "nav.connect": "კონტაქტი",
      "nav.cta": "დაკავშირება",

      "hero.badge": "✨ ახალი თაობის ციფრული ინოვაცია",
      "hero.title_part1": "შექმენი მომავალი",
      "hero.title_part2": "ინოვაციური",
      "hero.title_part3": "გადაწყვეტებით",
      "hero.subtitle": "მაღალი წარმადობა, ულტრა-თანამედროვე უსაფრთხოება და ხელოვნური ინტელექტის უსაზღვრო შესაძლებლობები თქვენი ბიზნესის მასშტაბური ზრდისთვის.",
      "hero.cta_start": "დაიწყე ახლავე",
      "hero.cta_demo": "ინტერაქტიული დემო",
      "hero.trust_text": "5,000+ კმაყოფილი პარტნიორი მსოფლიოში",
      "hero.card_status": "სისტემა: ონლაინ რეჟიმში",
      "hero.metric_uptime": "Uptime გარანტია",
      "hero.metric_latency": "საშუალო დაყოვნება",
      "hero.chart_title": "აქტივობა რეალურ დროში",
      "hero.widget1_title": "AI ოპტიმიზაცია",
      "hero.widget1_sub": "ავტომატურად აქტიურია",
      "hero.widget2_title": "დაცვა: 100%",
      "hero.widget2_sub": "E2E დაშიფვრა",
      "hero.scroll_down": "ჩამოცურეთ",

      "about.tag": "// ჩვენს შესახებ",
      "about.title_lead": "ინოვაციური მიდგომა",
      "about.title_accent": "ციფრული მომავლის",
      "about.title_tail": "შესაქმნელად",
      "about.desc": "ჩვენ ვაერთიანებთ უახლეს ტექნოლოგიებს, შემოქმედებით აზროვნებასა და ინჟინრულ სიზუსტეს, რათა შევქმნათ შეუდარებელი ციფრული გამოცდილება.",
      "about.narrative_heading": "ჩვენ ვეხმარებით ამბიციურ გუნდებს გადალახონ საზღვრები.",
      "about.narrative_p1": "თანამედროვე ტექნოლოგიურ სამყაროში სიჩქარე და საიმედოობა გადამწყვეტია. NEXUS-ის პლატფორმა შექმნილია იმისთვის, რომ მოგაშოროთ ტექნიკური ბარიერები და მოგცეთ საშუალება კონცენტრირდეთ იმაზე, რაც ნამდვილად მნიშვნელოვანია — თქვენს პროდუქტზე.",
      "about.tab_mission": "ჩვენი მისია",
      "about.tab_tech": "ტექნოლოგია",
      "about.tab_values": "ღირებულებები",
      "about.mission_content": "ჩვენი მისიაა გავხადოთ ხელოვნური ინტელექტისა და ღრუბლოვანი ტექნოლოგიების ძალა ხელმისაწვდომი ნებისმიერი ზომის ბიზნესისთვის, გარდავქმნათ რთული პროცესები მარტივ, ელეგანტურ და ეფექტურ გადაწყვეტებად.",
      "about.mission_pt1": "100% გამჭვირვალობა და ინდივიდუალური მიდგომა",
      "about.mission_pt2": "ხელოვნური ინტელექტის პასუხისმგებლიანი გამოყენება",
      "about.mission_pt3": "მუდმივი ევოლუცია და ინოვაცია",
      "about.tech_content": "ჩვენ ვიყენებთ უახლეს არქიტექტურულ სტანდარტებს: მიკროსერვისებს, ნულოვანი შეყოვნების CDN ქსელს, E2E კრიპტოგრაფიულ დაცვას და მანქანური სწავლების ავტონომიურ მოდელებს.",
      "about.tech_pt1": "მოდერნიზებული API-პირველი არქიტექტურა",
      "about.tech_pt2": "სერვერლეს ინფრასტრუქტურა მყისიერი მასშტაბირებით",
      "about.tech_pt3": "ISO 27001 და SOC2 თავსებადი უსაფრთხოება",
      "about.values_content": "ხარისხი უკომპრომისოა. ჩვენ გვჯერა, რომ დიდი შედეგები მიიღწევა დეტალებისადმი უდიდესი ყურადღებით, პარტნიორული პატივისცემითა და უწყვეტი სწავლის კულტურით.",
      "about.values_pt1": "მომხმარებელზე ორიენტირებული ემპათია",
      "about.values_pt2": "სიჩქარე შედეგის ხარისხის დაუკარგავად",
      "about.values_pt3": "გუნდური ერთიანობა და ეთიკა",
      "about.stat1_label": "SLA წარმადობის გარანტია",
      "about.stat2_label": "წარმატებული პროექტი",
      "about.stat3_label": "უწყვეტი მხარდაჭერა",
      "about.stat4_label": "გლობალური მომხმარებელი",
      "about.quote": "„ჩვენი მიზანი არ არის მხოლოდ პროგრამული კოდის წერა — ჩვენ ვქმნით სისტემებს, რომლებიც ცვლიან ბიზნესის მომავალს.“",
      "about.author_title": "კვლევებისა და განვითარების დეპარტამენტი",

      "features.tag": "// შესაძლებლობები & ფუნქციები",
      "features.title_lead": "ყველაფერი რაც გჭირდებათ",
      "features.title_accent": "წარმატებისთვის",
      "features.desc": "თანამედროვე მოდულარული სისტემები, რომლებიც შექმნილია მაღალი დატვირთვის, უსაფრთხოებისა და მარტივი ინტეგრაციისთვის.",
      "features.filter_all": "ყველა",
      "features.filter_ai": "ხელოვნური ინტელექტი",
      "features.filter_sec": "უსაფრთხოება",
      "features.filter_ana": "ანალიტიკა & Cloud",

      "features.card1_pill": "AI Core",
      "features.card1_title": "ადაპტური AI ძრავა",
      "features.card1_desc": "ღრმა სწავლების ალგორითმები, რომლებიც სწავლობენ მომხმარებლის ქცევას და ავტომატურად ოპტიმიზირებენ სისტემის მუშაობას რეალურ დროში.",
      "features.card2_pill": "უსაფრთხოება",
      "features.card2_title": "Zero-Trust დაცვა",
      "features.card2_desc": "საბანკო დონის E2E 256-bit დაშიფვრა, მრავალფაქტორიანი ავთენტიფიკაცია და შეღწევის მყისიერი პრევენციის ინტელექტუალური სისტემა.",
      "features.card3_pill": "Edge CDN",
      "features.card3_title": "ულტრა-სწრაფი Edge Cloud",
      "features.card3_desc": "150+ ლოკაცია მსოფლიო მასშტაბით უზრუნველყოფს მონაცემების მყისიერ მიწოდებას 15 მილიწამზე ნაკლებ დროში.",
      "features.card4_pill": "ინსაიტები",
      "features.card4_title": "ცოცხალი ანალიტიკა",
      "features.card4_desc": "ინტერაქტიული დეშბორდები, პროგნოზირებადი მეტრიკები და მომხმარებელთა ნაკადის დეტალური ვიზუალიზაცია გადაწყვეტილებების მისაღებად.",
      "features.card5_pill": "Smart Bot",
      "features.card5_title": "სრული ავტომატიზაცია",
      "features.card5_desc": "რუტინული პროცესების მყისიერი ავტომატიზაცია უნიფიცირებული Webhook-ებისა და REST/GraphQL API ინტეგრაციების მეშვეობით.",
      "features.card6_pill": "Support 24/7",
      "features.card6_title": "უწყვეტი მონიტორინგი",
      "features.card6_desc": "ავტონომიური სისტემური აუდიტი, ინციდენტების ავტომატური აღმოფხვრა და ინჟინრების გამოყოფილი მხარდაჭერა 24/7 რეჟიმში.",
      "features.explore": "გაიგე მეტი",

      "connect.tag": "// დაგვიკავშირდით",
      "connect.title_lead": "დავიწყოთ თანამშრომლობა",
      "connect.title_accent": "დღესვე",
      "connect.desc": "გაქვთ საინტერესო პროექტი ან შეკითხვა? მოგვწერეთ და ჩვენი ექსპერტები 15 წუთში დაგიკავშირდებიან.",
      "connect.info_title": "საკონტაქტო ინფორმაცია",
      "connect.info_sub": "აირჩიეთ თქვენთვის მოსახერხებელი კომუნიკაციის არხი:",
      "connect.label_email": "ელექტრონული ფოსტა",
      "connect.label_phone": "ცხელი ხაზი",
      "connect.label_location": "ოფისის ლოკაცია",
      "connect.val_location": "თბილისი, ჭავჭავაძის გამზ. 37M, ტექნოპარკი",
      "connect.social_title": "გამოგვყევით სოციალურ ქსელებში:",
      "connect.support_status": "ოპერატორები მზადყოფნაში არიან",
      "connect.support_time": "საშუალო პასუხის დრო: < 15 წუთი",
      "connect.form_title": "გამოგვიგზავნეთ შეტყობინება",
      "connect.form_desc": "შეავსეთ მარტივი ფორმა და ჩვენი გუნდი დაუყოვნებლივ დაგიკავშირდებათ.",
      "connect.name_label": "სრული სახელი *",
      "connect.email_label": "ელ-ფოსტა *",
      "connect.service_label": "მომსახურების მიმართულება",
      "connect.opt_ai": "ხელოვნური ინტელექტი & ავტომატიზაცია",
      "connect.opt_cloud": "ღრუბლოვანი არქიტექტურა & DevOps",
      "connect.opt_sec": "უსაფრთხოების აუდიტი & Zero-Trust",
      "connect.opt_custom": "ინდივიდუალური პროგრამული უზრუნველყოფა",
      "connect.opt_other": "სხვა ტიპის კონსულტაცია",
      "connect.msg_label": "თქვენი შეტყობინება *",
      "connect.err_name": "გთხოვთ მიუთითოთ სახელი (მინიმუმ 2 სიმბოლო)",
      "connect.err_email": "გთხოვთ მიუთითოთ სწორი ელ-ფოსტის მისამართი",
      "connect.err_msg": "შეტყობინება უნდა შეიცავდეს მინიმუმ 10 სიმბოლოს",
      "connect.agree_text": "ვეთანხმები პერსონალურ მონაცემთა დამუშავების პირობებს",
      "connect.err_agree": "აუცილებელია პირობებზე დათანხმება",
      "connect.btn_send": "შეტყობინების გაგზავნა",
      "connect.nl_text": "გამოიწერეთ ტექნოლოგიური დაიჯესტი:",
      "connect.nl_btn": "გამოწერა",

      "modal.cta": "პლატფორმის გააქტიურება",

      "footer.tagline": "ინოვაციური ციფრული ტექნოლოგიები და ხელოვნური ინტელექტი მომავლის ბიზნესებისთვის.",
      "footer.status": "ყველა სისტემა ფუნქციონირებს გამართულად",
      "footer.col_nav": "ნავიგაცია",
      "footer.col_solutions": "გადაწყვეტები",
      "footer.col_connect": "კავშირი",
      "footer.sol_ai": "ხელოვნური ინტელექტი",
      "footer.sol_cloud": "ღრუბლოვანი ინფრასტრუქტურა",
      "footer.sol_sec": "კიბერუსაფრთხოება",
      "footer.sol_api": "API ინტეგრაციები",
      "footer.rights": "ყველა უფლება დაცულია.",
      "footer.privacy": "კონფიდენციალურობა",
      "footer.terms": "წესები & პირობები"
    },

    en: {
      "nav.hero": "Home",
      "nav.about": "About",
      "nav.features": "Features",
      "nav.connect": "Connect",
      "nav.cta": "Get In Touch",

      "hero.badge": "✨ Next-Generation Digital Innovation",
      "hero.title_part1": "Architect the Future with",
      "hero.title_part2": "Next-Gen AI",
      "hero.title_part3": "Solutions",
      "hero.subtitle": "Unmatched performance, bank-grade zero-trust security, and infinite AI capabilities designed to accelerate your enterprise growth.",
      "hero.cta_start": "Get Started",
      "hero.cta_demo": "Interactive Demo",
      "hero.trust_text": "Trusted by 5,000+ teams worldwide",
      "hero.card_status": "System: Operational 100%",
      "hero.metric_uptime": "SLA Guarantee",
      "hero.metric_latency": "Average Latency",
      "hero.chart_title": "Real-time Telemetry Flow",
      "hero.widget1_title": "AI Optimization",
      "hero.widget1_sub": "Auto-active",
      "hero.widget2_title": "Security: 100%",
      "hero.widget2_sub": "E2E Encrypted",
      "hero.scroll_down": "Scroll Down",

      "about.tag": "// About NEXUS",
      "about.title_lead": "An Engineering Approach to",
      "about.title_accent": "Tomorrow's Digital",
      "about.title_tail": "Ecosystem",
      "about.desc": "We fuse cutting-edge technologies, creative mastery, and engineering precision to deliver digital solutions that redefine industry standards.",
      "about.narrative_heading": "Empowering high-velocity teams to push boundaries.",
      "about.narrative_p1": "In modern tech, speed and reliability make or break businesses. NEXUS clears technical debt and friction, letting your team focus on what truly matters — creating world-class value for your users.",
      "about.tab_mission": "Our Mission",
      "about.tab_tech": "Technology",
      "about.tab_values": "Our Values",
      "about.mission_content": "To democratize intelligent edge computing and autonomous AI systems for forward-thinking organizations, turning complex problems into graceful, scalable software.",
      "about.mission_pt1": "100% transparency and personalized engineering partnership",
      "about.mission_pt2": "Ethical and safety-first artificial intelligence",
      "about.mission_pt3": "Relentless continuous evolution and innovation",
      "about.tech_content": "Built with modern cloud-native architectures: resilient microservices, zero-latency distributed CDN, E2E cryptographic integrity, and state-of-the-art neural transformers.",
      "about.tech_pt1": "Modern API-first decoupled architecture",
      "about.tech_pt2": "Elastic serverless computing with instant auto-scaling",
      "about.tech_pt3": "Enterprise ISO 27001 & SOC2 certified security compliance",
      "about.values_content": "Quality is non-negotiable. We believe exceptional breakthroughs happen when obsessive attention to detail meets intellectual curiosity and mutual respect.",
      "about.values_pt1": "Customer-centric obsession and empathy",
      "about.values_pt2": "Speed without compromising architectural elegance",
      "about.values_pt3": "Radical ownership and ethical leadership",
      "about.stat1_label": "SLA Uptime Guarantee",
      "about.stat2_label": "Projects Successfully Delivered",
      "about.stat3_label": "24/7 Dedicated Support",
      "about.stat4_label": "Global Active Users",
      "about.quote": "“Our purpose is not merely to write code — we build autonomous systems that fundamentally empower human ambition.”",
      "about.author_title": "Head of Research & Development",

      "features.tag": "// Capabilities & Features",
      "features.title_lead": "Everything You Need to",
      "features.title_accent": "Scale & Succeed",
      "features.desc": "Modular, ultra-scalable systems designed for mission-critical reliability, uncompromising security, and seamless developer experience.",
      "features.filter_all": "All",
      "features.filter_ai": "Artificial Intelligence",
      "features.filter_sec": "Security",
      "features.filter_ana": "Analytics & Cloud",

      "features.card1_pill": "AI Core",
      "features.card1_title": "Adaptive Neural Engine",
      "features.card1_desc": "Self-learning models that dynamically tune system performance, predict anomalies, and automate repetitive tasks in real time.",
      "features.card2_pill": "Security",
      "features.card2_title": "Zero-Trust Security",
      "features.card2_desc": "Military-grade 256-bit encryption, continuous adaptive authentication, and automated real-time intrusion countermeasures.",
      "features.card3_pill": "Edge CDN",
      "features.card3_title": "Sub-15ms Edge Cloud",
      "features.card3_desc": "Over 150 edge nodes distributed globally to ensure instantaneous data delivery and low-latency asset streaming.",
      "features.card4_pill": "Insights",
      "features.card4_title": "Real-Time Telemetry",
      "features.card4_desc": "Rich visual analytics, interactive telemetry funnels, and predictive forecasting to back every strategic decision.",
      "features.card5_pill": "Smart Bot",
      "features.card5_title": "Autonomous Workflows",
      "features.card5_desc": "Trigger-driven automated pipelines connecting unified webhooks, RESTful APIs, and GraphQL data graphs seamlessly.",
      "features.card6_pill": "Support 24/7",
      "features.card6_title": "Autonomous Monitoring",
      "features.card6_desc": "Round-the-clock automated health audits, self-healing failovers, and direct access to senior software architects.",
      "features.explore": "Learn More",

      "connect.tag": "// Connect with Us",
      "connect.title_lead": "Let's Build Something",
      "connect.title_accent": "Extraordinary",
      "connect.desc": "Have a bold idea or an enterprise initiative? Reach out and our solutions team will get in touch within 15 minutes.",
      "connect.info_title": "Direct Contact Channels",
      "connect.info_sub": "Select the communication channel most convenient for you:",
      "connect.label_email": "Direct Email",
      "connect.label_phone": "Hotline",
      "connect.label_location": "Office Headquarters",
      "connect.val_location": "37M Chavchavadze Ave, Silicon Valley Technopark, Tbilisi",
      "connect.social_title": "Follow our open-source journey:",
      "connect.support_status": "Engineers On-Call & Ready",
      "connect.support_time": "Average Response Time: < 15 mins",
      "connect.form_title": "Send Us a Message",
      "connect.form_desc": "Fill in the details below and we'll schedule a tailored discovery session.",
      "connect.name_label": "Full Name *",
      "connect.email_label": "Business Email *",
      "connect.service_label": "Project Scope / Interest",
      "connect.opt_ai": "AI Integration & Machine Learning",
      "connect.opt_cloud": "Cloud Infrastructure & DevOps",
      "connect.opt_sec": "Zero-Trust Security & Audit",
      "connect.opt_custom": "Custom Software Engineering",
      "connect.opt_other": "General Strategic Inquiry",
      "connect.msg_label": "Your Message *",
      "connect.err_name": "Please enter your name (at least 2 characters)",
      "connect.err_email": "Please provide a valid email address",
      "connect.err_msg": "Message must contain at least 10 characters",
      "connect.agree_text": "I agree to the privacy policy and data processing terms",
      "connect.err_agree": "You must accept the terms before submitting",
      "connect.btn_send": "Send Message",
      "connect.nl_text": "Subscribe to our Tech Insights Newsletter:",
      "connect.nl_btn": "Subscribe",

      "modal.cta": "Deploy Platform",

      "footer.tagline": "Next-generation software architectures and AI infrastructure for modern enterprises.",
      "footer.status": "All systems operating normally",
      "footer.col_nav": "Navigation",
      "footer.col_solutions": "Solutions",
      "footer.col_connect": "Connect",
      "footer.sol_ai": "Artificial Intelligence",
      "footer.sol_cloud": "Cloud Architecture",
      "footer.sol_sec": "Cybersecurity",
      "footer.sol_api": "Unified API Engine",
      "footer.rights": "All rights reserved.",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Service"
    }
  };

  let currentLang = localStorage.getItem('nexus_lang') || 'ka';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('nexus_lang', lang);
    document.documentElement.lang = lang;

    // Update Language Toggle Button Labels
    const langIndicator = document.getElementById('lang-indicator');
    const langLabel = document.getElementById('lang-label');
    if (langIndicator && langLabel) {
      if (lang === 'ka') {
        langIndicator.textContent = 'GE';
        langLabel.textContent = 'ქარ';
      } else {
        langIndicator.textContent = 'EN';
        langLabel.textContent = 'Eng';
      }
    }

    // Update all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update inputs/placeholders
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');
    if (nameInput) {
      nameInput.placeholder = lang === 'ka' ? 'გიორგი ბერიძე' : 'Alex Morgan';
    }
    if (emailInput) {
      emailInput.placeholder = lang === 'ka' ? 'giorgi@company.ge' : 'alex@company.com';
    }
    if (messageInput) {
      messageInput.placeholder = lang === 'ka' 
        ? 'მოგვიყევით თქვენი პროექტის ან მოთხოვნის შესახებ...' 
        : 'Tell us about your project, timeline and goals...';
    }
  }

  // Language button event listener
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const newLang = currentLang === 'ka' ? 'en' : 'ka';
      applyLanguage(newLang);
      showToast(newLang === 'ka' ? 'ენა შეიცვალა ქართულზე' : 'Language switched to English', 'success');
    });
  }

  // =========================================================================
  // 2. Dark / Light Theme Switcher
  // =========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('nexus_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('nexus_theme', nextTheme);
      showToast(
        nextTheme === 'dark' 
          ? (currentLang === 'ka' ? 'მუქი თემა გააქტიურებულია' : 'Dark mode activated') 
          : (currentLang === 'ka' ? 'ღია თემა გააქტიურებულია' : 'Light mode activated'),
        'info'
      );
    });
  }


  // =========================================================================
  // 3. Ambient Canvas Interactive Particle Constellation
  // =========================================================================
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const particleCount = 45;
    let mouse = { x: -1000, y: -1000, radius: 140 };

    function resizeCanvas() {
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.size = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? 'rgba(0, 242, 254, ' : 'rgba(147, 51, 234, ';
        this.alpha = Math.random() * 0.6 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Interaction with mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= Math.cos(angle) * force * 2;
          this.y -= Math.sin(angle) * force * 2;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.alpha + ')';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00f2fe';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connectParticles();
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }


  // =========================================================================
  // 4. Hero 3D Tilt Card Simulation
  // =========================================================================
  const tiltContainer = document.getElementById('hero-tilt-card');
  const hologramCard = tiltContainer ? tiltContainer.querySelector('.hologram-card') : null;

  if (tiltContainer && hologramCard) {
    tiltContainer.addEventListener('mousemove', (e) => {
      const rect = tiltContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      hologramCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    tiltContainer.addEventListener('mouseleave', () => {
      hologramCard.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
  }


  // =========================================================================
  // 5. About Section Tabs
  // =========================================================================
  const tabButtons = document.querySelectorAll('.about-tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const activePanel = document.getElementById(`tab-${targetTab}`);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });


  // =========================================================================
  // 6. Interactive Stats Counter with IntersectionObserver
  // =========================================================================
  const countUpElements = document.querySelectorAll('.count-up');
  let countersStarted = false;

  function runCounters() {
    if (countersStarted) return;
    countersStarted = true;

    countUpElements.forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1600;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeOut * target);

        el.textContent = currentVal + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = target + suffix;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounters();
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counterObserver.observe(aboutSection);
  }


  // =========================================================================
  // 7. Features Category Filter & Card Mouse Glowing Track
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const featureCards = document.querySelectorAll('.feature-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      featureCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 30);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Dynamic glow coordinates on feature cards
  featureCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });


  // =========================================================================
  // 8. Modal & Terminal Benchmark Simulation
  // =========================================================================
  const demoModal = document.getElementById('demo-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const heroDemoBtn = document.getElementById('hero-demo-btn');
  const modalCtaBtn = document.getElementById('modal-cta-btn');
  const termScreen = document.getElementById('term-screen');
  const termRunBtn = document.getElementById('term-run-btn');
  const termClearBtn = document.getElementById('term-clear-btn');
  const termDynamicText = document.getElementById('term-dynamic-text');

  function openModal(titleText) {
    if (!demoModal) return;
    if (titleText) {
      const modalTitle = document.getElementById('modal-title');
      if (modalTitle) modalTitle.textContent = titleText;
    }
    demoModal.classList.add('open');
    demoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!demoModal) return;
    demoModal.classList.remove('open');
    demoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (heroDemoBtn) {
    heroDemoBtn.addEventListener('click', () => {
      openModal(currentLang === 'ka' ? 'NEXUS ინტერაქტიული ტერმინალი' : 'NEXUS Interactive Terminal');
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && demoModal && demoModal.classList.contains('open')) {
      closeModal();
    }
  });

  if (modalCtaBtn) {
    modalCtaBtn.addEventListener('click', () => {
      closeModal();
      const connectSection = document.getElementById('connect');
      if (connectSection) {
        connectSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Feature Card "Learn More" links open modal with custom feature details
  const featureLinks = document.querySelectorAll('.feature-card .feature-link');
  featureLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = link.closest('.feature-card');
      const title = card ? card.querySelector('.feature-title').textContent : 'NEXUS Feature';
      openModal(title);
    });
  });

  // Simulated Terminal logic
  if (termRunBtn && termScreen) {
    termRunBtn.addEventListener('click', () => {
      termRunBtn.disabled = true;
      if (termDynamicText) {
        termDynamicText.textContent = currentLang === 'ka' ? 'ტესტირება დაწყებულია...' : 'Running performance test...';
      }

      const logs = [
        `[BENCHMARK] Pinging 150 edge nodes... [OK] avg 9.8ms`,
        `[BENCHMARK] Simulating 100,000 req/sec load... [OK] 0% packet loss`,
        `[BENCHMARK] Zero-trust TLS 1.3 handshake verification... [SECURE]`,
        `[BENCHMARK] Neural model inference speed: 3.4ms`,
        `[SUCCESS] System benchmark score: 99.98 / 100 🚀`
      ];

      logs.forEach((log, index) => {
        setTimeout(() => {
          const p = document.createElement('p');
          p.className = 'term-line text-cyan';
          p.textContent = log;
          termScreen.insertBefore(p, termScreen.lastElementChild);
          termScreen.scrollTop = termScreen.scrollHeight;

          if (index === logs.length - 1) {
            termRunBtn.disabled = false;
            if (termDynamicText) {
              termDynamicText.textContent = currentLang === 'ka' ? 'ტესტირება წარმატებით დასრულდა!' : 'Benchmark completed successfully!';
            }
          }
        }, (index + 1) * 350);
      });
    });
  }

  if (termClearBtn && termScreen) {
    termClearBtn.addEventListener('click', () => {
      termScreen.innerHTML = `
        <p class="term-line"><span class="prompt">$</span> nexus init --env production</p>
        <p class="term-line text-cyan">[✓] Core neural engine initialized (4.2ms)</p>
        <p class="term-line text-purple">[✓] E2E zero-trust tunneling established</p>
        <p class="term-line text-emerald">[✓] 150+ edge nodes synched. Latency: 11ms</p>
        <p class="term-line text-pink">[✓] AI autonomous workflows active and ready</p>
        <p class="term-line blink-line"><span class="prompt">></span> <span id="term-dynamic-text">${currentLang === 'ka' ? 'მზადაა ბრძანებისთვის...' : 'Waiting for custom payload...'}</span><span class="cursor-blink">_</span></p>
      `;
    });
  }


  // =========================================================================
  // 9. Toast Notification System
  // =========================================================================
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, type = 'info') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '⚠️';

    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span class="toast-text">${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(50px)';
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 350);
    }, 3800);
  }


  // =========================================================================
  // 10. Copy To Clipboard (Email & Phone)
  // =========================================================================
  const copyEmailCard = document.getElementById('copy-email-card');
  const copyPhoneCard = document.getElementById('copy-phone-card');

  function copyTextToClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg, 'success');
      }).catch(() => {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast(successMsg, 'success');
  }

  if (copyEmailCard) {
    copyEmailCard.addEventListener('click', () => {
      const email = document.getElementById('val-email')?.textContent || 'contact@nexus-ai.ge';
      copyTextToClipboard(
        email, 
        currentLang === 'ka' ? `ელ-ფოსტა დაკოპირდა: ${email}` : `Copied email: ${email}`
      );
    });
  }

  if (copyPhoneCard) {
    copyPhoneCard.addEventListener('click', () => {
      const phone = document.getElementById('val-phone')?.textContent || '+995 (32) 289-40-50';
      copyTextToClipboard(
        phone, 
        currentLang === 'ka' ? `ტელეფონი დაკოპირდა: ${phone}` : `Copied phone: ${phone}`
      );
    });
  }


  // =========================================================================
  // 11. Connect Form Validation & Submission
  // =========================================================================
  const contactForm = document.getElementById('contact-form');
  const messageInput = document.getElementById('contact-message');
  const charCounter = document.getElementById('char-counter');
  const submitBtn = document.getElementById('contact-submit-btn');

  // Character counter
  if (messageInput && charCounter) {
    messageInput.addEventListener('input', () => {
      const len = messageInput.value.length;
      charCounter.textContent = `${len} / 500`;
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameField = document.getElementById('contact-name');
      const emailField = document.getElementById('contact-email');
      const msgField = document.getElementById('contact-message');
      const agreeField = document.getElementById('contact-agree');

      const groupName = document.getElementById('group-name');
      const groupEmail = document.getElementById('group-email');
      const groupMsg = document.getElementById('group-message');
      const groupAgree = document.getElementById('group-agree');

      let isValid = true;

      // Validate Name
      if (!nameField.value.trim() || nameField.value.trim().length < 2) {
        groupName.classList.add('has-error');
        isValid = false;
      } else {
        groupName.classList.remove('has-error');
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailField.value.trim() || !emailRegex.test(emailField.value.trim())) {
        groupEmail.classList.add('has-error');
        isValid = false;
      } else {
        groupEmail.classList.remove('has-error');
      }

      // Validate Message
      if (!msgField.value.trim() || msgField.value.trim().length < 10) {
        groupMsg.classList.add('has-error');
        isValid = false;
      } else {
        groupMsg.classList.remove('has-error');
      }

      // Validate Agree
      if (!agreeField.checked) {
        groupAgree.classList.add('has-error');
        isValid = false;
      } else {
        groupAgree.classList.remove('has-error');
      }

      if (!isValid) {
        showToast(
          currentLang === 'ka' 
            ? 'გთხოვთ შეავსოთ ყველა აუცილებელი ველი სწორად.' 
            : 'Please fill in all required fields accurately.', 
          'error'
        );
        return;
      }

      // Simulated Loading State
      if (submitBtn) {
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.classList.remove('loading');
          submitBtn.disabled = false;
        }

        contactForm.reset();
        if (charCounter) charCounter.textContent = '0 / 500';

        showToast(
          currentLang === 'ka' 
            ? 'შეტყობინება წარმატებით გაიგზავნა! ჩვენ მალე დაგიკავშირდებით.' 
            : 'Message sent successfully! Our team will contact you shortly.', 
          'success'
        );
      }, 1200);
    });
  }

  // Newsletter Subscription
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('nl-email');
      if (emailInput && emailInput.value.trim()) {
        showToast(
          currentLang === 'ka' 
            ? 'მადლობა! თქვენ წარმატებით გამოიწერეთ დაიჯესტი.' 
            : 'Thank you! You have successfully subscribed.', 
          'success'
        );
        newsletterForm.reset();
      }
    });
  }


  // =========================================================================
  // 12. Navbar Scroll Spy & Sticky Behavior & Mobile Menu
  // =========================================================================
  const header = document.getElementById('header');
  const backToTopBtn = document.getElementById('back-to-top');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Sticky header style
    if (scrollPos > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollPos > 320) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Scroll spy: Active nav link highlighting
    sections.forEach(sec => {
      const top = sec.offsetTop - 140;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile menu hamburger toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu on nav link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }


  // =========================================================================
  // 13. Scroll Reveal Animation Observer
  // =========================================================================
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));


  // =========================================================================
  // 14. Year Auto-Update
  // =========================================================================
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Initialize with saved or default language
  applyLanguage(currentLang);
});
