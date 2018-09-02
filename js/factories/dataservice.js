/*
 * IIFE to keep code safe and outside the global namespace
 */
(function(){

    /*
     * Declaring a factory service as part of the existing turtleFacts Module.
     */
    angular
        .module("turtleFacts")
        .factory("DataService", DataService);

    /*
     * Actual definition of the function used for this factory
     */
    function DataService(){
        /*
         * dataObj is used to simulate getting the data from a backend server
         * The object will hold data which will then be returned to the other
         * factory declared in js/factory/quiz.js which has this factory
         * as a dependency
         */

        var dataObj = {
            turtlesData: turtlesData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a
        // dependency
        return dataObj;
    }

    /*
     * all of the below variables are simulating data that would typically be
     * retrieved using an HTTP call to an API endpoint.
     *
     * For simplicity sake this data is hardcoded into the app as this tutorial
     * is about building the angular app, not the backend.
     *
     * The correctAnswers variable would be retrieved when the user has
     * finished the quiz and would be used to mark the users answers against
     * the correct answers
     *
     * the quizQuestions is an array of objects, each containing data
     * pertaining to a single question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or
     *                              images as indicated above
     *                          - a selected flag which will be used to know if
     *                              the user has selected
     *                          an answer yet.
     *                          - Whether the user got the question correct or
     *                              not
     *
     * The final turtleData variable hold the information that will be
     * displayed in the list view when the app loads. This includes the name
     * and an image of each turtle as well as other information such as the
     * location and the size of the turtles
     *
     */

    var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];

    var quizQuestions  = [
        {
            type: "text",
            text: "How many bits are in 1 byte.?",
            possibilities: [
                {
                    answer: "There are 16 bits for every 1 byte."
                },
                {
                    answer: "There are 8 bits for every 1 byte."
                },
                {
                    answer: "There are 32 bits for every 1 byte."
                },
                {
                    answer: "None, bits are bigger than bytes"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "192.168.0.1 is a Private or Public IP Address?",
            possibilities: [
                {
                    answer: "Either"
                },
                {
                    answer: "192.168.0.1 is a public IP address"
                },
                {
                    answer: "192.168.0.1 is a private IP address"
                },
                {
                    answer: "192.168.0.1 is a dynamic IP address"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "What Programming Language syntax refer to: var_dump($app->getLogger());?",
            possibilities: [
                {
                    answer: "https://res.cloudinary.com/visitltu/image/upload/v1532855967/QZ/JS.jpg"
                },
                {
                    answer: "https://res.cloudinary.com/visitltu/image/upload/v1532857622/QZ/jQuery.jpg"
                },
                {
                    answer: "https://res.cloudinary.com/visitltu/image/upload/v1532857851/QZ/BOOTSTRAP.jpg"
                },
                {
                    answer: "https://res.cloudinary.com/visitltu/image/upload/v1532857218/QZ/PHP7.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Most similar syntax to C language?",
            possibilities: [
                {
                    answer: "https://res.cloudinary.com/visitltu/image/upload/v1532857218/QZ/PHP7.jpg"
                },
                {
                    answer: "https://res.cloudinary.com/visitltu/image/upload/v1532855967/QZ/JS.jpg"
                },
                {
                    answer: "https://res.cloudinary.com/visitltu/image/upload/v1532858221/QZ/Github.jpg"
                },
                {
                    answer: "https://res.cloudinary.com/visitltu/image/upload/v1532857851/QZ/BOOTSTRAP.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What type of programming language is Python?",
            possibilities: [
                {
                    answer: "Python is an interpreted low-level programming language"
                },
                {
                    answer: "Python is an machine language"
                },
                {
                    answer: "Python is an interpreted high-level programming language"
                },
                {
                    answer: "Python is an assembley programming language"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What answer is correct?",
            possibilities: [
                {
                    answer: "jQuery is a cross-platform JavaScript library"
                },
                {
                    answer: "jQuery is not a cross-platform JavaScript library"
                },
                {
                    answer: "jQuery is a Native JavaScript library"
                },
                {
                    answer: "jQuery is a cross-platform JavaScript Framework"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How to Initialize the local Directory as a Git Repository?",
            possibilities: [
                {
                    answer: "$ git push origin master"
                },
                {
                    answer: "$ git create"
                },
                {
                    answer: "$git initialize"
                },
                {
                    answer: "$ git init"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What type of virus was WannaCry?",
            possibilities: [
                {
                    answer: "WannaCry was a malware"
                },
                {
                    answer: "WannaCry was a ransomware cryptoworm"
                },
                {
                    answer: "WannaCry was a worm virus"
                },
                {
                    answer: "WannaCry was a backdoor"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Github is used for?",
            possibilities: [
                {
                    answer: "Share code, host a website, track bugs and build businesses"
                },
                {
                    answer: "Host images, videos and random files"
                },
                {
                    answer: "Learning ruby on rails online"
                },
                {
                    answer: "Web development, Cyber Security and E-commerce"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is MySQL?",
            possibilities: [
                {
                    answer: "MySQL and SQL are the same language."
                },
                {
                    answer: "MySQL is the databse for PHP"
                },
                {
                    answer: "SQL script"
                },
                {
                    answer: "MySQL is an open-source relational database management system (RDBMS)"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var turtlesData = [
        {
            type: "Computer Science",
            image_url: "https://res.cloudinary.com/visitltu/image/upload/v1532855677/QZ/CS.jpg",
            locations: "Software Development, IT Security, C++, Python",
            size: "Guaranteed job | Hard to learn",
            lifespan: "Alan Turing",
            prey: "Cyber Security, Software Engineering, IT, Web Development",
            description: "Computer science is the study of the theory, experimentation, and engineering that form the basis for the design and use of computers. It is the scientific and practical approach to computation and its applications and the systematic study of the feasibility, structure, expression, and mechanization of the methodical procedures (or algorithms) that underlie the acquisition, representation, processing, storage, communication of, and access to, information. The IP address 192.168.0.1 is a private IP address and is the default for certain home broadband routers. There are 8 bits for every 1 byte."
        },
        {
            type: "JavaScript",
            image_url: "https://res.cloudinary.com/visitltu/image/upload/v1532855967/QZ/JS.jpg",
            locations: "Node JS, ES6, jQuery, React, Front-End Framework",
            size: "Scripting Language | Too Many Frameworks!",
            lifespan: "Brendan Eich",
            prey: "Web Browser, Front-End, Application Development, Web Design",
            description: "JavaScript often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web. JavaScript enables interactive web pages and thus is an essential part of web applications.The vast majority of websites use it, and all major web browsers have a dedicated JavaScript engine to execute it. As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has an API for working with text, arrays, dates, regular expressions, and basic manipulation of the DOM.."
        },
        {
            type: "PHP 7",
            image_url: "https://res.cloudinary.com/visitltu/image/upload/v1532857218/QZ/PHP7.jpg",
            locations: "Laravel, MySql, Databse, Symfony, Back-End, SQL",
            size: "Many Jobs | Not Suitable For Large Projects",
            lifespan: "Rasmus Lerdorf",
            prey: "Back-End, WordPress, Facebook, Small Businesses, CMS",
            description: "PHP 7 is the next major update to the PHP programming language which offers several benefits over previous versions such as a new version of Zend Engine and faster performance. PHP 7 has also removed several deprecated functions from previous versions.Because of this, users should not upgrade their sites until they are sure everything is fully compatible with the new version. PHP 7 Features: Improved performance: PHP 7 is up to twice as fast as PHP 5.6, Significantly reduced memory usage, Abstract Syntax Tree, Consistent 64 - bit support, Improved Exception hierarchy, Many fatal errors converted to Exceptions, Secure random number generator, Removed old & unsupported SAPIs and extensions, Anonymous Classes"
        },
        {
            type: "jQuery",
            image_url: "https://res.cloudinary.com/visitltu/image/upload/v1532857622/QZ/jQuery.jpg",
            locations: "Show, Hide, Toogle, Fade, Slideshow, Js Library",
            size: "Interactive Website | Loading Page Speed..",
            lifespan: "John Resig",
            prey: "Slideshow Galleries, Contact Forms, Interactive Web Design..",
            description: "jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. It's free, open-source software using the permissive MIT License. Web analysis indicates that it is the most widely deployed JavaScript library by a large margin. jQuery's syntax is designed to make it easier to navigate a document, select DOM elements, create animations, handle events, and develop Ajax applications. jQuery also provides capabilities for developers to create plug-ins on top of the JavaScript library. This enables developers to create abstractions for low-level interaction and animation, advanced effects and high-level, themeable widgets. Create powerful dynamic web pages and applications.."
        },
        {
            type: "Bootstrap",
            image_url: "https://res.cloudinary.com/visitltu/image/upload/v1532857851/QZ/BOOTSTRAP.jpg",
            locations: "Responsive Web Design, CSS Framework, Mobile First",
            size: "Easy To Learn, Very Responsive | No Cons!",
            lifespan: "Jacob Thornton",
            prey: "Mobile Friendly Websites, Application Development, E-commerce",
            description: "Bootstrap is a free and open-source front-end framework for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. Unlike many web frameworks, it concerns itself with front-end development only. Bootstrap is the second most-starred project on GitHub, with more than 127, 000 stars. Bootstrap, originally named Twitter Blueprint, was developed by nirav panchal and Jacob Thornton at Twitter as a framework to encourage consistency across internal tools. Before Bootstrap, various libraries were used for interface development, which led to inconsistencies........"
        },
        {
            type: "Github",
            image_url: "https://res.cloudinary.com/visitltu/image/upload/v1532858221/QZ/Github.jpg",
            locations: "Free Hosting, Git, Microsoft, Repositories, Ruby...",
            size: "Your Free Portfolio | Well.. nothing really",
            lifespan: "Tom Preston-Werner",
            prey: "Free Hosting Service, Bug Tracking, Project Development.. ",
            description: "GitHub Inc. is a web-based hosting service for version control using Git. It is mostly used for computer code. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project. GitHub offers plans for both private repositories and free accounts which are commonly used to host open-source software projects. As of June 2018, GitHub reports having over 28 million users and 57 million repositories (including 28 million public repositories.), making it the largest host of source code in the world."
        },
        {
            type: "CMD / Terminal",
            image_url: "https://res.cloudinary.com/visitltu/image/upload/v1532858416/QZ/CMD.jpg",
            locations: "Command Prompt, Git, Powershell, Vim, Console, Bash..",
            size: "Quick and Simple | Many Commands to Learn",
            lifespan: "Windows / Mac OS X",
            prey: "DevOps, Linux, Windows, Mac OS X, Ubuntu, Troubleshoot..",
            description: "What It's & How to Use It? CMD is a command line interpreter application available in most Windows operating systems. It is used to execute entered commands. Most of those commands automate tasks via scripts and batch files, perform advanced administrative functions, and troubleshoot or solve certain kinds of Windows issues. Command Prompt is officially called Windows Command Processor, but it is also sometimes referred to as ​the command shell or cmd prompt or even by its filename, cmd.exe. Command Prompt is sometimes incorrectly referred to as (the DOS prompt) or as MS-DOS itself. Command Prompt is a Windows program that emulates many of the command line abilities available in MS-DOS, but it's not MS-DOS...."
        },
        {
            type: "Cyber Security",
            image_url: "https://res.cloudinary.com/visitltu/image/upload/v1532858598/QZ/CYBER.jpg",
            locations: "IT Security, Trojan, Backdoor, Virus, SSL, DDOS Attack ",
            size: "a Great Career Path | Very Long Hours",
            lifespan: "Ray Tomlinson",
            prey: "Government, IT companies, Web Hosting, Banks, Antivirus..",
            description: "Cybersecurity, computer security or IT security is the protection of computer systems from theft of or damage to their hardware, software or electronic data, as well as from disruption or misdirection of the services they provide.The field is of growing importance due to increasing reliance on computer systems, the Internet and wireless networks such as Bluetooth and Wi-Fi, and due to the growth of (smart) devices, including smartphones, televisions and the various tiny devices that constitute the Internet of Things. Cyber security is important because government, military, corporate, financial, and medical organizations collect, process, and store unprecedented amounts of data on computers and other devices."
        }
    ];

})();
