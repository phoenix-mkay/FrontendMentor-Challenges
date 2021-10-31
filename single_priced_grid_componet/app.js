let topSection = new Vue({
    el:'.top-section',
    data:{
        heading:" Join our community",
        yellowTxt:"30-day, hassle-free money back guarantee",
        grayTxt:" Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills."
    }
})
let darkerSection = new Vue({
    el:".darker-section",
    data:{
        heading:" Monthly Subscription",
    }
})

// Add the list using a for loop  
let lighterSection = new Vue({
    el:".lighter-section",
    data:{
        heading:"Why Us",
        items:[
            {message:"Tutorials by industry experts"},
            {message:"Peer & expert code review"},
            {message:"Coding exercises"},
            {message:"Access to our GitHub repos"},
            {message:"Community forum"},
            {message:"Flashcard decks"},
            {message:" New videos every week"},

        ]
    }
})