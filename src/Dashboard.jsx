/* Default export */
export default function Dashboard(props) {
  return <h1>{props.title}</h1>;
}

/* Named export */
export function Navigation() {
  return <h1>Navigation</h1>;
}
