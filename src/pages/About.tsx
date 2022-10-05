const About = () => {
  const goMain = () => {
    history.pushState(undefined, "", "/")
    const popStateEvent = new PopStateEvent("popstate", { state: "/" })
    dispatchEvent(popStateEvent)
  }

  return (
    <section>
      <h1>about</h1>
      <button onClick={goMain}>go main</button>
    </section>
  )
}

export default About
