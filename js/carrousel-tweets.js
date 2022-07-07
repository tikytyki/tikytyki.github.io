$(document).ready(function() {
    let tweetIndex = 0;
    mostrarTweets();

    function mostrarTweets() {
    let misTweets = $(".tweets");
    for (let i = 0; i < misTweets.length; i++) {
        $(misTweets[i]).css("opacity", "0");
        $(misTweets[i]).css("display", "none");
    }
    tweetIndex++;
    if (tweetIndex > misTweets.length) {tweetIndex = 1}
    $(misTweets[tweetIndex-1]).css("display", "block");
    let propiedades = window.getComputedStyle(misTweets[tweetIndex-1]);
    console.log('display: ' + propiedades.getPropertyValue('display') + ' opacity: ' + propiedades.getPropertyValue('opacity'))
    $(misTweets[tweetIndex-1]).css("opacity", "1");
    setTimeout(mostrarTweets, 7000);
    }
})