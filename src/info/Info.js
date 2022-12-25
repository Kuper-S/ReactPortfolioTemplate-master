import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import pika from "../assets/img/pika.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


export const info = {
    firstName: "Avihai",
    lastName: "Kuper",
    initials: "kuper", 
    position: "a Full Web Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '💡',
            text: 'Creativity'
        },
        {
            emoji: '🌎',
            text: 'Pepole Person'
        },
        {
            emoji: "💼",
            text: "Full Stack Developer (MERN)/ Web Developer"
        },
        {
            emoji: "📧",
            text: "kupkup1992@gmail.com"
        }
    ],
    socials: [
        
        {
            link: "https://github.com/Kuper-S",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/avihai-kuper-801a63217",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
 

    ],
    bio: "Hey There! I'm Avihai. I'm a Full stack Developer.In 2020 i graduated with a bachelor's degree in Bs.c Food Seince & Biotechnology at Tel-Hai College , My MOTTO is : ` don't think outside the box think like there is no box` .I am highly motivated to learn and always add new skills to my toolbox to stay relevant and up-to-date .I love people love the interaction with them and know how to take part within a team .I have self-learning abilities and I believe in the approach of getting your hands dirty and facing new challenges and succeeding them. During 2022, I completed an intensive training of three and a half months and was in the fields of the Full-Stack Web Developer,The training was given by monday.com company. And in order to enter the training, I successfully passed the entrance exams and interviews. We learnd all the hottest technologies on the market and understand what is best parctices and why clean code is so important.in the end of the course ,I took part in hackathon , we had 2 weeks to Think and develop a Web-App and put into practice everything we learned during the course .At the end of the two weeks there was a competition with judges from the company and we won the third and honorable place .I really enjoyed working with the team members and learned what it's like to be part of a dynamic and diverse development team .In the past, I worked as a tourism site manager and managed a team of employees, That's why I know what it's like to function as a team manager and take responsibility for every result we've achieved if its good or bad .As part of my hobbies I like to play with my dog junior, and to play in my free time on the Xbox console. So?! You should hire me!!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'mui','mocha/chai', 'github', 'bootstrap', 'html5', 'css3', 'mongoDB', 'nodeJs','express'],
            exposedTo: ['c ++', 'python', 'Linux' , 'c#','goLang',]
        }
    ,
    hobbies: [
        {
            label: 'Consle Games',
            emoji: '🕹️'
        },
        {
            label: 'Basketball',
            emoji: '🏀'
        },
        {
            label: 'Crossfit',
            emoji: '🦍'
        },
        {
            label: 'Tell some Jokes',
            emoji: '🌶'
        }
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Strapi-Ecommerce-App",
             //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Kuper-S/Full-Stack-Strapi-Ecommerce-App", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Plan it",
            live: "https://plan-it-app.herokuapp.com/",
            source: "https://github.com/Kuper-S/plan-it-Full-Project",
            image: mock2
        },
        {
            title: "Perfumer-Social-Media-App",
            source: "https://github.com/Kuper-S/Perfumer-Social-Media",
            image: mock3
        },
        {
            title: "Todo-List-App (pokemon API)",
            source: "https://github.com/Kuper-S/Monday-U-projcets/tree/main/src/src/ex7",
            image: mock4
        },
    ]
}