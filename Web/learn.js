// Section IDs in order
const sectionIds = ['faq-block', 'guides-block', 'tips-block'];
const navBtnIds = ['btn-faq', 'btn-guides', 'btn-tips'];
const arrowIds = [
  { prev: 'learn-prev', next: 'learn-next' },
  { prev: 'learn-prev-guides', next: 'learn-next-guides' },
  { prev: 'learn-prev-tips', next: 'learn-next-tips' }
];

let currentSection = 0;
const blocks = ['faq-block', 'guides-block', 'tips-block'];

function scrollToSection(idx) {
  const el = document.getElementById(blocks[idx]);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    currentSection = idx;
    updateArrows(idx);
  }
}

function updateArrows(idx) {
  // FAQ nav
  const faqPrev = document.getElementById('learn-prev');
  const faqNext = document.getElementById('learn-next');
  if (faqPrev) faqPrev.classList.toggle('learn-arrow-disabled', idx === 0);
  if (faqNext) faqNext.classList.toggle('learn-arrow-disabled', idx !== 0);

  // Guides nav
  const guidesPrev = document.getElementById('learn-prev-guides');
  const guidesNext = document.getElementById('learn-next-guides');
  if (guidesPrev) guidesPrev.classList.toggle('learn-arrow-disabled', idx === 0);
  if (guidesNext) guidesNext.classList.toggle('learn-arrow-disabled', idx === blocks.length - 1);

  // Tips nav
  const tipsPrev = document.getElementById('learn-prev-tips');
  const tipsNext = document.getElementById('learn-next-tips');
  if (tipsPrev) tipsPrev.classList.toggle('learn-arrow-disabled', idx === 0);
  if (tipsNext) tipsNext.classList.toggle('learn-arrow-disabled', idx === blocks.length - 1);
}

document.addEventListener('DOMContentLoaded', () => {
  updateArrows(0);

  // FAQ nav
  document.getElementById('learn-prev').onclick = () => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  };
  document.getElementById('learn-next').onclick = () => {
    if (currentSection < blocks.length - 1) {
      scrollToSection(currentSection + 1);
    }
  };
  // Guides nav
  document.getElementById('learn-prev-guides').onclick = () => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  };
  document.getElementById('learn-next-guides').onclick = () => {
    if (currentSection < blocks.length - 1) {
      scrollToSection(currentSection + 1);
    }
  };
  // Tips nav
  document.getElementById('learn-prev-tips').onclick = () => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  };
  document.getElementById('learn-next-tips').onclick = () => {
    // No next from tips, do nothing
  };
  // Top nav buttons
  document.getElementById('btn-faq').onclick = function(e) {
    e.preventDefault();
    scrollToSection(0);
  };
  document.getElementById('btn-guides').onclick = function(e) {
    e.preventDefault();
    scrollToSection(1);
  };
  document.getElementById('btn-tips').onclick = function(e) {
    e.preventDefault();
    scrollToSection(2);
  };
});

