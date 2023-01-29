export interface LinkProps {
    label : string;
    link : string;
}

export interface DoubleHeaderProps {
    mainLinks : LinkProps[];
    userLinks : LinkProps[];
}
