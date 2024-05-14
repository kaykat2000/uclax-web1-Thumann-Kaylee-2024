import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>
            <SingleEssay
                question={
                    "Q1 Explain the difference between HTML, CSS and JavaScript."
                }
            >
                {" "}
                HTML (HyperText Markup)
                <ul>
                    <li>
                        standard  markup language for documents designed to be
                        displayed in a web browser
                    </li>
                    <li>defines the content and structure for the web</li>
                    <li>most important for web optimization</li>
                    <li>Markup</li>
                    <ul>
                        <li>is describing content</li>
                    </ul>
                    <li>
                        text elements that can be read and loaded by a web
                        browser
                    </li>
                    <ul>
                        <li>
                            Web browser can read 16 different HTML attributes to
                            communicate certain functionality when used inside
                            of an element
                        </li>
                        <li>HTML Syntax</li>
                        <ul>
                            <li>
                                . HTML markup functions through the use of
                                elements, which describe its functionality
                            </li>
                            <ul>
                                <li>
                                    these are placed within a descending tree
                                    structure
                                </li>
                            </ul>
                            <li>Tags {"(<>, </>)"}</li>
                            <ul>
                                <il>
                                    determine where the elements are placed and
                                    how they will function
                                </il>
                                <il>
                                    markup written between these two tags will
                                    be structured using the element written
                                    within each tag. {"(ex. <head> </head>)"}
                                </il>
                            </ul>
                            <li>href attribute</li>
                            <ul>
                                <li>
                                    point to a specific link in conjunction with
                                    the a element, which determines anchor text
                                </li>
                                <ul>
                                    <li>
                                        {
                                            "<a href=”https://examplesite.com”>Example Anchor Text</a>"
                                        }
                                    </li>
                                </ul>
                            </ul>
                        </ul>
                    </ul>
                </ul>
                CSS (Cascading Style Sheets)
                <ul>
                    <li>
                        a style sheet language used for specifying
                        the presentation and styling of a document written in
                        a markup language such as HTML or XML
                    </li>
                     <li>Focuses on the visual aspect of the web content</li>
                    <ul>
                        <li>Adds color, stylization, and theme</li>
                        <li> Overrides defaults</li>
                        <li>CSS Syntax</li>
                        <ul>
                            <li>
                                The selector points to the HTML element you want
                                to style.
                            </li>
                            <li>
                                The declaration block contains one or more
                                declarations separated by semicolons.
                            </li>
                            <li>
                                Each declaration includes a CSS property name
                                and a value, separated by a colon.
                            </li>
                            <li>Example:</li>
                            {"p {"}    {"   color: red;"}
                              {"    text-align: center;"}
                            {"}"}
                        </ul>
                    </ul>
                </ul>
                JavaScript
                <ul>
                    <li>Focuses on webpage behavior</li>
                    <li>
                        Makes the webpage more interactive and functionally
                        complex
                    </li>
                    <ul>
                        <li>Animate elements on the webpage </li>
                        <li>
                            It has dynamic
                            typing, prototype-based object-orientation,
                            and first-class functions.
                        </li>
                    </ul>
                    <li>JavaScript Syntax</li>
                    <ul>
                        <li>
                            Uses C-style/influenced syntax (pretty common
                            examples being Ruby, C++, Java, Python)
                        </li>
                        <li>
                            Semicolon is necessary for each line to be read
                            separately
                        </li>
                        <li>Variable declaration</li>
                        <ul>
                            <li>let c, d, e;</li>{" "}
                        </ul>
                        <li>Assign value to var</li>
                        <ul>
                            <li>c = 5;</li>
                        </ul>
                        <li>Computer value of var </li>
                        <ul>
                            <li>d = c;</li>
                            <li>e = c / d;</li>
                        </ul>
                    </ul>
                </ul>
                Sources:
                <ul>
                    <li>https://en.wikipedia.org/wiki/HTML</li>
                    <li>https://en.wikipedia.org/wiki/CSS</li>
                    <li>https://en.wikipedia.org/wiki/JavaScript</li>
                    <li>
                        https://www.brytdesigns.com/html-css-javascript-whats-the-difference
                    </li>
                    <li>https://en.wikipedia.org/wiki/C_syntax</li>
                    <li>
                        https://builtin.com/software-engineering-perspectives/html
                    </li>
                    <li>https://www.w3schools.com/css/css_syntax.ASP</li>
                    <li>
                        https://www.geeksforgeeks.org/javascript-basic-syntax/
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={"Q2 What is the difference between Git and Github?"}
            >
                <ul>
                    <li>
                        Git is a free, open source version control tool that
                        developers install locally on their personal computers,
                        while GitHub is a pay-for-use online service built to
                        run Git in the cloud.
                    </li>
                </ul>
                Git
                <ul>
                    <li>Installed locally</li>
                    <li>Tracks code changes</li>
                    <li> Allows for collaboration</li>
                    <li>focused on version control and code sharing</li>
                    <li>no user management features</li>
                    <li>Open source licensed</li>
                    <li>features branches</li>
                    <li>
                        Is great for managing code/keeps bugs out of production
                    </li>
                </ul>
                Github
                <ul>
                    <li>runs Git on the cloud</li>
                    <li>Provides services for users</li>
                    <li>focused on centralized source code hosting</li>
                    <li>Built-in user management</li>
                    <li>Different pay/free tiers</li>
                    <li>Pull requests</li>
                    <li>Code reviews</li>
                    <li>uses CICD Deployment</li>
                    <li>hosting is free</li>
                </ul>
                Sources:
                <ul>
                    <li>
                        https://www.theserverside.com/video/Git-vs-GitHub-What-is-the-difference-between-them#:~:text=The%20key%20difference%20between%20Git,run%20Git%20in%20the%20cloud.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={
                    "Q3 What is the difference between JQuery and React?."
                }
            >
                JQuery JQuery serves as a utility library, streamlining web app
                development by facilitating JavaScript use jQuery is a
                lightweight JavaScript library primarily used for DOM
                manipulation and simplifying AJAX requests. It's ideal for
                enhancing web page interactivity.  jQuery has a lower learning
                curve, making it accessible for beginners with its simple
                syntax. It excels at quick and straightforward DOM
                manipulations. With its component-based structure and JSX syntax
                 jQuery remains useful for simpler tasks, React's ability to
                handle complex applications and its compatibility with evolving
                industry standards position it as a more future-proof choice.
                React a library that allows the embedding of HTML within
                JavaScript. a powerful JavaScript library for building user
                interfaces, efficient rendering, emphasizing a component-based
                architecture, and state management. React excels in developing
                single-page applications, offering a more structured and
                scalable approach than jQuery. React has a steeper learning
                curve. However, once developers become proficient, React's
                comprehensive documentation, strong community, and reusable
                component patterns contribute to a more robust and maintainable
                codebase. React is considered more sustainable for future
                development. Its component-based architecture, virtual DOM, and
                strong community support align with modern development
                practices. created by Facebook -interactive UI elements
                re-usable components component based All JavaScript is within it
                SPAs More scalable JSX: Javascript XML - makes it easier to
                build out content Doesn’t need to reroute elements DOM
                Manipulates elements
                https://www.simplilearn.com/jquery-vs-react-article#:~:text=jQuery%20serves%20as%20a%20utility,they%20can%20be%20interchangeably%20used.
            </SingleEssay>
            <SingleEssay
                question={
                    "Q4 What is the difference between a Front-End and Back-End Developer?"
                }
            >
                Front-End creates websites and apps that allow users to access
                and interact with the site or app. languages: HTML, CSS, and
                JavaScript What’s seen on the first page translates designs to
                interactive layouts Back-End build and maintain the mechanisms
                that process data and perform actions on websites languages:
                Programming Languages Python PHP JavaScript Ruby Java C#
                Frameworks (the libraries of back-end programming languages that
                help to build the server configuration. They tend to be linked
                with programming languages, so if you are familiar with Python,
                you’ll also know Flask, Django, or another Python-based
                framework, and so on.): Laravel Django Spring Ruby on Rails
                Meteor Node.js Servers (stack and recover data from databases,
                as back-end programming controls access to this information,
                including storage and recovery. The database stores and
                organizes the client’s data so that it can be easily arranged
                and recovered. This database then runs on a server that provides
                data upon request.): Apache NGINX Lighttpd Microsoft IIS API
                request responses back-end developers are involved in data
                storage, security, and other server-side functions that aren’t
                seen. Gives the API own validation front end back end gets the
                data from the server QA (quality assurance), Front end, back end
                https://www.coursera.org/articles/back-end-developer
                https://www.coursera.org/articles/front-end-developer
            </SingleEssay>
            <SingleEssay
                question={
                    "Q5 In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?"
                }
            >
                Absolute Hyperlinks complete addresses that contain all the
                elements of a URL always start with http:// followed by domain
                used when linking to pages outside of the current site that have
                a different domain name. Relative hyperlinks addresses that are
                relative to the current domain or location ../Folder
                2/page.html, where the ../ tells the browser you want to go out
                of the current folder and into a new one easily update them if
                you choose to move files around move the files around outside of
                the Expression Web program they break more complex import paths
                flexibility & portability . in front Root-relative hyperlink
                subset of relative hyperlinks all the links are assumed to start
                from the root folder (domain name) of the site browser applies
                only the domain to the beginning of this link Because they refer
                to the root of the site rather than the current location of the
                page they are placed in, they work regardless of where the file
                is placed as long as they remain under the right domain. easier
                to copy from file to file @ in front
                https://mor10.com/html-basics-hyperlink-syntax-absolute-relative-and-root-relative/
            </SingleEssay>
            <SingleEssay
                question={
                    "Q6 What is the difference between jpg, gif, png and svg images?"
                }
            >
                Answer 3 goes here.
            </SingleEssay>
            <SingleEssay
                question={
                    "Q7 Define the following Agile roles: Product Manager, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps."
                }
            >
                Answer 3 goes here.
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
