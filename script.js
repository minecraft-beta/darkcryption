fetch('https://darkcryption-backend.onrender.com/log-ip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      console.log('Success:', data);
    })
    .catch(err => console.error('Error hogya:', err));
