
// Smooth scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Mobile menu functionality
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', function () {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(255, 255, 255, 0.95)';
        navLinks.style.flexDirection = 'column';
        navLinks.style.padding = '1rem';
        navLinks.style.backdropFilter = 'blur(15px)';
        navLinks.style.zIndex = '999';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// Avatar card interactions with detailed information
const avatarInfo = {
    'Lord Rama': {
        story: 'The seventh avatar of Vishnu, born as a prince in Ayodhya. His life exemplifies the ideal man, son, brother, husband, and king. The Ramayana chronicles his 14-year exile, the abduction of his wife Sita by Ravana, and his eventual victory over evil.',
        teachings: 'Teaches us about dharma, duty, righteousness, and the importance of keeping one\'s word even in difficult circumstances.',
        symbols: 'Bow and arrow, representing focus and determination in pursuing righteousness.'
    },
    'Lord Krishna': {
        story: 'The eighth avatar of Vishnu, born in Mathura but raised in Vrindavan. Known for his childhood leelas (divine plays), his role in the Mahabharata war, and giving the Bhagavad Gita to Arjuna.',
        teachings: 'The Bhagavad Gita teaches karma yoga (action without attachment), bhakti yoga (devotion), and jnana yoga (knowledge). Shows us how to live a spiritual life while fulfilling worldly duties.',
        symbols: 'Flute (divine music that attracts all souls), peacock feather (beauty and grace), cow (compassion and nurturing).'
    },
    'Lord Shiva': {
        story: 'The destroyer aspect of the divine trinity (Trimurti). Lives on Mount Kailash with Goddess Parvati. Known as Nataraja (cosmic dancer) whose dance maintains the rhythm of the universe.',
        teachings: 'Represents transformation, meditation, and the power to destroy negative qualities. Shows us that destruction is necessary for renewal and growth.',
        symbols: 'Trident (three gunas), third eye (inner wisdom), serpent (control over fear), drum (cosmic sound).'
    },
    'Lord Vishnu': {
        story: 'The preserver of the universe, incarnates whenever dharma is threatened. Known for his ten avatars (Dashavatara) that restore cosmic order.',
        teachings: 'Upholds dharma, compassion, and protection of the good.',
        symbols: 'Conch, discus, mace, and lotus.'
    },
    'Goddess Lakshmi': {
        story: 'The goddess of wealth, fortune, prosperity, beauty, and abundance. Brings material and spiritual prosperity.',
        teachings: 'Teaches us about generosity, gratitude, and the importance of both material and spiritual wealth.',
        symbols: 'Lotus, gold coins, elephants.'
    },
    'Goddess Saraswati': {
        story: 'The goddess of knowledge, music, arts, wisdom, and learning. Patron of students and scholars.',
        teachings: 'Represents the pursuit of knowledge, creativity, and wisdom.',
        symbols: 'Veena, book, swan, white lotus.'
    },
    'Lord Hanuman': {
        story: 'Symbol of courage, strength, and devotion. The ideal devotee who serves with complete dedication.',
        teachings: 'Teaches humility, loyalty, and selfless service.',
        symbols: 'Mace, mountain, flying pose.'
    },
    'Lord Ganesha': {
        story: 'The elephant-headed deity who removes obstacles and grants success. Patron of arts, sciences, and new beginnings.',
        teachings: 'Represents wisdom, new beginnings, and overcoming obstacles.',
        symbols: 'Elephant head, modak, mouse.'
    },
    'Goddess Durga': {
        story: 'The fierce mother goddess who protects devotees from evil. Represents the divine feminine power (Shakti).',
        teachings: 'Teaches courage, protection, and the triumph of good over evil.',
        symbols: 'Lion/tiger, trident, sword, lotus.'
    }
};
  
