// INTERACTIVE ELEMENTS FOR MICROCAP HYPE CULTURE

document.addEventListener('DOMContentLoaded', function() {
    
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.cta-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Add action-specific responses
            if (this.textContent.includes('BUY')) {
                showHypeMessage('💎 DIAMOND HANDS ACTIVATED! 💎');
            } else if (this.textContent.includes('TELEGRAM')) {
                showHypeMessage('🚀 JOINING THE ALPHA GROUP! 🚀');
            } else if (this.textContent.includes('HYPE')) {
                showHypeMessage('📈 SPREADING THE WORD! 📈');
            }
        });
    });
    
    // Conviction meter animation
    const meterFill = document.querySelector('.meter-fill');
    if (meterFill) {
        let level = 95;
        setInterval(() => {
            level = level >= 100 ? 95 : level + 1;
            meterFill.style.width = level + '%';
        }, 2000);
    }
    
    // Random hype messages
    const hypeMessages = [
        "🔥 CHART LOOKING SPICY! 🔥",
        "💎 REAL GEMS ON CHAIN! 💎",
        "🚀 100,000x LOADING... 🚀",
        "⚡ CONVICTION LEVEL: MAXIMUM ⚡",
        "📈 BIDDING HERE! 📈",
        "🎯 FOR THE LOVE OF THE GAME! 🎯"
    ];
    
    function showRandomHype() {
        if (Math.random() < 0.3) { // 30% chance every interval
            const message = hypeMessages[Math.floor(Math.random() * hypeMessages.length)];
            showHypeMessage(message);
        }
    }
    
    // Show random hype every 10 seconds
    setInterval(showRandomHype, 10000);
    
    // Floating gems interaction
    const gems = document.querySelectorAll('.gem');
    gems.forEach(gem => {
        gem.addEventListener('click', function() {
            this.style.animation = 'none';
            this.style.transform = 'scale(1.5) rotate(360deg)';
            this.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                this.style.animation = 'float 6s ease-in-out infinite';
                this.style.transform = '';
                this.style.transition = '';
            }, 500);
            
            showHypeMessage('💎 GEM ACTIVATED! 💎');
        });
    });
    
    // Add hover sound effects (visual feedback)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#ffff00';
            this.style.boxShadow = '0 20px 40px rgba(255, 255, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '#00ff41';
            this.style.boxShadow = '0 20px 40px rgba(0, 255, 65, 0.3)';
        });
    });
    
    // Glitch effect intensifier on click
    const glitchTitle = document.querySelector('.glitch');
    if (glitchTitle) {
        glitchTitle.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'glitch 0.1s infinite';
                setTimeout(() => {
                    this.style.animation = 'glitch 2s infinite';
                }, 1000);
            }, 10);
            
            showHypeMessage('⚡ $MCG TO THE MOON! ⚡');
        });
    }
    
    // Keyboard shortcuts for true believers
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'm') {
            showHypeMessage('🎮 MOON MODE ACTIVATED! 🎮');
            document.body.style.animation = 'rainbow 1s ease-in-out';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 1000);
        }
        
        if (e.ctrlKey && e.key === 'g') {
            showHypeMessage('💎 GEM RADAR ACTIVE! 💎');
            gems.forEach(gem => {
                gem.style.opacity = '1';
                gem.style.fontSize = '3rem';
                setTimeout(() => {
                    gem.style.opacity = '0.3';
                    gem.style.fontSize = '2rem';
                }, 2000);
            });
        }
    });
    
    // Persistence counter (day counter simulation)
    let dayCounter = 23;
    const updateDayCounter = () => {
        const ticker = document.querySelector('.ticker span');
        if (ticker && Math.random() < 0.1) { // 10% chance to update
            dayCounter++;
            const newText = ticker.textContent.replace(/day \d+/i, `DAY ${dayCounter}`);
            if (newText !== ticker.textContent) {
                ticker.textContent = newText;
                showHypeMessage(`📅 DAY ${dayCounter} OF PURE CONVICTION! 📅`);
            }
        }
    };
    
    setInterval(updateDayCounter, 15000);
});

// Hype message display function
function showHypeMessage(message) {
    const hypeDiv = document.createElement('div');
    hypeDiv.textContent = message;
    hypeDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.9);
        color: #00ff41;
        padding: 15px 25px;
        border-radius: 10px;
        border: 2px solid #00ff41;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
        font-size: 1rem;
        z-index: 1000;
        animation: slideIn 0.5s ease, slideOut 0.5s ease 2.5s forwards;
        box-shadow: 0 5px 15px rgba(0, 255, 65, 0.3);
    `;
    
    document.body.appendChild(hypeDiv);
    
    setTimeout(() => {
        hypeDiv.remove();
    }, 3000);
}

// Add required CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Easter egg: Konami code for ultimate hype
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.length === konamiSequence.length && 
        konamiCode.every((key, index) => key === konamiSequence[index])) {
        
        // ULTIMATE HYPE MODE
        document.body.style.animation = 'rainbow 0.5s ease-in-out infinite';
        document.querySelectorAll('.gem').forEach(gem => {
            gem.style.animation = 'float 0.5s ease-in-out infinite';
            gem.style.fontSize = '4rem';
            gem.style.opacity = '1';
        });
        
        showHypeMessage('🎊 ULTIMATE HYPE MODE UNLOCKED! 🎊');
        
        setTimeout(() => {
            location.reload();
        }, 5000);
        
        konamiCode = [];
    }
});