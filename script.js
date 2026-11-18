
// document.querySelectorAll('a[href^="#modal"]').forEach(function (link) {
//   link.addEventListener('click', function (event) {
//     const modal = document.querySelector(link.getAttribute('href'));
//     if (!modal) { console.warn('Modal not found:', link.getAttribute('href')); return; }
//     event.preventDefault();
//     modal.showModal();
//   });
// });

// document.querySelectorAll('dialog').forEach(function (dialog) {
//   dialog.addEventListener('click', function (event) {
//     const r = dialog.getBoundingClientRect();
//     if (event.clientX < r.left || event.clientX > r.right ||
//         event.clientY < r.top  || event.clientY > r.bottom) {
//       dialog.close();
//     }
//   });
// });

// Get all links that start with #modal
const modalLinks = document.querySelectorAll('a[href^="#modal"]');

modalLinks.forEach(function (modalLink, index) {
  // Get modal ID to match the modal
  const modalId = modalLink.getAttribute('href');
  
  // Click on link
  modalLink.addEventListener('click', function (event) {
    
    // Get modal element
    const modal = document.querySelector(modalId);
    // If modal with an ID exists
    if(modal){
      // Get close button
      const closeBtn = modal.querySelector('.dialog__close');
      event.preventDefault();
      modal.showModal(); // Open modal
      
      // Close modal on click
      closeBtn.addEventListener('click', function (event) {
        modal.close();
      });

      document.querySelectorAll('dialog').forEach(function (dialog) {
        dialog.addEventListener('click', function (event) {
          const r = dialog.getBoundingClientRect();
          if (event.clientX < r.left || event.clientX > r.right ||
              event.clientY < r.top  || event.clientY > r.bottom) {
            dialog.close();
          }
        });
      });
      
      // Close modal when clicking outside modal
      document.addEventListener('click', function (event) {
        
        const dialogEl = event.target.tagName;
        const dialogElId = event.target.getAttribute('id');
        if(dialogEl == 'DIALOG'){
          // Close modal
          modal.close();
        }
      }, false);
      
    // If modal ID not exists
    } else {
      console.log('Modal doesn\'t exist');
    }
  });
});

Array.from(document.querySelectorAll('.screenshots-img-div img')).forEach(img => {
  img.addEventListener("click", function() {
    this.parentElement.classList.toggle('enabled')
  })
})

