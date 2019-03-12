import React, { Component } from "react";

class About extends Component {
    render () {
        return (
            <div>
            
                <h2>ABOUT US</h2>
                <p>
                    After conducting an extensive survey I discovered the 3 most concerning things that the average person struggles with on a daily basis. 
                    <ul>
                        <li>Money</li>
                        <li>Health</li>
                        <li>Inability to find a website with a good funny short joke.</li>
                    </ul>
                    </p>
                    <p>
                    In response to concern number 3 I have created funnyshortjokes.com. A place where people can submit funny short jokes and get them rated by there peers. I hope by creating this site that the human race can now sleep safely knowing that there is a place where good funny short jokes can thrive and not be held back any more by those long boring jokes that take ages to read.
                    </p>

               <h3>JOKE OF THE MONTH COMPETITION</h3>
                   <p>In order to win joke of the month and achieve comedy immortality in the hall of fame you need to submit a joke that receives the most likes. This is calculated by adding the rating score along with the social media likes. In order for the joke to be published it must be funny and it must also be original</p>     
            
                <div className="App">
                        <div>
                            <form action="/action_page.php">
                            <label>First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                            <label>Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


                            <label>Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email" />


                            <label>Submit Your Joke</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                            <input type="submit" value="Submit" />
                            </form>
                        </div>
                </div>
            
            
            </div>
        );
    }
}



export default About;
