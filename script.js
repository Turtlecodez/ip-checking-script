async function fetchIP() {
  try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      const allowedIPs = ['999.999.9.9', '888.888.8.8']; // Example IPs, replace these with your whitelist of IPs, likely your own
      if (allowedIPs.includes(data.ip)) {
        console.log('User is on a whitelisted IP.');
      } else {
        document.documentElement.innerHTML = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Centralized Controlled Secure Data</title><style>body {font-family: Arial, sans-serif; background-color: #f0f0f0; color: #333; margin: 0; padding: 0;}.header {background-color: #003366; color: white; padding: 20px; text-align: center;}.navbar {overflow: hidden; background-color: #333;}.navbar a {float: left; display: block; color: white; text-align: center; padding: 14px 20px; text-decoration: none;}.navbar a:hover {background-color: #ddd; color: black;}.content {padding: 20px; margin: 15px; background-color: white; border: 1px solid #ccc; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);}.footer {background-color: #333; color: white; text-align: center; padding: 10px; position: fixed; width: 100%; bottom: 0;}h1, h2, h3 {font-family: "Georgia", serif;}p {font-size: 16px; line-height: 1.6;}a {font-size: 16px;}</style></head><body><div class="header"><h1>Centralized Controlled Secure Data</h1><h2>Your Trusted Source for Secure Data Management</h2></div><div class="navbar"><a href="#">Home</a><a href="#">About Us</a><a href="#">Programs</a><a href="#">Admissions</a><a href="#">Contact</a></div><div class="content"><h3>Welcome to CCSD!</h3><p>At CCSD, we are committed to providing secure and reliable data management solutions. Our programs are designed to ensure that your data is safe, centralized, and accessible.</p><p>Join us in our mission to protect and manage your data with the highest standards of security.</p></div><div class="footer"><p>&copy; 2024 Centralized Controlled Secure Data. All rights reserved.</p></div><script src="typical.js"></script></body></html>'
      }
  } catch (error) {
      console.error('Error fetching IP:', error);
   }
}
fetchIP();
