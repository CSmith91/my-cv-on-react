import React from 'react';

function Achievements(){

    const achievementsList = (
        <div>
            <h3>Achievements & Projects</h3>
            <ul>
                <li>I maintain a portfolio of websites that I have built and now manage on behalf of clients.</li>
                <li>I led a group project that investigated the seasonality of a site in Finland, with the hope of demonstrating we could optimise the data (using JULES) with previously untested software (adJULES) developed in part by our professor, <b>Catherine M. Luke</b>. We succeeded in both optimising the data and demonstrating that the software worked.
As a leader, I oversaw the project by instructing the three teams (those studying seasonality and how to quantify it, those researching the optimal site and collecting data, and those optimising data) and ensured all accounts were collected and relevant to each team, such that we all strode towards the same goal.
</li>
                <li>I wrote the report up in LaTeX, which is a scientific document program and requires coding knowledge to run.</li>
                <li>I have written a fantasy book, totalling 400,000 words, inspired by Game of Thrones and Romance of the Three Kingdoms alongside my own perspective on life and society.</li>
                <li>I also study Spanish, as this was a language taught to me in school that I thoroughly enjoyed and took to well, and frequently visit Spain with my partner to visit her family.</li>
            </ul>
        </div>
    )

    return(
        <div>
            {achievementsList}
        </div>
    )

}

export default Achievements;