// List of Locations
const locations = [
  "Fayetteville, North Carolina", "Raleigh, North Carolina", "Greensboro, North Carolina", 
  "Winston-Salem, North Carolina", "Tramway, North Carolina", "Carthage, North Carolina", 
  "Whispering Pines, North Carolina", "Vass, North Carolina", "Robbins, North Carolina", 
  "Seven Lakes, North Carolina", "Pinehurst, North Carolina", "Aberdeen, North Carolina", 
  "Spring Lake, North Carolina", "Ellerbe, North Carolina", "Raeford, North Carolina", 
  "Hope Mills, North Carolina", "Eastover, North Carolina", "Stedman, North Carolina", 
  "Roseboro, North Carolina", "Clinton, North Carolina", "Rockingham, North Carolina", 
  "Hamlet, North Carolina", "Laurinburg, North Carolina", "Red Springs, North Carolina", 
  "Maxton, North Carolina", "Pembroke, North Carolina", "Lumberton, North Carolina", 
  "Saint Pauls, North Carolina", "Elizabethtown, North Carolina", "Bladenboro, North Carolina", 
  "Warsaw, North Carolina", "Faison, North Carolina", "Newton Grove, North Carolina", 
  "Dunn, North Carolina", "Benson, North Carolina", "Four Oaks, North Carolina", 
  "Smithfield, North Carolina", "Angier, North Carolina", "Kenly, North Carolina", 
  "Wilson, North Carolina", "Fuquay-Varina, North Carolina", "Holly Springs, North Carolina", 
  "Clayton, North Carolina", "Apex, North Carolina", "Morrisville, North Carolina", 
  "Cary, North Carolina", "Knightdale, North Carolina", "Wendell, North Carolina", 
  "Zebulon, North Carolina", "Rolesville, North Carolina", "Wake Forest, North Carolina", 
  "Louisburg, North Carolina", "Franklinton, North Carolina", "Kittrell, North Carolina", 
  "Butner, North Carolina", "Durham, North Carolina", "Chapel Hill, North Carolina", 
  "Mebane, North Carolina", "Burlington, North Carolina", "Pittsboro, North Carolina", 
  "Siler City, North Carolina", "Liberty, North Carolina", "Ramseur, North Carolina", 
  "Asheboro, North Carolina", "McLeansville, North Carolina", "Reidsville, North Carolina", 
  "Summerfield, North Carolina", "Stokesdale, North Carolina", "Oak Ridge, North Carolina", 
  "Kernersville, North Carolina", "High Point, North Carolina", "Archdale, North Carolina", 
  "Mayodan, North Carolina", "Madison, North Carolina", "Rural Hall, North Carolina", 
  "Pilot Mountain, North Carolina", "Lewisville, North Carolina", "Clemmons, North Carolina", 
  "Randleman, North Carolina", "Lexington, North Carolina", "Yadkinville, North Carolina", 
  "Mocksville, North Carolina", "Salisbury, North Carolina", "Denton, North Carolina", 
  "Statesville, North Carolina", "Troutman, North Carolina", "Mooresville, North Carolina", 
  "Cornelius, North Carolina", "Kannapolis, North Carolina", "Concord, North Carolina", 
  "Denver, North Carolina", "Huntersville, North Carolina", "Harrisburg, North Carolina", 
  "Locust, North Carolina", "Albemarle, North Carolina", "Charlotte, North Carolina", 
  "Mint Hill, North Carolina", "Matthews, North Carolina", "Indian Trail, North Carolina", 
  "Pineville, North Carolina", "Lake Wylie, South Carolina", "Fort Mill, South Carolina", 
  "Norwood, North Carolina", "Wingate, North Carolina", "Wadesboro, North Carolina", 
  "Pageland, South Carolina", "Lancaster, South Carolina", "Ridgeway, South Carolina", 
  "Blythewood, South Carolina", "Columbia, South Carolina", "Pontiac, South Carolina", 
  "Elgin, South Carolina", "Camden, South Carolina", "Irmo, South Carolina", "Lexington, South Carolina", 
  "Red Bank, South Carolina", "Gaston, South Carolina", "Pelion, South Carolina", "Chapin, South Carolina", 
  "Bishopville, South Carolina", "Lamar, South Carolina", "Bethune, South Carolina", 
  "McBee, South Carolina", "Kershaw, South Carolina", "Heath Springs, South Carolina", 
  "Darlington, South Carolina", "Society Hill, South Carolina", "Bennettsville, South Carolina", 
  "Cheraw, South Carolina", "Chesterfield, South Carolina", "McColl, South Carolina"
];

// Function to render the locations list dynamically
function renderLocationList() {
  const container = document.querySelector('.content-container');
  container.innerHTML = ''; // Clear previous content
  locations.forEach(location => {
      const div = document.createElement('div');
      div.textContent = location;
      div.onclick = () => copyToClipboard(location);
      container.appendChild(div);
  });
}

