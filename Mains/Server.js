const http = require('http');
const url = require('url');
const { google } = require('googleapis');  // Assuming googleapis package is required

// Create a Google Generative Language API client
const generativeLanguage = google.generativeLanguage({
  version: 'v1beta',
  auth: 'AIzaSyCxfDwNNxIYzfg4-VaynXsVIzByeBjNFws', // You can pass the API key directly
});

async function generateResponse(prompt) {
  try {
    const response = await generativeLanguage.models.generateMessage({
      name: 'projects/YOUR_PROJECT_ID/locations/YOUR_LOCATION/models/chat-bison-001',
      requestBody: {
        prompt: {
          text: prompt,
        },
      },
    });
    return response.data.candidates[0].output;
  } catch (error) {
    console.error('Error:', error);
    return 'An error occurred while processing your request.';
  }
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const userInput = parsedUrl.query.message;

  if (parsedUrl.pathname === '/chatbot' && userInput) {
    const botResponse = await generateResponse(userInput);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ response: botResponse }));
  } else if (parsedUrl.pathname === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading index.html');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
