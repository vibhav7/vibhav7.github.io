export default function Button({ children, ...delegated }) {
   return <button {...delegated}>{children}</button>;
}
