//////////1/////////
let numbers = [1, 2, 3, 4];
let newNumbers = [];

 newNumbers = numbers.filter((i) => i % 2 !==0).map((i)=> i*2);
 console.log("The doubled numbers are", newNumbers);

/////////////2///////////////////
let num = [1, 2, 3, 4];
let newNum = [];
 newNum =num.filter((i) => i % 2 == 0).concat(numbers).sort();
 console.log("The final numbers are", newNum); 
////////////3///////////////////
let monday = [
        {
            name     : 'Write a summary HTML/CSS',
            duration : 180
        },
        {
            name     : 'Some web development',
            duration : 120
        },
        {
            name     : 'Try to convince teachers to fix homework class10',
            duration : 30
        },
        {
            name     : 'Fix homework for class10 myself',
            duration : 20
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        }
    ];
 
let tuesday = [
        {
            name     : 'Keep writing summery',
            duration : 240
        },
        {
            name     : 'Some more web development',
            duration : 180
        },
        {
            name     : 'Staring out the window',
            duration  : 10
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        },
        {
            name     : 'Look at application assignments new students',
            duration : 40
        }
    ];

     
let tasks = [monday, tuesday];
let sumOfHours = tasks[0].map((i)=> i.duration).concat(tasks[1].map((i)=> i.duration)).reduce((a, b)=> a + b) / 60 ;
console.log("Maartje works two days per week and her salary is : " + "€" + Math.round(sumOfHours * 13) + " in the week");