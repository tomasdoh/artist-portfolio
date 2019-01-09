import React from "react"
import Layout from "../../../components/layout"
import Menu from "../../../components/aboutMenu"
import Link from "gatsby-link"

export default () => (
<Layout>
<Menu />
<Link to="/about/essays/mckay">Susan McKay - <i>‘And so they are ever returning to us, the dead’: Willie Doherty in Derry</i></Link>
<br />
<br />
<Link to="/about/essays/fisher">Jean Fisher - <i>Reflections</i></Link>
</Layout>
)
