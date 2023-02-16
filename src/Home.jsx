import { Face } from "./Face";
export function Home() {
  return (
    <div>
      {/* <button onClick={() => (window.location.href = "/paintings")}> Paintings </button> */}
      <a className="link" id="website" href="https://www.moon--egg.com/">
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

      <div className="face">
        <Face />
      </div>
      <div className="description">
        <p> Hello!</p>
        <p>
          {" "}
          My name is Julia Grimes. I'm an artist and programmer based out of Boston, MA. Thanks for visiting my site!
        </p>
        <p className="bold"> Get in touch: </p>
        <p> email: julia.s.grimes@gmail.com </p>
        <a href="https://www.linkedin.com/in/julia-grimes/"> LinkedIn</a>
        <p>
          <a href="https://github.com/juliasuzanne"> GitHub</a>
        </p>
      </div>
    </div>
  );
}
