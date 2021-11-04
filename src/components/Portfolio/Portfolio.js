import React from 'react';
import portfolioList from '../../assets/portfolio.json';
import Project from '../Project/Project.js';

const Portfolio = () => {
    // const test = portfolioList[0]
    // console.log("test", test);
    return (
        <div className=" flex-row">
            {/* <h2 >Portfolio</h2>
            <div>
                <img src={require('../../assets/blog.jpg').default} alt="portfolio1"></img>
                <h4>{test.name}</h4>
                <a href={test.github} rel="noreferrer" target="_blank">Github</a>
                <a href={test.deploy} rel="noreferrer" target="_blank">Deployed</a>
            </div> */}

            {portfolioList.map(portfolio => (
            <Project
              id={portfolio.id}
              name={portfolio.name}
              github={portfolio.github}
              deploy={portfolio.deploy}
            />
          ))}
        </div>
    );
}

export default Portfolio;