//the const message is taking romm direct html need to fix it
document.querySelectorAll('.avatar-card').forEach(card => {
    card.addEventListener('click', function () {
        const name = this.querySelector('.avatar-name').textContent.trim();
        console.log("Clicked name:", JSON.stringify(name));   // debug
        console.log("Keys in avatarInfo:", Object.keys(avatarInfo)); // debug
        const info = avatarInfo[name];
        console.log("Matched info:", info); // debug
        if (info) {
            const message = `
                <strong>📖 Story:</strong> ${info.story}<br><br>
                <strong>🎓 Teachings:</strong> ${info.teachings}<br><br>
                <strong>🔮 Symbols:</strong> ${info.symbols}
            `;
            showModal(name, message);

        } else {
            const desc = this.querySelector('.avatar-desc').textContent;
            showModal(name, `${desc}\n\n🙏 Click to learn more about this divine deity!`);
        }
    });
});

// Character card interactions with epic stories
const characterStories = {
    'Rama': 'Prince of Ayodhya, exiled for 14 years to honor his father\'s promise. Represents the ideal man who never deviates from dharma despite facing numerous challenges.',
    'Sita': 'Princess of Mithila, married to Rama through the bow-breaking contest. Represents purity, devotion, and strength. Her abduction by Ravana leads to the great war.',
    'Krishna': 'The divine charioteer of Arjuna in the Kurukshetra war. Gives the profound teachings of the Bhagavad Gita when Arjuna becomes confused about his duty.',
    'Arjuna': 'The greatest archer among the Pandavas, Krishna\'s devotee and student. His moral dilemma on the battlefield becomes the setting for Krishna\'s divine teachings.',
    'Hanuman': 'The devoted follower of Rama with incredible strength and the ability to fly. Finds Sita in Lanka and plays a crucial role in her rescue.',
    'Ravana': 'The ten-headed demon king of Lanka, learned in Vedas but consumed by ego and desire. His defeat represents the victory of good over evil.'
};

document.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('click', function () {
        const name = this.querySelector('.character-name').textContent;
        const story = characterStories[name] || `${name} is an important character in our sacred epics, embodying various aspects of human nature and divine principles.`;
        showModal(name, `${story}\n\n📚 Part of the eternal wisdom of our sacred texts!`);
    });
});

// Vishnu Avatar interactions
const avatarStories = {
    'Matsya': 'When the world was destroyed by a great flood, Vishnu appeared as a fish to save humanity, animals, and the Vedas. He guided the boat of Manu (the first man) to safety.',
    'Kurma': 'To obtain the nectar of immortality, gods and demons churned the ocean using Mount Mandara. Vishnu became a turtle to support the mountain on his back.',
    'Varaha': 'When the demon Hiranyaksha dragged the Earth to the bottom of the ocean, Vishnu became a boar and lifted the Earth back to its place after defeating the demon.',
    'Narasimha': 'To protect his devotee Prahlada from his evil father Hiranyakashipu, Vishnu appeared as half-man, half-lion to kill the demon king.',
    'Kalki': 'The future avatar who will appear at the end of Kali Yuga riding a white horse, carrying a sword to destroy evil and restore dharma.'
};

document.querySelectorAll('.vishnu-avatar-card').forEach(card => {
    card.addEventListener('click', function () {
        const name = this.querySelector('h3').textContent;
        const story = avatarStories[name] || `${name} is one of the ten avatars of Lord Vishnu, appearing whenever dharma needs to be restored.`;
        showModal(name + " Avatar", `${story}\n\n🙏 Each avatar teaches us about divine intervention and protection!`);
    });
});

