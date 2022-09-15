import Counter from "../islands/Counter.tsx";
import { Container } from "../components/Container.tsx";

export default function Home() {
  const meta = {
    title: "Snackpedia",
    description: "Learn about any bugsnax!",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "preact,meta,document,html,tags",
      }
    }
  }

  return (
    <Container {...meta}>
      <img
        src="/logo.svg"
        width="128"
        height="128"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p>
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </Container>
  );
}
