fetch('http://your-node-server-ip:3000/log-ip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(err => console.error('Error logging IP:', err));
