import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/manifest.json', serveStatic({ root: './public' }))
app.use('/icon.svg', serveStatic({ root: './public' }))
app.use('/icon-192.png', serveStatic({ root: './public' }))
app.use('/icon-512.png', serveStatic({ root: './public' }))
app.use('/service-worker.js', serveStatic({ root: './public' }))

// Serve mobile version
app.use('/mobile', serveStatic({ root: './public' }))

// Main route
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <title>عد تنازلي لعيد زواج عبدالرحمن و سهيلة 💕</title>
        
        <!-- PWA Support -->
        <link rel="manifest" href="/manifest.json">
        <meta name="theme-color" content="#e55d87">
        <link rel="icon" type="image/svg+xml" href="/icon.svg">
        <link rel="apple-touch-icon" href="/icon-192.png">
        
        <!-- Additional PWA Meta Tags -->
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="application-name" content="ذكرى الزواج">
        <meta name="apple-mobile-web-app-title" content="ذكرى الزواج">
        
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@300;400;600;700&family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet">
        
        <!-- Font Awesome for icons -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
        
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Cairo', 'Tajawal', sans-serif;
                min-height: 100vh;
                overflow-x: hidden;
                position: relative;
                background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 50%, #fd79a8 100%);
            }
            
            /* SVG Background Pattern */
            .background-pattern {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                opacity: 0.1;
            }
            
            /* Floating illustrations */
            .floating-element {
                position: absolute;
                animation: float 6s ease-in-out infinite;
                z-index: 1;
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(5deg); }
            }
            
            .floating-element.cloud {
                width: 100px;
                height: 60px;
                opacity: 0.7;
            }
            
            .floating-element.bird {
                width: 50px;
                height: 50px;
                opacity: 0.6;
            }
            
            .floating-element.flower {
                width: 60px;
                height: 60px;
                opacity: 0.5;
            }
            
            /* Main container */
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                padding: 20px;
                position: relative;
                z-index: 10;
            }
            
            /* Main card with modern design */
            .card {
                background: white;
                border-radius: 40px;
                padding: 50px 40px;
                text-align: center;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                max-width: 600px;
                width: 100%;
                position: relative;
                overflow: hidden;
            }
            
            .card::before {
                content: '';
                position: absolute;
                top: -50%;
                right: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle, rgba(255,182,193,0.1) 0%, transparent 70%);
                animation: rotate 30s linear infinite;
            }
            
            @keyframes rotate {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            /* Couple illustration */
            .couple-illustration {
                width: 200px;
                height: 200px;
                margin: 0 auto 30px;
                position: relative;
                animation: bounce 2s ease-in-out infinite;
            }
            
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            
            /* Title with modern style */
            .title {
                font-family: 'Amiri', serif;
                font-size: 2.5rem;
                font-weight: 700;
                background: linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-bottom: 20px;
                position: relative;
            }
            
            /* Names with decorative elements */
            .names {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
                margin: 30px 0;
                font-size: 1.8rem;
                color: #2d3436;
                font-weight: 600;
                position: relative;
            }
            
            .names span {
                position: relative;
                z-index: 2;
            }
            
            .names .heart-divider {
                width: 50px;
                height: 50px;
                position: relative;
            }
            
            /* Wedding date with icon */
            .wedding-date {
                font-size: 1.2rem;
                color: #636e72;
                margin: 20px 0;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 15px;
                background: #f8f9fa;
                border-radius: 20px;
                padding: 15px 30px;
            }
            
            .wedding-date svg {
                width: 24px;
                height: 24px;
            }
            
            /* Modern countdown boxes */
            .countdown {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 15px;
                margin-top: 40px;
            }
            
            .time-box {
                background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
                border-radius: 20px;
                padding: 20px 10px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
                border: 2px solid transparent;
                background-clip: padding-box;
                position: relative;
                transition: all 0.3s ease;
            }
            
            .time-box::before {
                content: '';
                position: absolute;
                top: -2px;
                left: -2px;
                right: -2px;
                bottom: -2px;
                background: linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%);
                border-radius: 20px;
                z-index: -1;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .time-box:hover::before {
                opacity: 1;
            }
            
            .time-box:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
            }
            
            .time-number {
                font-size: 3rem;
                font-weight: 700;
                background: linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                display: block;
                line-height: 1;
            }
            
            .time-label {
                font-size: 0.9rem;
                color: #636e72;
                margin-top: 10px;
                font-weight: 500;
            }
            
            /* Message */
            .message {
                margin-top: 40px;
                font-size: 1.1rem;
                color: #636e72;
                font-style: italic;
                padding: 20px;
                background: #f8f9fa;
                border-radius: 20px;
                position: relative;
            }
            
            .message::before {
                content: '❝';
                position: absolute;
                top: 10px;
                right: 20px;
                font-size: 2rem;
                color: #e55d87;
                opacity: 0.3;
            }
            
            /* Anniversary special design */
            .anniversary-message {
                background: white;
                border-radius: 30px;
                padding: 40px;
                position: relative;
                overflow: hidden;
            }
            
            .anniversary-message::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: conic-gradient(from 0deg, #e55d87, #5fc3e4, #fdcb6e, #fd79a8, #e55d87);
                animation: rotate 4s linear infinite;
                opacity: 0.1;
            }
            
            .anniversary-message h2 {
                font-size: 2.5rem;
                background: linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-bottom: 20px;
                position: relative;
            }
            
            .celebration-icons {
                font-size: 3rem;
                margin: 30px 0;
                animation: celebrate 1s ease-in-out infinite alternate;
            }
            
            @keyframes celebrate {
                0% { transform: scale(1) rotate(-5deg); }
                100% { transform: scale(1.1) rotate(5deg); }
            }
            
            /* Decorative elements */
            .decoration {
                position: absolute;
                pointer-events: none;
            }
            
            .decoration.top-left {
                top: 20px;
                left: 20px;
                width: 80px;
                height: 80px;
                opacity: 0.3;
            }
            
            .decoration.bottom-right {
                bottom: 20px;
                right: 20px;
                width: 80px;
                height: 80px;
                opacity: 0.3;
            }
            
            /* Responsive design */
            @media (max-width: 480px) {
                .title {
                    font-size: 2rem;
                }
                
                .names {
                    font-size: 1.3rem;
                }
                
                .countdown {
                    grid-template-columns: repeat(2, 1fr);
                }
                
                .time-number {
                    font-size: 2.5rem;
                }
                
                .card {
                    padding: 30px 20px;
                    border-radius: 30px;
                }
                
                .couple-illustration {
                    width: 150px;
                    height: 150px;
                }
            }
            
            /* Particles animation */
            .particle {
                position: fixed;
                pointer-events: none;
                opacity: 0.3;
                animation: particle-float 10s linear infinite;
            }
            
            @keyframes particle-float {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 0.3;
                }
                90% {
                    opacity: 0.3;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        </style>
    </head>
    <body>
        <!-- Background SVG Pattern -->
        <svg class="background-pattern" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
                    <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
                    <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.1"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)"/>
        </svg>
        
        <!-- Floating decorative elements -->
        <div id="floating-elements"></div>
        
        <!-- Particles -->
        <div id="particles"></div>
        
        <div class="container">
            <div class="card" id="main-card">
                <!-- Decorative elements -->
                <svg class="decoration top-left" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" fill="#e55d87" opacity="0.2"/>
                </svg>
                
                <svg class="decoration bottom-right" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#5fc3e4" stroke-width="2" opacity="0.3"/>
                    <circle cx="50" cy="50" r="30" fill="none" stroke="#fdcb6e" stroke-width="2" opacity="0.2"/>
                    <circle cx="50" cy="50" r="20" fill="none" stroke="#fd79a8" stroke-width="2" opacity="0.1"/>
                </svg>
                
                <!-- Couple Illustration -->
                <div class="couple-illustration">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <!-- Wedding rings -->
                        <circle cx="70" cy="100" r="25" fill="none" stroke="#ffd700" stroke-width="4" opacity="0.8"/>
                        <circle cx="130" cy="100" r="25" fill="none" stroke="#ffd700" stroke-width="4" opacity="0.8"/>
                        
                        <!-- Heart in the middle -->
                        <path d="M100,130 C100,130 70,110 70,90 C70,75 80,65 100,80 C120,65 130,75 130,90 C130,110 100,130 100,130 Z" 
                              fill="#e55d87" opacity="0.7"/>
                        
                        <!-- Decorative stars -->
                        <path d="M40,40 L42,46 L48,46 L43,50 L45,56 L40,52 L35,56 L37,50 L32,46 L38,46 Z" fill="#5fc3e4" opacity="0.5"/>
                        <path d="M160,40 L162,46 L168,46 L163,50 L165,56 L160,52 L155,56 L157,50 L152,46 L158,46 Z" fill="#fdcb6e" opacity="0.5"/>
                        <path d="M100,20 L102,26 L108,26 L103,30 L105,36 L100,32 L95,36 L97,30 L92,26 L98,26 Z" fill="#fd79a8" opacity="0.5"/>
                        
                        <!-- Couple silhouettes (simplified) -->
                        <ellipse cx="70" cy="60" rx="15" ry="20" fill="#2d3436" opacity="0.2"/>
                        <ellipse cx="130" cy="60" rx="15" ry="20" fill="#2d3436" opacity="0.2"/>
                    </svg>
                </div>
                
                <h1 class="title">عد تنازلي لذكرى الزواج</h1>
                
                <div class="names">
                    <span>عبدالرحمن</span>
                    <div class="heart-divider">
                        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25,45 C25,45 5,30 5,15 C5,7 10,2 25,12 C40,2 45,7 45,15 C45,30 25,45 25,45 Z" 
                                  fill="url(#heartGradient)"/>
                            <defs>
                                <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#e55d87;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#5fc3e4;stop-opacity:1" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span>سهيلة</span>
                </div>
                
                <div class="wedding-date">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 2v3m8-3v3M3 8h18m-2 0v11a2 2 0 01-2 2H7a2 2 0 01-2-2V8h14z" 
                              stroke="#e55d87" stroke-width="2" stroke-linecap="round"/>
                        <path d="M12 12v6m-3-3h6" stroke="#5fc3e4" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <span id="wedding-date-text">13 ديسمبر</span>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="12" r="3" fill="none" stroke="#ffd700" stroke-width="2"/>
                        <circle cx="15" cy="12" r="3" fill="none" stroke="#ffd700" stroke-width="2"/>
                    </svg>
                </div>
                
                <div class="countdown" id="countdown">
                    <div class="time-box">
                        <span class="time-number" id="days">0</span>
                        <span class="time-label">يوم</span>
                    </div>
                    <div class="time-box">
                        <span class="time-number" id="hours">0</span>
                        <span class="time-label">ساعة</span>
                    </div>
                    <div class="time-box">
                        <span class="time-number" id="minutes">0</span>
                        <span class="time-label">دقيقة</span>
                    </div>
                    <div class="time-box">
                        <span class="time-number" id="seconds">0</span>
                        <span class="time-label">ثانية</span>
                    </div>
                </div>
                
                <div class="message" id="message">
                    كل لحظة معك هي ذكرى جميلة تُحفر في القلب
                </div>
            </div>
        </div>
        
        <script>
            // Create floating elements
            function createFloatingElements() {
                const container = document.getElementById('floating-elements');
                const elements = [
                    { type: 'cloud', count: 3, svg: '<svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg"><path d="M20,40 Q20,20 35,20 Q35,10 50,10 Q65,10 65,25 Q80,25 80,40 Z" fill="white" opacity="0.3"/></svg>' },
                    { type: 'bird', count: 2, svg: '<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M10,25 Q25,15 25,25 Q25,15 40,25" fill="none" stroke="#2d3436" stroke-width="2" opacity="0.2"/></svg>' },
                    { type: 'flower', count: 4, svg: '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="5" fill="#e55d87"/><circle cx="30" cy="15" r="8" fill="#fd79a8" opacity="0.6"/><circle cx="15" cy="30" r="8" fill="#fd79a8" opacity="0.6"/><circle cx="45" cy="30" r="8" fill="#fd79a8" opacity="0.6"/><circle cx="30" cy="45" r="8" fill="#fd79a8" opacity="0.6"/></svg>' }
                ];
                
                elements.forEach(element => {
                    for (let i = 0; i < element.count; i++) {
                        const div = document.createElement('div');
                        div.className = 'floating-element ' + element.type;
                        div.innerHTML = element.svg;
                        div.style.left = Math.random() * 100 + '%';
                        div.style.top = Math.random() * 100 + '%';
                        div.style.animationDelay = Math.random() * 6 + 's';
                        div.style.animationDuration = (6 + Math.random() * 4) + 's';
                        container.appendChild(div);
                    }
                });
            }
            
            // Create particles
            function createParticles() {
                const container = document.getElementById('particles');
                const particleShapes = ['❤️', '✨', '💕', '🌟', '💖'];
                
                for (let i = 0; i < 15; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.textContent = particleShapes[Math.floor(Math.random() * particleShapes.length)];
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.animationDelay = Math.random() * 10 + 's';
                    particle.style.animationDuration = (10 + Math.random() * 10) + 's';
                    particle.style.fontSize = (15 + Math.random() * 20) + 'px';
                    container.appendChild(particle);
                }
            }
            
            // Initialize decorations
            createFloatingElements();
            createParticles();
            
            // Countdown logic
            function updateCountdown() {
                const now = new Date();
                const currentYear = now.getFullYear();
                let weddingDate = new Date(currentYear, 11, 13); // December 13
                
                // If the date has passed this year, use next year
                if (now > weddingDate) {
                    weddingDate = new Date(currentYear + 1, 11, 13);
                }
                
                // Check if today is the anniversary
                if (now.getMonth() === 11 && now.getDate() === 13) {
                    showAnniversaryMessage();
                    return;
                }
                
                const diff = weddingDate - now;
                
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                
                document.getElementById('days').textContent = days;
                document.getElementById('hours').textContent = hours;
                document.getElementById('minutes').textContent = minutes;
                document.getElementById('seconds').textContent = seconds;
                
                // Update wedding date text with year
                document.getElementById('wedding-date-text').textContent = '13 ديسمبر ' + weddingDate.getFullYear();
            }
            
            function showAnniversaryMessage() {
                const card = document.getElementById('main-card');
                card.innerHTML = \`
                    <div class="anniversary-message">
                        <div class="couple-illustration">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="100" cy="100" r="80" fill="none" stroke="url(#celebrateGradient)" stroke-width="3" stroke-dasharray="5,5">
                                    <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="20s" repeatCount="indefinite"/>
                                </circle>
                                <defs>
                                    <linearGradient id="celebrateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color:#e55d87;stop-opacity:1" />
                                        <stop offset="50%" style="stop-color:#5fc3e4;stop-opacity:1" />
                                        <stop offset="100%" style="stop-color:#fdcb6e;stop-opacity:1" />
                                    </linearGradient>
                                </defs>
                                <text x="100" y="100" text-anchor="middle" dominant-baseline="middle" font-size="60" fill="url(#celebrateGradient)">❤️</text>
                            </svg>
                        </div>
                        
                        <h2>🎊 كل عام وأنتما بألف خير 🎊</h2>
                        
                        <div class="names" style="margin: 30px 0;">
                            <span>عبدالرحمن</span>
                            <span style="font-size: 2rem; color: #e55d87;">❤️</span>
                            <span>سهيلة</span>
                        </div>
                        
                        <p style="font-size: 1.3rem; color: #2d3436; margin-top: 20px;">
                            اليوم هو ذكرى زواجكما السعيد
                        </p>
                        <p style="font-size: 1.1rem; color: #636e72; margin-top: 10px;">
                            13 ديسمبر
                        </p>
                        
                        <div class="celebration-icons">
                            🎉 💑 🎂 🥳 🎈
                        </div>
                        
                        <div class="message" style="margin-top: 30px; background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);">
                            دامت سعادتكما وحبكما إلى الأبد
                        </div>
                    </div>
                \`;
                
                // Add more celebration particles
                for (let i = 0; i < 30; i++) {
                    setTimeout(() => {
                        const particle = document.createElement('div');
                        particle.className = 'particle';
                        particle.textContent = ['🎉', '🎊', '✨', '💖', '🎈'][Math.floor(Math.random() * 5)];
                        particle.style.left = Math.random() * 100 + '%';
                        particle.style.fontSize = (20 + Math.random() * 30) + 'px';
                        document.getElementById('particles').appendChild(particle);
                    }, i * 100);
                }
            }
            
            // Update countdown every second
            updateCountdown();
            setInterval(updateCountdown, 1000);
            
            // Prevent zooming on iOS
            document.addEventListener('gesturestart', function(e) {
                e.preventDefault();
            });
            
            document.addEventListener('touchmove', function(e) {
                if (e.scale !== 1) {
                    e.preventDefault();
                }
            }, { passive: false });
            
            // PWA Installation
            let deferredPrompt;
            const installContainer = document.createElement('div');
            installContainer.id = 'install-container';
            installContainer.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:1000;display:none;';
            installContainer.innerHTML = \`
                <button id="install-btn" style="
                    background: linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%);
                    color: white;
                    border: none;
                    padding: 15px 30px;
                    border-radius: 50px;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                    font-family: 'Cairo', sans-serif;
                    animation: pulse 2s infinite;
                ">
                    <i class="fas fa-download"></i> تثبيت التطبيق
                </button>
            \`;
            document.body.appendChild(installContainer);
            
            // Show install button when PWA install is available
            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
                installContainer.style.display = 'block';
            });
            
            // Handle install button click
            document.getElementById('install-btn').addEventListener('click', async () => {
                if (deferredPrompt) {
                    deferredPrompt.prompt();
                    const { outcome } = await deferredPrompt.userChoice;
                    if (outcome === 'accepted') {
                        console.log('User accepted the install prompt');
                    }
                    deferredPrompt = null;
                    installContainer.style.display = 'none';
                }
            });
            
            // Register Service Worker
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/service-worker.js')
                    .then(registration => console.log('Service Worker registered'))
                    .catch(error => console.log('Service Worker registration failed:', error));
            }
        </script>
    </body>
    </html>
  `)
})

export default app