(function topTenTweets () {
    let tweets = [
        "Strikes against evil #NoVoilance",
        "Strikes against evil #NoVoilance",
        "Strikes against evil #NoVoilance #NoVoilance",
        "India Won the match #IndianCriketTeam",
        "Central elections to be held this month #central elections",
        "Central elections to be held this month #central elections",
        "Women empowerment is very important #women",
        "National developement sheme #nationalScheme",
        "National developement sheme #nationalScheme",
        "National developement sheme #nationalScheme",
        "National developement sheme #nationalScheme",
        "Central elections to be held this month #central #elections #centralelections",
        "Central elections to be held this month #central #governament elections",
        "Central elections to be held this month #central #governament elections",
        "Central elections to be held this month #central #centralelections",
        "India Won the match #IndianCriketTeam #teamIndia #centralelections",
        "India Won the match #IndianCriketTeam #India #Cricket",
        "India Won the match #Cricket",
        "How to find the job #unemploymentIndia #Cricket",
        "How to find the job #unemploymentIndia #Cricket",
        "How to find the job #unemploymentIndia #Cricket",
        "How to find the job #unemploymentIndia #Cricket",
        "How to find the job #unemploymentIndia #Cricket",
        "How to find the job #unemploymentIndia #Cricket",
        "Lord shiva #Mahashivarathri #shiva", 
        ];
    let originalHashtagCount = {};
    tweets.forEach(tweet => {
        tweet.split(" ").filter(word => 
            word.includes("#")).forEach(hashtag => 
                hashtag in originalHashtagCount? 
                    originalHashtagCount[hashtag] = originalHashtagCount[hashtag] + 1 : originalHashtagCount[hashtag] = 1 );
    });
    originalHashtagCount = Object.entries(originalHashtagCount).sort((a,b) => b[1]-a[1])

    let container = document.createElement("div");
    originalHashtagCount.forEach((hashtag,index)=> {
        if(index <=10){
        const textNode = document.createElement("div")
        textNode.setAttribute("style", "text-align:center; font-size: 34px");
        textNode.innerHTML = `${hashtag[0]} : ${hashtag[1]}`;
        container.appendChild(textNode);}
    });
    document.getElementById("container").appendChild(container)
}());