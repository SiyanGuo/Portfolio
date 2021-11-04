import React from 'react';
import portfolioList from '../../assets/portfolio.json';
import Project from '../Project/Project.js';

const Portfolio = () => {
    // const test = portfolioList[0]
    // console.log("test", test);
    return (
        <div className="container">
            <h2 >Portfolio</h2>
            <div className="flex-row">
                {portfolioList.map(portfolio => (
                    <Project
                        id={portfolio.id}
                        name={portfolio.name}
                        github={portfolio.github}
                        deploy={portfolio.deploy}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;