// Culture item interactions
document.querySelectorAll('.culture-item').forEach(item => {
    item.addEventListener('click', function () {
        const title = this.querySelector('h3').textContent;
        const culturalInfo = {
            'Sacred Festivals': 'Hindu festivals celebrate the triumph of good over evil, seasonal changes, and divine incarnations. Each festival has deep spiritual significance and brings communities together in joy and devotion.',
            'Traditional Clothing': 'Hindu clothing reflects our cultural values of modesty, beauty, and spiritual symbolism. Each garment has significance - sarees represent grace, dhotis symbolize simplicity and purity.',
            'Sacred Foods': 'Sattvic (pure) foods nourish both body and soul. Prasadam (blessed food) is first offered to deities and then shared, making every meal a spiritual practice.',
            'Sacred Temples': 'Temples are not just places of worship but centers of learning, culture, and community service. Each temple architecture follows Vastu Shastra and creates a divine atmosphere.',
            'Music & Dance': 'Classical arts are forms of devotion and spiritual expression. Ragas have specific emotional effects, and dances tell stories of gods and goddesses.',
            'Yoga & Meditation': 'Ancient practices for achieving union between individual consciousness and universal consciousness. The eight-limbed path of yoga leads to spiritual liberation.'
        };

        const info = culturalInfo[title] || `${title} is an important aspect of our rich cultural heritage.`;
        showModal(title, `${info}\n\n🕉️ Explore the depth of our eternal traditions!`);
    });
});

// Gita verse interactions
document.querySelectorAll('.verse-card').forEach(card => {
  card.addEventListener('click', function() {
    const verse = this.querySelector('.verse-text').textContent;
    const meaning = this.querySelector('.verse-meaning').textContent;
    showModal("Bhagavad Gita Verse", `${verse}\n\n${meaning}`);
  });
});


// Durga form interactions
document.querySelectorAll('.durga-form').forEach(form => {
    form.addEventListener('click', function () {
        const name = this.querySelector('h3').textContent;
        const durgaInfo = {
            'Shailputri': 'Day 1 of Navratri: The daughter of the mountain king Himavan. She represents the power of nature and the beginning of spiritual journey. Color: Red',
            'Brahmacharini': 'Day 2 of Navratri: The form doing severe penance. She teaches us dedication, single-minded focus, and spiritual discipline. Color: Blue',
            'Chandraghanta': 'Day 3 of Navratri: Named after the crescent moon on her forehead. She protects devotees from evil forces and brings peace. Color: Yellow',
            'Kushmanda': 'Day 4 of Navratri: The creator of the universe with her divine smile. She brings light, energy, and cosmic awareness. Color: Green',
            'Skandamata': 'Day 5 of Navratri: Mother of Lord Skanda (Kartikeya). Represents maternal love, care, and protection. Color: Grey',
            'Katyayani': 'Day 6 of Navratri: The warrior form who killed Mahishasura. She destroys evil and grants courage to fight negativity. Color: Orange',
            'Kalaratri': 'Day 7 of Navratri: The fierce dark form who destroys ignorance. She removes fear and brings enlightenment. Color: White',
            'Mahagauri': 'Day 8 of Navratri: The pure, peaceful form. She grants peace, compassion, and spiritual purification. Color: Pink',
            'Siddhidatri': 'Day 9 of Navratri: The bestower of supernatural powers and fulfiller of desires. She grants both material and spiritual achievements. Color: Sky Blue'
        };

        const info = durgaInfo[name] || `${name} is one of the nine sacred forms of Goddess Durga worshipped during Navratri.`;
        showModal("Maa " + name, `${info}\n\n🔱 Jai Mata Di! 🔱`);
    });
});

// Add parallax effect to hero background
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Form submission with cultural blessing
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const blessings = [
        'May Lord Ganesha remove all obstacles from your path! 🐘',
        'May Goddess Saraswati bless you with knowledge and wisdom! 🦢',
        'May Lord Krishna guide you with divine wisdom! 🦚',
        'May Maa Durga protect you with her divine strength! 🔱',
        'May Lord Shiva bless you with inner peace and transformation! 🕉️'
    ];

    const randomBlessing = blessings[Math.floor(Math.random() * blessings.length)];

    showModal("Namaste " + name + " 🙏", 
  `Thank you for your interest in Sanatan Dharma. Your message has been received with gratitude.\n\n${randomBlessing}\n\nWe will connect with you soon to share more about our eternal traditions and cultural heritage.\n\n"सर्वे भवन्तु सुखिनः" - May all beings be happy!`
);


    this.reset();
});

