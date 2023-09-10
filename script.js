const toggle = document.querySelector('.toggle');
const mobileNav = document.querySelector('.mobile-nav');

toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
});


// const navItems = document.querySelectorAll('.nav-item');
// const dropdowns = document.querySelectorAll('.dropdown');
// const arrows = document.querySelectorAll('.arrow');

// navItems.forEach((navItem, index) => {
//     navItem.addEventListener('click', () => {
//         navItems.forEach(item => {
//             if (item !== navItem) {
//                 item.classList.remove('active');
//             }
//         });

//         navItem.classList.toggle('active');
//         dropdowns.forEach(dropdown => {
//             dropdown.classList.add('hidden');
//         });

//         dropdowns[index].classList.remove('hidden');
//         arrows[index].classList.toggle('rotate');
//     });
// });

const navItems = document.querySelectorAll('.nav-item');
const dropdowns = document.querySelectorAll('.dropdown');
const arrows = document.querySelectorAll('.arrow');

navItems.forEach((navItem, index) => {
    navItem.addEventListener('click', () => {
        // Check if the clicked navItem already has the 'active' class
        if (navItem.classList.contains('active')) {
            navItem.classList.remove('active');
            dropdowns[index].classList.add('hidden');
        } else {
            // Remove 'active' class from all navItems and hide all dropdowns
            navItems.forEach(item => {
                item.classList.remove('active');
            });
            dropdowns.forEach(dropdown => {
                dropdown.classList.add('hidden');
            });

            // Add 'active' class to the clicked navItem and show its dropdown
            navItem.classList.add('active');
            dropdowns[index].classList.remove('hidden');
        }

        // Toggle the 'rotate' class for the arrow
        arrows[index].classList.toggle('rotate');
    });
});


