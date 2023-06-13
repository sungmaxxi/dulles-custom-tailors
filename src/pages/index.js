import * as React from "react"
import NavBar from "../components/navbar.component"
import TitleComponent from "../components/title.component"

const IndexPage = () => {
  return (
    <div>
      <NavBar/>
      <TitleComponent/>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Dulles Custom Tailors</title>
