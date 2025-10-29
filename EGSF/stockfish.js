const x = {"calcFEN": fen => {
const FEN = fen;

const result = fetch(`https://stockfish.online/api/s/v2.php?fen=${encodeURIComponent(FEN)}&depth=15`)
    .then(r => r.json())
    .then(data => {return data;})
    .catch(err => console.error(err));

return result;
}
}

x;