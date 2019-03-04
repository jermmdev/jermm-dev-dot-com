let path = require('path')
exports.createPages = ( { graphql , actions } ) => {
  console.log('**CREATEPAGESRUN')
  const { createPage } = actions
  const postTemplate = path.resolve('src/templates/post.jsx')
  return graphql(`
      {
        allPostDataJson {
          edges {
            node {
              id
              path
              title
              desc
              tagline
              bgImg{
                childImageSharp{
                  fluid{
                    src
                  }
                }
              }
              links{
                id
              }
              blurb{
                h
                p
                a {
                  href
                  text
                }
              }
            }
          }
        }
      }
    `).then(result => {
      if(result.errors){
        console.error('Remote Error Creating Pages from GQL Query', result.errors)
      }else{
        result.data.allPostDataJson.edges.forEach(({node})=>{
          node.links = node.links && node.links.length > 0 ? node.links.map(link => {
            let edgeArr = result.data.allPostDataJson.edges.filter(edge=>{
              return edge.node.id===link.id
            })
            let edgeNode = edgeArr[0].node
            returnObj = {
              title: edgeNode.title
              , tagline: edgeNode.tagline
              , bgImg: edgeNode.bgImg.childImageSharp.fluid.src
              , path: edgeNode.path
            }
            return returnObj
          }) : false
          createPage({
            path: node.path
            , component: postTemplate
            , context: {
              title: node.title
              , curPath: node.path
              , desc: node.desc
              , keywords: node.keywords
              , links: node.links
              , bgImg: node.bgImg.childImageSharp.fluid.src
              , blurb: node.blurb
            }
          })
        })
      }
    }).catch(err=>{
      console.error('Local Error Creating Pages from GraphQL Query', err)
    })
}