// Function to show notification
function showNotification(message) {
  const notificationBox = document.createElement('div');
  notificationBox.className = 'notification-box';
  notificationBox.textContent = message;
  document.body.appendChild(notificationBox);

  // Fade out the notification after 3 seconds
  setTimeout(() => {
      notificationBox.style.opacity = '0';
      setTimeout(() => {
          notificationBox.remove();
      }, 500); // Wait for the fade out to complete before removing the element
  }, 3000);
}

// Function to copy location or conservation content to clipboard
function copyToClipboard(item) {
  let message = '';
  
  // Determine the message based on the clicked box
  if (item === 'Eco-friendly Materials') {
    message = "Hello, are you looking for a brand new mattress and box spring?\n\nWe sell only brand new factory-packed products at very reasonable prices.";
  } else if (item === 'Sustainable Production') {
    message = "No problem at all! May I ask if there's something specific you're looking for or if there's an issue I could help with? I'd be happy to assist!";
  } else if (item === 'Factory-Packed Products') {
    message = "I understand the confusion—this ad is for selling items, not giveaways. I appreciate your feedback and will review the listing to make sure it’s clear. Thanks for pointing that out.";
  } else if (item === 'Recycling Initiatives') {
    message = "Our warehouse is located in Sanford, NC, and we have a delivery option available with cash on delivery.";
  } else if (item === 'Carbon Footprint Reduction') {
    message = "We have firm, medium firm, extra firm, pillow top, and euro top options available.";
  } else if (locations.includes(item)) {
    message = item; // Copy location name if a location is clicked
  }
  
  // Copy the message to the clipboard
  navigator.clipboard.writeText(message).then(() => {
    showNotification(`${item} has been copied to clipboard!`);
  });
}

// Functions to show sections when buttons are clicked
function showLocation() {
  document.getElementById('location-section').style.display = 'block';
  document.getElementById('conservation-section').style.display = 'none';
  document.getElementById('price-section').style.display = 'none';
  renderLocationList();
}

function showConservation() {
  document.getElementById('location-section').style.display = 'none';
  document.getElementById('conservation-section').style.display = 'block';
  document.getElementById('price-section').style.display = 'none';
}

function showPrice() {
  document.getElementById('location-section').style.display = 'none';
  document.getElementById('conservation-section').style.display = 'none';
  document.getElementById('price-section').style.display = 'block';
}

// Price copy function for Twin, Full, Queen, King Set
function setPrice(option) {
  let priceDetails = '';
  
  if(option === 'Twin Set') {
    priceDetails = `
      Revolutionize Your Sleep!
  
      🛏 Twin Size Bliss:
  
      ➡ Blissful Opulent 10-Inch Mattress, {CertiPUR-US} 
      & 📤 Supportive 8-Inch Box Spring.
  
      💰 Exclusive Deal:
      👉 $205 👈
  
      { Mattress & Box Spring }
  
      Payment at delivery time: Cash On Delivery
    `;
  } else if(option === 'Full Set') {
    priceDetails = `
      Revolutionize Your Sleep!

      🛏 Full Size Bliss:

      ➡ Blissful Opulent 10-Inch Mattress, {CertiPUR-US} 
      & 📤 Supportive 8-Inch Box Spring.

      💰 Exclusive Deal:
      👉 $270 👈

      { Mattress & Box Spring }

      Payment at delivery time: Cash On Delivery
    `;
  } else if(option === 'Queen Set') {
    priceDetails = `
      Revolutionize Your Sleep!
  
      🛏 Queen Size Bliss:
  
      ➡ Blissful Opulent 10-Inch Mattress, {CertiPUR-US} 
      & 📤 Supportive 8-Inch Box Spring.
  
      💰 Exclusive Deal:
      👉 $320 👈
  
      { Mattress & Box Spring }
  
      Payment at delivery time: Cash On Delivery
    `;
  } else if(option === 'King Set') {
    priceDetails = `
      Revolutionize Your Sleep!
  
      🛏 King Size Bliss:
  
      ➡ Blissful Opulent 10-Inch Mattress, {CertiPUR-US} 
      & 📤 Supportive 8-Inch Box Spring.
  
      💰 Exclusive Deal:
      👉 $425 👈
  
      { Mattress & Box Spring }
  
      Payment at delivery time: Cash On Delivery
    `;
  }
  
  navigator.clipboard.writeText(priceDetails).then(() => {
    showNotification(`Price details for ${option} have been copied to clipboard!`);
  });
}

// Update the US time every second
function updateTime() {
  const usTime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
  document.getElementById('us-time').textContent = `US Time: ${usTime}`;
}

// Call the time update every second
setInterval(updateTime, 1000);
