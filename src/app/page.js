import Projects from "./components/Projects/Projects";
import Connect from "./components/Connect/Connect";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <section>
      <Hero />
      <Projects />
      <Connect />
    </section>
  );
}
