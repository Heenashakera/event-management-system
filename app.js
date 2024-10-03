document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get form values
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
  
    // Create event element
    const li = document.createElement('li');
    li.innerHTML = `${eventName} - ${eventDate} <button class="delete-btn">Delete</button>`;
  
    // Append to event list
    document.getElementById('event-list').appendChild(li);
  
    // Clear form
    document.getElementById('event-name').value = '';
    document.getElementById('event-date').value = '';
  });
  
  // Delete event
  document.getElementById('event-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
      const li = e.target.parentElement;
      li.remove();
    }
  });
  