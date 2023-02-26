import React from 'react';
import profilePic from '../images/chris.jpg';
import github from '../images/github.png';
import whatsApp from '../images/whatsapp.png';
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';
import Skills from './Skills';
import Personal from './Personal';

// we import all the images from our images file here, referring to a variable that we can call on later

// this is our personalInfo array of objects. We will pass these props through the Personal component to quickly iterate through the objects and build our site
const personalInfo = [
    // these are index-linked so any additional content needs to be added at the end of the array of objects
    {name: "Phone number", details: "07834641916", icon: whatsApp},
    {name: "Email", details: <a href="mailto: csmith.ex.91@gmail.com">My Email</a>, icon: email},
    {name: "LinkedIn", details: <a href="linkedin.com/in/chris-smith-02b45125a/">My LinkedIn</a>, icon: linkedin},
    {name: "Github", details: <a href="https://github.com/CSmith91">My Gibhub</a>, icon: github}
]

// this is our skills array of objects that is iterated through and produces this as a list. These are used for the Skills component
const mySkills = [
    {name: "Object-Oriented Design"}, 
    {name: "JavaScript"}, 
    {name: "HTML"}, 
    {name: "CSS"}, 
    {name: "React"}, 
    {name: "NodeJS"}, 
    {name: "WordPress"}, 
    {name: "cPanel"}, 
    {name: "LaTeX"}
];

// this is our Aside component that is exported to the App component file
function Aside(){

    // we use the map method to build our list of our personal information, passing the props through the Personal component
    const personalArr = personalInfo.map((info, index) => {
        return (
          <li key={index+info.name}>
            <Personal icon={info.icon} details={info.details} /> 
          </li>
        )
      });

    // this block of HTML contains the basic info, and some of it is built dynamically by referring to our above array by indexing
    // this gives us the icons and text to be displayed together
    const basicDetails = (
        <div>
            <h2>Christopher Smith</h2>
            <h3>Web Developer</h3>
            <img src={profilePic} className='profileImage'/>
            <h4>Contact</h4>
            <ul>{personalArr[0]}</ul>
            <p>Passmore Way, Maidstone, Kent</p> 
            <ul>{personalArr[1]}</ul>
        </div>
    )

    const myLinks = (
        <div>
            <h4>Profiles</h4>
            <ul>{personalArr[2]}</ul>
            <ul>{personalArr[3]}</ul>
        </div>
    )

    // we pass the skills prop into our Skills components to produce our list
    const technicalSkills = mySkills.map((skill, index) => {
        return (
          <li key={index+skill.name} className="skillItem">
            <Skills name={skill.name} /> 
          </li>
        )
      });

    const credits = (
        <div className='credits'>
            <p>I built this site with <a href="https://reactjs.org/">React</a> components. The full source code can be accessed in my <a href="https://github.com/CSmith91/my-cv-on-react.git">Github repo</a>. Icons used on this site came from <a href="https://www.freepik.com/">Freepik</a>.</p>
        </div>
    )

    // we return the block of HTML that is our Aside component to the App component
    return(
        <div>
            {basicDetails}
            {myLinks}
            <h4>Technical Skills</h4>
            <ul>{technicalSkills}</ul>
            {credits}
        </div>
    )
}

export default Aside;