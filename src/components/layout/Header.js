import React, { memo, useEffect, useState } from "react";

const Headers = memo((props) => {
    useEffect(() => {}, []);

    return (
        <React.Fragment>
            <div className="header-container">
                <section className="header-container-items">Header</section>
                <section className="header-container-items">Header</section>
                <section className="header-container-items">Header</section>
            </div>
        </React.Fragment>
    );
});

export default Headers;
