import React from 'react';
import myPic from '../../assets/siyan.jpg';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <div className="flex-row">
                <img src={myPic} className= "my-2" style={{ width: "20%" }} alt="Siyan's portrait" />
                <div className=" my-2 container">
                    <p style={{ width: "100%" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
                        condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
                        mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
                        Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
                        justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
                        dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
                        Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
                    </p>
                    <p style={{ width: "100%" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec bibendum turpis sed ex
                        condimentum molestie.Mauris condimentum lectus ut ornare dignissim.Mauris faucibus urna
                        mi, ac feugiat metus aliquam maximus.Proin aliquam justo nec diam vulputate vestibulum.
                        Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend.Morbi tristique
                        justo vel turpis sollicitudin, et tristique velit convallis.In hac habitasse platea
                        dictumst.Phasellus mattis nunc sed orci consequat laoreet.Praesent id nisl nibh.
                        Curabitur imperdiet ultricies mollis.In hac habitasse platea dictumst.
                    </p>
                </div>
            </div>



        </section>
    );
}

export default About;
