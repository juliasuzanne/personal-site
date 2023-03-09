import { Face } from "./Face";
export function Home() {
  return (
    <div>
      {/* <button onClick={() => (window.location.href = "/paintings")}> Paintings </button> */}
      {/* <nav class="navbar navbar-light bg-light">
        <a className="link" id="website" href="/website">
          {" "}
          website{" "}
        </a>

        <a className="link" id="paintings" href="/paintings">
          {" "}
          paintings{" "}
        </a>

        <a className="link" id="ayab" href="/ayab">
          {" "}
          AYAB{" "}
        </a>

        <a className="link" id="unity" href="/unity">
          {" "}
          Unity{" "}
        </a>

        <a className="link" id="yee" href="/yee">
          Yee History Project
        </a>

        <a className="link" id="snake" href="/snake">
          Play Snake
        </a>
      </nav> */}

      <div className="face">
        <Face />
      </div>
      <div className="description">
        <p> Hello!</p>
        <p>
          {" "}
          My name is Julia Grimes. I'm an artist and programmer based out of Boston, MA. I enjoy painting and baking in
          my free time. Thanks for visiting my site!
        </p>
        <p className="bold"> Get in touch: </p>
        <p> email: julia.s.grimes@gmail.com </p>
        <a href="https://www.linkedin.com/in/julia-grimes/" target="_blank">
          {" "}
          LinkedIn
        </a>
        <p>
          <a href="https://github.com/juliasuzanne" target="_blank">
            {" "}
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
