const Root = () => {
  const goAbout = () => {
    history.pushState(undefined, "", "/about")
    const popStateEvent = new PopStateEvent("popstate", { state: "/about" })
    dispatchEvent(popStateEvent)
  }

  return (
    <section>
      <h1>root</h1>
      <button onClick={goAbout}>about</button>
    </section>
  )
}

export default Root
