export function AYAB() {
  return (
    <div>
      <a className="link" id="home" href="/">
        {" "}
        home{" "}
      </a>
      <br></br>
      <h1 className="header">
        {" "}
        Experimenting with open source software, <a href="https://ayab-knitting.com/"> AYAB </a>{" "}
      </h1>
      <p className="fonted">
        {" "}
        During the pandemic, I discovered a project called All Yarns Are Beautiful. It's open source software that
        connects a laptop to an 80s knitting machine to create custom textiles.
      </p>
      <p className="fonted">
        I bought a cheap knitting machine off eBay, restored it, soldered the custom Arduino shield following tutorials,
        and installed the software. I am documenting my work using it here!
      </p>
      <img className="unity_container" src="/images/ayab.jpg" />
    </div>
  );
}
