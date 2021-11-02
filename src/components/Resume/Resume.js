import React from "react";

function Resume() {

    const frontEndSkills = [
        "HTML and CSS",
        "JavaScript",
        "Frameworks and Libraries",
        "Version Control",
        "Third-Party APIs",
        "Web Performance Optimization",
        "Search Engine Optimization"
    ];

    const backEndSkills = [
        "Node.js",
        "Express.js",
        "SQL",
        "MongoDb",
        "React",
        "Databases and Cache"
    ]


    return (
        <div className="container">


            <h2>My Resume</h2>
            <p className="my-1">Download My Resume</p>


            <h4 className="my-5">Front End Skills: </h4>
            <ol>
                {frontEndSkills.map(skill => {
                    if (skill !=="Search Engine Optimization") {
                        return (
                        <li className="my-2" key={skill}>
                            {skill}
                        </li>)
                    } else {
                        return (
                        <li className="bottom-10" key={skill}>
                            {skill}
                        </li>
                        )
                    }
                }
                )}
            </ol>
            <h4 className="my-5">Back End Skills: </h4>
            <ol>
                {backEndSkills.map(skill => (
                    <li className="my-2" key={skill}>
                        {skill}
                    </li>
                ))}
            </ol>

        </div>
    )
}

export default Resume;