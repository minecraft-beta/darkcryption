fetch('http://darkcryption-backend.onrender.com/log-ip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(err => console.error('Error logging IP:', err));
