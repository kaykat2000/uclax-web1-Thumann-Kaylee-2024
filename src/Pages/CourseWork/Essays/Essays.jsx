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
                JQuery
                <ul>
                    <li>
                        JQuery serves as a utility library, streamlining web app
                        development by facilitating JavaScript use
                    </li>
                    <li>
                        jQuery is a lightweight JavaScript library mostlu used
                        for DOM manipulation and simplifying AJAX requests.
                    </li>
                    <li>ideal for enhancing web page interactivity.</li> 
                    <li>
                        has a lower learning curve, making it accessible for
                        beginners
                    </li>
                    <li>
                        excels at quick and straightforward DOM manipulations.
                    </li>
                    <li>  useful for simpler tasks, </li>
                </ul>
                React
                <ul>
                    <li>
                        a library that allows the embedding of HTML within
                        JavaScript.
                    </li>
                    <li>
                        for building user interfaces, efficient rendering,
                        emphasizing a component-based architecture, and state
                        management.
                    </li>
                    <li>
                        excels in developing single-page applications; offers a
                        more structured and scalable approach than jQuery.
                    </li>
                    <li>React has a steeper learning curve.</li>
                    <li>
                        React's comprehensive documentation, strong community,
                        and reusable component patterns contribute to a more
                        robust and maintainable codebase.
                    </li>
                    <li>
                        Its component-based architecture, virtual DOM, and
                        strong community support align with modern development
                        practices.
                    </li>
                    <li>created by Facebook -interactive UI elements</li>
                    <li>re-usable components</li>
                    <ul>
                        <li>component based</li>
                        <li>All JavaScript is within it</li>
                    </ul>
                    <li>SPAs </li>
                    <li>More scalable</li>
                    <li>
                        JSX: Javascript XML - makes it easier to build out
                        content
                    </li>
                    <li>Doesn’t need to reroute elements</li>
                    <li>DOM Manipulates elements</li>
                    <li> more future-proof choice.</li>
                </ul>
                Sources:
                <ul>
                    <li>
                        https://www.simplilearn.com/jquery-vs-react-article#:~:text=jQuery%20serves%20as%20a%20utility,they%20can%20be%20interchangeably%20used.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={
                    "Q4 What is the difference between a Front-End and Back-End Developer?"
                }
            >
                Front-End
                <ul>
                    <li>
                        creates websites and apps that allow users to access and
                        interact with the site or app.
                    </li>
                    <li>Programming Languages: </li>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                    <li>What’s seen on the first page </li>
                    <li>translates designs to interactive layouts</li>
                </ul>
                Back-End
                <ul>
                    <li>
                        build and maintain the mechanisms that process data and
                        perform actions on websites
                    </li>
                    <li>languages:</li>
                    <ul>
                        <li>Programming Languages</li>
                        <ul>
                            <li>Python </li>
                            <li>PHP</li>
                            <li>JavaScript</li>
                            <li>Ruby</li>
                            <li>Java</li>
                            <li>C#</li>
                        </ul>

                        <li>
                            Frameworks (the libraries of back-end programming
                            languages that help to build the server
                            configuration. They tend to be linked with
                            programming languages, so if you are familiar with
                            Python, you’ll also know Flask, Django, or another
                            Python-based framework, and so on.):
                        </li>

                        <ul>
                            <li>Laravel </li>
                            <li>Django</li>
                            <li>Spring </li>
                            <li>Ruby on Rails</li>
                            <li>Meteor</li>
                            <li>Node.js</li>
                        </ul>
                        <li>
                            Servers (stack and recover data from databases, as
                            back-end programming controls access to this
                            information, including storage and recovery. The
                            database stores and organizes the client’s data so
                            that it can be easily arranged and recovered. This
                            database then runs on a server that provides data
                            upon request.):
                        </li>
                        <ul>
                            <li>Apache</li>
                            <li>NGINX </li>
                            <li>Lighttpd</li>
                            <li>Microsoft IIS</li>
                        </ul>
                    </ul>
                    <li>API request responses</li>
                    <li>
                        back-end developers are involved in data storage,
                        security, and other server-side functions that aren’t
                        seen.
                    </li>{" "}
                    <li>Gives the API </li>
                    <li>own validation front end </li>
                    <li>back end gets the data from the server</li>
                    <li>QA (quality assurance), Front end, back end</li>
                </ul>
                Sources
                <ul>
                    <li>
                        https://www.coursera.org/articles/back-end-developer
                    </li>
                    <li>
                        https://www.coursera.org/articles/front-end-developer
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={
                    "Q5 In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?"
                }
            >
                Relative hyperlinks
                <ul>
                    <li>
                        addresses that are relative to the current domain or
                        location
                    </li>
                    <li>
                        ../Folder 2/page.html, where the ../ tells the browser
                        you want to go out of the current folder and into a new
                        one
                    </li>
                    <li>
                        easily update them if you choose to move files around
                    </li>
                    <li>
                        move the files around outside of the Expression Web
                        program they break
                    </li>
                    <li>more complex import paths</li>
                    <li>flexibility & portability</li>
                    <li>. in front</li>
                </ul>
                Root-relative hyperlink
                <ul>
                    <li>subset of relative hyperlinks</li>
                    <li>
                        all the links are assumed to start from the root folder
                        (domain name) of the site
                    </li>
                    <li>
                        browser applies only the domain to the beginning of this
                        link
                    </li>
                    <li>
                        Because they refer to the root of the site rather than
                        the current location of the page they are placed in,
                        they work regardless of where the file is placed as long
                        as they remain under the right domain.{" "}
                    </li>
                    <li>easier to copy from file to file</li>

                    <li>@ in front</li>
                </ul>
                Sources:
                <ul>
                    <li>
                        https://mor10.com/html-basics-hyperlink-syntax-absolute-relative-and-root-relative/
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={
                    "Q6 What is the difference between jpg, gif, png and svg images?"
                }
            >
                jpg (Joint Photographic Experts Group)
                <ul>
                    <li>created in 1986</li>
                    <li>little storage space</li>
                    <li>quick for uploading or downloading</li>
                    <li>supports 16 million of color</li>
                    <ul>
                        <li>ideal for real-life images</li>
                    </ul>
                    <li>works well on websites and social media</li>
                    <li>jpg are usually default on smartphones</li>
                    <li>“lossy”</li>
                    <ul>
                        <li>
                            unnecessary info is deleted permanently when
                            compressed
                        </li>
                    </ul>
                    <li>when files are converted, quality will be lost</li>
                </ul>
                gif (aka, Graphics Interchange Format)
                <ul>
                    <li>created in 1987</li>
                    <li>“lossless”</li>
                    <ul>
                        <li>
                            retains all data contained, but are smaller than
                            jpgs
                        </li>
                        <ul>
                            <li>accommodate only 256 indexed colors</li>
                        </ul>

                        <li>for small, simple graphic icons and animation</li>
                    </ul>
                    <ul></ul>
                    png (Portable Network Graphics)
                    <ul>
                        <li>created in 1995</li>
                        <li>256 indexed colors & transparency</li>
                        <li>
                            mostly used for static images, but can support
                            animation
                        </li>
                        <li>“lossless”</li>
                        <ul>
                            <li>
                                ideal for detailed graphics or files that are
                                continuously edited
                            </li>
                        </ul>
                    </ul>
                </ul>
                svg (Scalable Vector Graphics)
                <ul>
                    <li>created in 2001</li>
                    <li>
                        image remains crisp & clear at any resolution or size
                    </li>
                    <li>
                        uses mathematically declared shapes & curves, not pixels
                    </li>
                    <li>
                        can be animated, support transparency, and any combo of
                        colors or gradient
                    </li>
                    <li>“lossless”</li>
                    <ul>
                        <li>tend to be large files</li>
                    </ul>
                </ul>
                Sources:
                <ul>
                    <li>
                        https://www.pagecloud.com/blog/web-images-png-vs-jpg-vs-gif-vs-svg
                    </li>
                </ul>
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
