import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,

} from "./layout.module.css";


const Layout = (props) => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)
    return (
        <div className={container}>
            <title className={siteTitle}>{props.pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
                    <li className={navLinkItem}><Link className={navLinkText} to="/about">About</Link></li>
                    <li className={navLinkItem}><Link className={navLinkText} to="/blog">Blog</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{props.pageTitle}</h1>
                {props.children}
            </main>
        </div>
    )
}
export default Layout;