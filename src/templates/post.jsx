import React from "react"
import Helmet from 'react-helmet'
import {Link} from "gatsby"

import Banner from "../components/Banner"
import Layout from "../components/layout"
import Categories from "../components/Categories"
import Category from "../components/Category"
import Post from "../components/Post"

function PostTemplate({pageContext}) {
  console.log('links', pageContext.links)
  let linkObjects = pageContext.links && pageContext.links.length > 0 ? pageContext.links.map(link => {
    return (
      <Category key={link.title+Date.now()} title={link.title} desc={link.tagline} loc={link.path} pic={link.bgImg} />
    )
  }) : false
  let blurbObjects = pageContext.blurb && pageContext.blurb.length > 0 ? pageContext.blurb.map(blurb => {
    if(blurb.h){
      return (
        <header key={"h"+blurb.h+Date.now()} className="major">
          <h2>{blurb.h}</h2>
        </header>
      )
    }
    if(blurb.p){
      return (
        <p key={"p"+blurb.p+Date.now()}>
          {blurb.p}
        </p>
      )
    }
    if(blurb.a){
      return (
        <div style={{marginTop:'2px', marginBottom: '2px'}} key={"a"+blurb.a.text+Date.now()}>
          <a  target="blank" className="button" href={blurb.a.href}>
            {blurb.a.text}
          </a>
        </div>
      )
    }
    return null
  }) : false
  let backPath = false
  if(pageContext.curPath !== '/'){
    let pathSplit = pageContext.curPath.split('/')
    if(pathSplit.length > 1){
      pathSplit.pop()
      if(pathSplit.length === 1) backPath = '/'
      if(pathSplit.length > 1) backPath = pathSplit.join('/')
    }
  }
  return (
    <Layout backPath={backPath}>
        <Helmet
            title={pageContext.title}
            meta={[
                { name: 'description', content: pageContext.desc},
                { name: 'keywords', content: pageContext.keywords && pageContext.keywords.toString ? pageContext.keywords.toString() : '' }
            ]}
        >
        </Helmet>
        <Banner title={pageContext.title} desc={pageContext.desc} backgroundImage={pageContext.bgImg}></Banner>
        <div className="main">
          {linkObjects ? (
            <Categories>
              {linkObjects}
            </Categories>
          ) : null}
          {blurbObjects ? (
            <Post>
              {blurbObjects}
            </Post>
          ) : null}
          {backPath ? (
            <Post>
              <Link className="button" to={backPath}>Back</Link>
            </Post>
           ) : null}
        </div>
    </Layout>
  )
}

export default PostTemplate