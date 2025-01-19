import CodeSnippetsCarousel from "@/components/CodeSnippetsCarousel";
import Image from "next/image";
import Game from "@/components/Game";

export default function Home() {
  return (
    <div className="h-full grid grid-cols-2">
      <div className="h-full flex justify-end items-center">
        <div>
          <div className="text-white">
            <p className="text-balance">Hi all. I am</p>
            <p className="text-headline">Micheal Weaver</p>
            <p className="text-subheadline text-secondary-blue">
              {">"} Front-end developer
            </p>
          </div>
          <div className="mt-10">
            <p className="text-secondary-muted">
              // complete the game to continue
            </p>
            <p className="text-secondary-muted">
              // you can also see it on my github page
            </p>
            <p>
              {" "}
              <span className="text-secondary-blue">const</span>{" "}
              <span className="text-accent-green">githubLink</span>{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-accent-orange">
                <a target="_blank" href="https://github.com/rrakesh28">
                  "https://github.com/rrakesh28"
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/images/home_bg.png')] bg-contain h-full grid place-items-center">
      <Game />
      </div>
    </div>
  );
}
