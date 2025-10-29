const x =
{
"search": async function(search){
    // src: Wikipedia

    const res = await getResponse(`https://en.wikipedia.org/api/rest_v1/page/summary/${search}`);

    if(!res.ok){
    term.er(`${search} not found on Wikipedia:\n${res.status} Error`);
    return res.status;
    }

    const data = await res.json();

    return data["extract"];
},
"APIsearch": async function(search){
    // src: Wikipedia

    const res = await getResponse(`https://en.wikipedia.org/api/rest_v1/page/summary/${search}`);

    if(!res.ok){
    term.er(`${search} not found on Wikipedia:\n${res.status} Error`);
    return res.status;
    }

    const data = await res.json();

    return data;
}
}

x;