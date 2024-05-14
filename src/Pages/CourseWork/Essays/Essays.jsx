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
                Answer 3 goes here.
            </SingleEssay>
            <SingleEssay
                question={
                    "Q4 What is the difference between a Front-End and Back-End Developer?"
                }
            >
                Answer 3 goes here.
            </SingleEssay>
            <SingleEssay
                question={
                    "Q5 In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?"
                }
            >
                Answer 3 goes here.
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
