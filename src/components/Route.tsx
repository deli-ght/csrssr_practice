interface RouteProps {
  path: string
  component: JSX.Element
}

export const Route = ({ path, component }: RouteProps) => {
  const currentPath = window.location.pathname

  if (currentPath !== path) return (<></>) as JSX.Element
  else return component
}
