<script>
  import { onMount } from 'svelte';

  onMount(() => {
    // Add click event listeners to all collectible items
    const collectibles = document.querySelectorAll('.collectible-item');
    
    collectibles.forEach(item => {
      item.addEventListener('click', (e) => {
        // Prevent default link behavior
        e.preventDefault();
        
        // Get the link URL to navigate to after explosion
        const link = item.querySelector('a');
        const url = link ? link.getAttribute('href') : null;
        
        // Create explosion effect
        createExplosion(item, url);
      });
    });
  });

  function createExplosion(element, url) {
    // Get element position and dimensions
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Create explosion flash
    createExplosionFlash(centerX, centerY, rect.width, rect.height);
    
    // Create wooden shards
    const numShards = 20;
    for (let i = 0; i < numShards; i++) {
      createShard(centerX, centerY, i * (360 / numShards), rect.width, rect.height);
    }
    
    // Create dust particles
    createDustParticles(centerX, centerY, 30);
    
    // Create content shards (letters flying out)
    createContentShards(element, centerX, centerY);
    
    // Add exploding class to the element
    element.classList.add('exploding');
    
    // Play explosion sound
    playExplosionSound();
    
    // Navigate to URL after explosion animation completes
    if (url) {
      setTimeout(() => {
        window.location.href = url;
      }, 800);
    }
  }

  function createExplosionFlash(x, y, width, height) {
    const flash = document.createElement('div');
    flash.className = 'explosion-flash';
    
    flash.style.width = `${width * 1.5}px`;
    flash.style.height = `${height * 1.5}px`;
    flash.style.left = `${x - width * 0.75}px`;
    flash.style.top = `${y - height * 0.75}px`;
    
    document.body.appendChild(flash);
    
    setTimeout(() => {
      document.body.removeChild(flash);
    }, 500);
  }

  function createShard(x, y, angle, boxWidth, boxHeight) {
    const shard = document.createElement('div');
    shard.className = 'wood-shard';
    
    // Random shard properties
    const size = 10 + Math.random() * 30;
    const distance = 100 + Math.random() * 250;
    const rotation = Math.random() * 720 - 360;
    const delay = Math.random() * 100;
    
    // Calculate trajectory
    const radians = angle * (Math.PI / 180);
    const tx = Math.cos(radians) * distance;
    const ty = Math.sin(radians) * distance;
    
    // Random starting position within the box
    const startX = x - boxWidth/4 + Math.random() * boxWidth/2;
    const startY = y - boxHeight/4 + Math.random() * boxHeight/2;
    
    // Set shard styles
    shard.style.width = `${size}px`;
    shard.style.height = `${size}px`;
    shard.style.left = `${startX - size/2}px`;
    shard.style.top = `${startY - size/2}px`;
    shard.style.setProperty('--tx', `${tx}px`);
    shard.style.setProperty('--ty', `${ty}px`);
    shard.style.setProperty('--tr', `${rotation}deg`);
    
    // Random shard shape
    const shapes = [
      'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', 
      'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 
      'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
    ];
    shard.style.clipPath = shapes[Math.floor(Math.random() * shapes.length)];
    
    // Random wood texture
    const woodColors = [
      'var(--crash-wood)',
      'var(--crash-wood-dark)',
      '#c89d66'
    ];
    shard.style.background = woodColors[Math.floor(Math.random() * woodColors.length)];
    
    // Add animation with delay
    shard.style.animation = `shard-fly 1s ease-out ${delay}ms forwards`;
    
    // Add to document
    document.body.appendChild(shard);
    
    // Remove shard after animation completes
    setTimeout(() => {
      document.body.removeChild(shard);
    }, 1000 + delay);
  }

  function createDustParticles(x, y, count) {
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'dust-particle';
      
      // Random particle properties
      const size = 3 + Math.random() * 8;
      const angle = Math.random() * 360;
      const distance = 50 + Math.random() * 150;
      const opacity = 0.3 + Math.random() * 0.7;
      const delay = Math.random() * 200;
      
      // Calculate trajectory
      const radians = angle * (Math.PI / 180);
      const tx = Math.cos(radians) * distance;
      const ty = Math.sin(radians) * distance;
      
      // Set particle styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${x - size/2}px`;
      particle.style.top = `${y - size/2}px`;
      particle.style.opacity = opacity;
      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      
      // Add animation with delay
      particle.style.animation = `dust-fly 1.5s ease-out ${delay}ms forwards`;
      
      // Add to document
      document.body.appendChild(particle);
      
      // Remove particle after animation completes
      setTimeout(() => {
        document.body.removeChild(particle);
      }, 1500 + delay);
    }
  }

  function createContentShards(element, centerX, centerY) {
    // Get the text content
    const text = element.textContent.trim();
    if (!text) return;
    
    // Create flying text fragments
    const words = text.split(' ');
    const fragments = words.slice(0, Math.min(5, words.length));
    
    fragments.forEach((fragment, index) => {
      const textShard = document.createElement('div');
      textShard.className = 'text-shard';
      textShard.textContent = fragment;
      
      // Random properties
      const angle = Math.random() * 360;
      const distance = 80 + Math.random() * 120;
      const rotation = Math.random() * 360 - 180;
      const delay = index * 50;
      
      // Calculate trajectory
      const radians = angle * (Math.PI / 180);
      const tx = Math.cos(radians) * distance;
      const ty = Math.sin(radians) * distance;
      
      // Set styles
      textShard.style.left = `${centerX}px`;
      textShard.style.top = `${centerY}px`;
      textShard.style.setProperty('--tx', `${tx}px`);
      textShard.style.setProperty('--ty', `${ty}px`);
      textShard.style.setProperty('--tr', `${rotation}deg`);
      
      // Add animation with delay
      textShard.style.animation = `text-fly 1s ease-out ${delay}ms forwards`;
      
      // Add to document
      document.body.appendChild(textShard);
      
      // Remove after animation completes
      setTimeout(() => {
        document.body.removeChild(textShard);
      }, 1000 + delay);
    });
  }

  function playExplosionSound() {
    // Create audio element
    const audio = new Audio();
    audio.volume = 0.4;
    
    // Try to use one of these common sound formats
    const soundSources = [
      '/sounds/crate-break.mp3',
      '/sounds/explosion.mp3'
    ];
    
    // Try to play the first available sound
    for (const src of soundSources) {
      try {
        audio.src = src;
        audio.play().catch(e => {
          // Silent fail if audio can't play (common in browsers without user interaction)
          console.log("Couldn't play explosion sound:", e);
        });
        break;
      } catch (e) {
        console.log("Couldn't load sound:", e);
      }
    }
  }
</script>
