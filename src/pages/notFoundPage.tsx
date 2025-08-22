import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <main className="container">
      <h1>404</h1>
      <p>Page not found.</p>
      <p>
        <Link to="/">Go home</Link>
      </p>
    </main>
  );
}
