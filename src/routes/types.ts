import React, {LazyExoticComponent} from "react";

export interface RoutesElement {
    path: string | string[];
    component: (() => React.JSX.Element) | (LazyExoticComponent<() => React.JSX.Element>);
    protected?: boolean;
    exact?: boolean;
    authNew?: boolean;
    title?: string;
}