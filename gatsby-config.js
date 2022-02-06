module.exports = {
    siteMetadata: {
        title: "My First Gatsby Site",
        description: "Tôi vừa tạo cái gatsby site"
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options:{
                name: `blog`,
                path: `${__dirname}/blog`,
            }
        }
    ]
}