import { useRouter } from "../hooks/useRouter"

const About = () => {
  const { push } = useRouter()

  return (
    <section>
      <h1>about</h1>
      <button onClick={() => push("/")}>go main</button>
    </section>
  )
}

export default About
