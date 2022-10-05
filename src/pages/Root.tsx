import { useRouter } from "../hooks/useRouter"

const Root = () => {
  const { push } = useRouter()

  return (
    <section>
      <h1>root</h1>
      <button onClick={() => push("/about")}>about</button>
    </section>
  )
}

export default Root
