import React from "react";

function Nav(props) {

    const tabs = ['About Me', 'Portfolio', 'Resume', 'Contact'];


    return (
        <header className="flex-row px-1">
            <h2 className="mx-2 my-5">
                <a href="/">
                    Siyan Serena Guo
                </a>
            </h2>
            <nav>
                <ul className="flex-row my-5">
                    {tabs.map(tab => (
                        <li className="mx-2" key={tab}>
                            <a
                                href={'#' + tab.toLowerCase()}
                                // Whenever a tab is clicked on,
                                // the current page is set through the handlePageChange props.
                                onClick={() => props.handlePageChange(tab)}
                                className={
                                    props.currentPage === tab && 'navActive'
                                }
                            >
                                {tab}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
