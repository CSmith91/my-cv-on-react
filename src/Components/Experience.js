import React from 'react';

function Experience(){

    const intro = (
        <div>
            <p>
                Eager web developer keen to contribute and build on team projects with a professional ethos, attention to detail, hard work and excellent organisational skills. Professional experience working with clients in a web development environment, full understanding and application of WordPress and expanding proficiency in JavaScript, HTML and CSS. Thoroughly enjoy learning and motivated by completing projects, complex tasks, problem-solving and self-improvement.
            </p>
        </div>
    )

    const professionalContent = (
        <div>
            <h3>Professional Experience</h3>
            <h4>Web Development</h4>
            <h5>Freelance, Jan 14 - Present</h5>
            <ul>
                <li>I offer in-depth, custom back-offices for unique requirements, as well as standard websites at a competitive rate, rivalling self-managed sites like Wix & Squarespace and saving clients thousands in both time and money.</li>
                <li>Responded to emergencies (like Covid-19) by updating websites within minutes of clients requesting assistance – be it updating office hours, adding pop-up messages or helping with email lists – to ensure their businesses operate with zero interruptions. </li>
                <li>Streamlined clients’ operations by offering storage solutions for their company, allowing them to expand without needing to hire additional staff.</li>
                <li>Repaired clients’ hardware and offer discounts through the international market on software (like Microsoft Office) saving clients £150 per download and allowing older equipment to continue running as normal.</li>
            </ul>
            <h4>Client Account Manager</h4>
            <h5>Ibbett Mosely Surveyors LLP, Oct 15 - Present</h5>
            <ul>
                <li>Assisted big take-ons of residential and block management supporting both the property management and the commercial team.</li>
                <li>Saved money by reducing the number of hours needed for the job down from 5 days a week (full time) to 3 with no interruption whatsoever, whilst simultaneously taking on more responsibility in this reduced time frame, such as lettings administration, payroll and assisting commercial projects.</li>
                <li>During Covid-19 I have transferred all work to paperless with no interruption whilst taking on lettings due to furloughed staff, resulting in the largest profit earnt in the department since my joining.</li>
                <li>In 2019 I navigated the company through a crisis (the untimely death of my colleague) by covering both payroll and company accounts. With the company recovered, I am trained to administer payroll.</li>
                <li>I have saved the company £8,000 having offered to build their auctions website myself. I continue to maintain their auction website. I offer my web development services to other individuals and companies outside of my working hours. <a href="ibbettmoselyauctions.co.uk">See my site here</a>.</li>
                <li>I am undertaking an ACCA qualification and have completed 2 exams.</li>
            </ul>
        </div>
    )

    return(
        <div>
            {intro}
            {professionalContent}
        </div>
    )
}

export default Experience;