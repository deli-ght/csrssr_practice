import { ReactNode } from "react"

interface RouterProps {
  children: ReactNode
}

export const Router = ({ children }: RouterProps) => {
  return <section>{children}</section>
}
