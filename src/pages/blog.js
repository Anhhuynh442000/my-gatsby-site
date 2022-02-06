import * as React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My blog page">
            <ul>
                {
                    data.allMdx.nodes.map((node)=>(
                        <article>
                            <Link to={`/blog/${node.slug}`}><h2>{node.frontmatter.title}</h2></Link>
                            
                            <p>Posted: {node.frontmatter.date}</p>
                        </article>
                    ))
                }
            </ul>
        </Layout>
    )
}
export const query = graphql`
    query{
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                }
                id,
                slug
              }
          }
    }
`
export default BlogPage;