// Add dynamic background color change on scroll for better navigation visibility
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    const nav = document.querySelector('nav');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            const computedStyle = window.getComputedStyle(section);
            const bgColor = computedStyle.backgroundColor;

            // Adjust nav style based on section background
            if (bgColor.includes('26, 77, 143') || bgColor.includes('128, 0, 0')) {
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
                nav.style.backdropFilter = 'blur(15px)';
            }
        }
    });
});

// Festival and cultural element hover effects
document.querySelectorAll('.festival-card, .temple-card, .food-card, .clothing-card, .activity-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
        this.style.background = 'rgba(255, 255, 255, 0.2)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
        this.style.background = 'rgba(255, 255, 255, 0.1)';
    });
});

// Add special effects for deity avatars
document.querySelectorAll('.deity-avatar').forEach(avatar => {
    avatar.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1) rotate(5deg)';
        this.style.boxShadow = '0 15px 35px rgba(255, 215, 0, 0.5), 0 0 25px rgba(255, 153, 51, 0.6)';
    });

    avatar.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.3)';
    });
});

// Add typing animation for the hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', function () {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        typeWriter(heroTitle, 'Sanatan – Eternal Tradition', 150);
    }
});

// Add sound effect simulation for interactions (visual feedback)
function showRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: radial-gradient(circle, rgba(255,215,0,0.5) 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                animation: ripple-animation 0.6s ease-out;
            `;

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

// Add ripple effect to clickable cards
document.querySelectorAll('.avatar-card, .character-card, .vishnu-avatar-card, .durga-form').forEach(card => {
    card.addEventListener('click', function (e) {
        showRippleEffect(this, e);
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
            @keyframes ripple-animation {
                0% {
                    transform: scale(0);
                    opacity: 1;
                }
                100% {
                    transform: scale(1);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);

// Console welcome message with Hindu symbols
console.log(`
        🕉️ ॐ गं गणपतये नमः ॐ 🕉️
        
        Welcome to Sanatan Dharma - Eternal Tradition
        
        🙏 Namaste! 🙏
        
        This website celebrates the rich heritage, culture, 
        and spiritual wisdom of Hinduism.
        
        🌺 May this journey inspire you! 🌺
        
        🔱 Har Har Mahadev 🔱
        🦚 Hare Krishna 🦚
        🏹 Jai Shri Ram 🏹
        ⚡ Jai Hanuman ⚡
        
        सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः
        May all beings be happy and free from suffering!
        `);

        
       //need to fix avatar showModal func message 
        // Example for avatar cards
document.querySelectorAll('.avatar-card').forEach(card => {
  card.addEventListener('click', function() {
    const name = card.querySelector('.avatar-name').textContent;
    const desc = card.querySelector('.avatar-desc').textContent;
    showModal(name, desc);
  });
});

// Modal logic
function showModal(title, desc) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-desc').innerHTML = desc;
  document.getElementById('custom-modal').style.display = 'flex';
}
document.querySelector('.custom-modal-close').onclick = function() {
  document.getElementById('custom-modal').style.display = 'none';
};
window.onclick = function(event) {
  const modal = document.getElementById('custom-modal');
  if (event.target === modal) modal.style.display = 'none';
};

/* // Add this in your <script> tag or script.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const msg = document.getElementById('msg');
  msg.textContent = "Sending...";

  fetch('https://script.google.com/macros/s/AKfycbxCPa4xrWegOSgEa1H9VbukWYEsZfwbpSyEfPLeup2BwmWmr11ozXFaKvWFyccMYz3mrw/exec', {
    method: 'POST',
    body: JSON.stringify({
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    msg.textContent = "Message Sent Successfully!";
    document.getElementById('contactForm').reset();
    setTimeout(() => { msg.textContent = ""; }, 5000);
  })
  .catch(err => {
    msg.textContent = "Failed to send message.";
  });
}); */