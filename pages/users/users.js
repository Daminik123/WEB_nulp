// Get reference to the table element in HTML
const table = document.querySelector('#users-table');
// Fetch user data from backend endpoint
fetch('http://localhost:8000/usersVH')
  .then(response => response.json())
  .then(users => {
    // Loop through the user data and create HTML rows for each user
    users.forEach(user => {
      // Create HTML elements for table row and cells
      const row = document.createElement('tr');
      const usernameCell = document.createElement('td');
      const emailCell = document.createElement('td');
      const statusCell = document.createElement('td');

      // Add user data to table cells
      usernameCell.textContent = user.username;
      emailCell.textContent = user.email;
      statusCell.textContent = user.is_admin ? 'Admin' : 'User';

      // Append table cells to table row
      row.appendChild(usernameCell);
      row.appendChild(emailCell);
      row.appendChild(statusCell);

      // Append table row to table element
      table.appendChild(row);
    });
  })
  .catch(error => console.error(error));