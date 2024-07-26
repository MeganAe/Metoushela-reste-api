

const express = require('express');
const axios = require('axios');

const app = express();


const PORT = process.env.PORT || 3000;

// routes
app.get('/api/gpt4o', async (req, res) => {
  try {
    const context = req.query.context;
    const response = await axios.get(`https://metoushela-rest-api-tp5g.onrender.com/api/gpt4o?context=${context}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue' });
  }
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


