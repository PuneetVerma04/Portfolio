import { useRef } from "react";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Leadership } from "./components/Leadership";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { NowPlayingBar } from "./components/NowPlayingBar";
import { MobileNav } from "./components/MobileNav";

function App() {
  const scrollRef = useRef<HTMLElement>(null);

  return (
    <div className="flex h-screen flex-col bg-black text-white">
      <div className="flex min-h-0 flex-1 gap-2 p-2 pb-0">
        <Sidebar />

        <main
          ref={scrollRef}
          className="scrollarea relative min-h-0 flex-1 scroll-smooth overflow-y-auto rounded-lg bg-base"
        >
          <TopBar scrollRef={scrollRef} />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Leadership />
          <Certificates />
          <Contact />
          <div className="h-2" />
        </main>
      </div>

      <NowPlayingBar />
      <MobileNav />
    </div>
  );
}

export default App;
