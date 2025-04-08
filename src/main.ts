// Import styles
import './styles/style.css';

// Initialize main application
document.addEventListener('DOMContentLoaded', () => {
  // Check if user is logged in (for demo purposes using localStorage)
  const isLoggedIn = localStorage.getItem('dubbaBayLoggedIn') === 'true';

  // Basic routing
  const path = window.location.pathname;

  if (path === '/' || path === '/index.html') {
    if (isLoggedIn) {
      const userRole = localStorage.getItem('dubbaBayUserRole');

      if (userRole === 'admin') {
        window.location.href = '/dashboard.html';
      } else if (userRole === 'customer') {
        window.location.href = '/customer-dashboard.html';
      } else if (userRole === 'delivery') {
        window.location.href = '/delivery-dashboard.html';
      } else {
        window.location.href = '/home.html';
      }
    } else {
      window.location.href = '/home.html';
    }
  }
});
