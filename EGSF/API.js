const x = {
"withKey": {
"getGoogleGenAIHttps": (API_KEY) =>
`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,

"chatGPT": "https://api.openai.com/v1/chat/completions",

"braveSearch": "https://api.search.brave.com/res/v1/web/search",

"getNewsHttps": (query, apiKey) => `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`,

"getNasaHttps": (apiKey) => `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,

"getGoogleSearchHttps": (apiKey, cseId, query) => `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cseId}&q=${encodeURIComponent(query)}`
},

"free": {
getWeatherHttps: (lat, long) =>
`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`,

getDictHttps: (word) => `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,

"getJSdelivrHttps": (src) => `https://cdn.jsdelivr.net/${src}`,

"getBibleHttps": (b, c, v, V="kjv") => `https://bible-api.com/${b}+${c}:${v}?translation=${V}`
}
}

x;