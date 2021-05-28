import React, { forwardRef, useEffect, useRef, useState } from "react";
import './HomePage.less';

interface IProps { }

const componentName = "HomePage";

/**
 * @name HomePage
 */
const HomePage = forwardRef((props: IProps) {

    // get root ref
    const rootRef = useRef<HTMLDivElement>(null);

    // -------------------–-------------------–-------------------–--------------- REGISTER PAGE

    // -------------------–-------------------–-------------------–--------------- RENDER

    return <div className={componentName} ref={rootRef}>
        <h1>HomePage</h1>
    </div>;
});

export default HomePage;
