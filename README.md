# Steam cards finder 
This webpage makes queries to an API and then displays games with profitable steam trade cards. The API is not mine, this is the owner's repo: https://github.com/LucasGenovese/Steam-API.

<img src="https://github.com/robert1811/steam-cards-finder-webpage/blob/main/preview.jpg">

## Usage
### How to run the API
- Download the API in https://github.com/LucasGenovese/Steam-API and read its documentation
- Modify the cors middleware of the API at line 8 like this: 
```
// This allows the webpage to use this API
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173' // Webpage url
}))
```

### How to run the webpage
Go to the main directory with the terminal
```
cd steam-cards-finder-webpage
```
Install the dependencies
```
npm install
```
After that, run the server.
```
npm run dev
```
When you open the website, you will see a form asking for Steam cookies in order to make the query to the API. You can take those cookies in the Steam webpage.

## Note
After making many requests, you may be receiving errors because steam limits the amount of requests

## Credits
Credits to <a href="https://github.com/LucasGenovese" target="_blank">Lucas Genovese</a>, the creator of the API.
