import React from 'react';

const Project = (props) => {

    return (
       
            <div className="card space-between">
                <div className="img-container">
                    <img src={require(`../../assets/${props.id}.jpg`).default} alt={props.name} />
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <h4> {props.name} </h4>
                        </li>
                        <li>
                            <a href={props.github} rel="noreferrer" target="_blank">Github Link</a>
                        </li>
                        <li>
                            <a href={props.deploy} rel="noreferrer" target="_blank">Deployed Link</a>
                        </li>
                    </ul>
                </div>
            </div>
       
    );
}

export default Project;
