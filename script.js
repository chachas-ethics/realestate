
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const l1 = document.getElementById('line-1');
  const l2 = document.getElementById('line-2');

  toggle.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    
    if (isHidden) {
      menu.classList.remove('hidden');
      setTimeout(() => {
        menu.classList.remove('opacity-0', '-translate-y-4');
      }, 10);
      l1.style.transform = 'translateY(4px) rotate(45deg)';
      l2.style.width = '24px';
      l2.style.transform = 'translateY(-4px) rotate(-45deg)';
    } else {
      menu.classList.add('opacity-0', '-translate-y-4');
      setTimeout(() => menu.classList.add('hidden'), 500);
      l1.style.transform = 'none';
      l2.style.width = '16px';
      l2.style.transform = 'none';
    }
  });

   function swapImage(element) {
    const mainImg = document.getElementById('mainImage');
    mainImg.src = element.src;
    // Add a simple fade animation
    mainImg.style.opacity = 0;
    setTimeout(() => {
      mainImg.style.opacity = 1;
    }, 50);
  }

   function toggleFAQ(id) {
    const content = document.getElementById(`faq-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    
    // Close others if you want a single-open effect
    const allContent = document.querySelectorAll('[id^="faq-"]');
    const allIcons = document.querySelectorAll('[id^="icon-"]');
    
    allContent.forEach((el, index) => {
      if (el.id !== `faq-${id}`) {
        el.style.maxHeight = '0px';
        allIcons[index].style.transform = 'rotate(0deg)';
      }
    });

    if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
      content.style.maxHeight = '500px';
      icon.style.transform = 'rotate(90deg)';
    } else {
      content.style.maxHeight = '0px';
      icon.style.transform = 'rotate(0deg)';
    }
  }

  
/* ios hover */
 document.addEventListener("touchstart", function() {}, true);

function openModal(title, price, image, layout, location) {
    // Find the elements
    const modal = document.getElementById('propertyModal');
    
    // Inject the data
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalImg').src = image;
    document.getElementById('modalLayout').innerText = layout;
    document.getElementById('modalLoc').innerText = location;

    // Show it
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('propertyModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}


function openPortfolioModal(title, price, image, time, location) {
    const modal = document.getElementById('portfolioModal');
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalImg').src = image;
    document.getElementById('modalTime').innerText = time;
    document.getElementById('modalLoc').innerText = location;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closePortfolioModal() {
    document.getElementById('portfolioModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

/* ios close modal on outside click */
// 1. Select your modal and the backdrop
const modal = document.getElementById('your-modal-id');
const backdrop = document.getElementById('your-backdrop-id');

// 2. Function to close modal
const closeModal = () => {
    modal.classList.add('hidden');
    backdrop.classList.add('hidden');
    // Optional: Re-enable scrolling on the main page
    document.body.style.overflow = '';
};

// 3. The iOS-compatible listener
// We use 'click' but the CSS fix below ensures iOS recognizes it
window.addEventListener('click', (event) => {
    if (event.target === backdrop) {
        closeModal();
    }
});
