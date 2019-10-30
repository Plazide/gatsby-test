import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/index.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Webbutvecklare från Mariestad" />
    <section className="hero">
		<div className="content">
			<div className="copy">
				<h1>Jag utvecklar moderna hemsidor</h1>
				<p>Jag är en driven <b>webbutvecklare</b> som utvecklar väldesignade och <b>snabba hemsidor</b> med hjälp av den senaste tekniken. Mitt uppdrag är att hjälpa <b>ditt företag</b> att uppnå en professionell närvaro på nätet.</p>
			</div>

			<div className="illustration">
				
			</div>
		</div>
			
	</section>
	
  </Layout>
)

export default IndexPage
