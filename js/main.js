
var event

let quotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”" ,
        author: "Oscar Wilde"

    }
    ,{
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”" ,
        author: "Marilyn Monroe"
    },
    
    {
        quote : "“So many books, so little time.” " ,
        author : "Frank Zappa"
    },
    
    {
        quote : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
        author : " Albert Einstein"
    },
    {
        quote : "“A room without books is like a body without a soul.” ",
        author : " Marcus Tullius Cicero"

    },
    {
        quote : "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
        author : "Bernard M. Baruch"

    }, 
    {
        quote : "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ",
        author : "Dr. Seuss"

    },
    {
        quote: "“You only live once, but if you do it right, once is enough.” ",
        author: "Mae West"

    },
    {
        quote: "“Without music, life would be a mistake.”",
        author: " Friedrich Nietzsche, Twilight of the Idols"

    },
    {
        quote: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” ",
        author: "Ralph Waldo Emerson "

    },
    {
        quote: "“It is better to be hated for what you are than to be loved for what you are not.” ",
        author: "Andre Gide, Autumn Leaves "

    },

    {
        quote: "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.” ",
        author: "Albert Einstein "

    },
    {
        quote: "“It does not do to dwell on dreams and forget to live.” ",
        author: "J.K. Rowling, Harry Potter and the Sorcerer's Stone "

    },
    {
        quote: "“Good friends, good books, and a sleepy conscience: this is the ideal life.” ",
        author: "Mark Twain "

    },
    {
        quote: "“We are all in the gutter, but some of us are looking at the stars.” ",
        author: "Oscar Wilde, Lady Windermere's Fan "

    },
];



document.getElementById('btn').addEventListener('click',function(){
    event.preventDefault();

    let ranQuote = quotes[Math.floor(Math.random()*quotes.length)];

    document.getElementById('ranQuote').innerHTML=ranQuote.quote;
    document.getElementById('ranAuthor').innerHTML=ranQuote.author;
})










// console.log(x);    //for array
// console.log(x[1]); //for array
// console.log(x.quote1);
// console.log(x.author1);




// for (let i = 0; i < 10; i++) {
    
//     quotes += `<h1>hello saad</h1>`
    
// }

// document.getElementById("demo").innerHTML = quotes