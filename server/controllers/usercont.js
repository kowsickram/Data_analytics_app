const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Compare hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid password' });
    }

    res.status(200).json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.signup = async (req, res) => {
  const { username, password, email } = req.body;
  
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ success: true, message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}


exports.activeuser = async (req, res) => {
  try {
    const userEmail = req.query.userEmail;
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const username = user.username;
    res.status(200).json({ username }); 
  } catch (error) {
    console.error("Error Fetching Active user", error);
    res.status(500).json({ error: 'Server error' });
  }
};


exports.userdata = async (req, res) => {
  try {
    const { userEmail } = req.query;
    const userdata = await User.findOne({ email: userEmail });
    // Handle the found userdata appropriately, like sending it as a response
    res.status(200).json(userdata);
  } catch (error) {
    console.error("Error Fetching user data", error);
    res.status(500).json({ error: "An error occurred while fetching user data" });
  }
};
