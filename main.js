
//adding event listener to a button
function randomIndex(){
    //to generate random index for array
    let RandomIndex = Math.floor(Math.random()*BoxOfquotes.quotes.length);
    document.getElementById("text").innerHTML = BoxOfquotes.quotes[RandomIndex].quote ;
    document.getElementById("author").innerHTML = BoxOfquotes.quotes[RandomIndex].author;
    document.getElementById("tweet-quote").setAttribute("href","twitter.com/intent/tweet" + BoxOfquotes.quotes[RandomIndex].quote);
}
