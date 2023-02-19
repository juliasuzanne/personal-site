export function AYAB() {
  return (
    <div>
      <h2 className="header">
        {" "}
        Experimenting with open source software &nbsp;<a href="https://ayab-knitting.com/">AYAB </a>{" "}
      </h2>
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
      <div className="calibration">
        <h3 className="header">Calibration and Troubleshooting</h3>
        <p className="fonted">
          {" "}
          Once I restored and hacked the machine initially, I did some small test runs of icons like flowers and text.
        </p>
        <p className="fonted">
          Then, I had to figure out what kinds of images work best - strong shadows and large, easily recognizable
          features, no big gaps of negative space. I created a custom template to evenly space out B and W within a few
          stitches of each other to avoid large stretches of yarn looping around the other side.{" "}
        </p>
        <div className="statue">
          <img src="/images/venusdemilo.jpg" />
          <img width="130" src="/images/statue.png" />
        </div>
        <p className="fonted">
          {" "}
          You can see how the image had to be altered to include black and white dotted pattern to avoid large areas of
          one color. You can also notice how much the image gets stretched out, I had to calibrate that by streching the
          image by a factor of 3.{" "}
        </p>
        <p className="fonted">
          The last major challenge at this step was removing the glitchy vertical lines. This was a mechanical error,
          caused by bent needles. I replaced them and the foam bar they rest on.
        </p>
      </div>
      <h3 className="header"> Continuous Experimentation</h3>
      <p className="fonted">
        I am continuing to experiment with what thread gauges work best, some additional glitching that's happening, and
        what materials are easiest to work with and sew afterwards. I've been serging the edges, but I'd like to find a
        way to quickly and more elegantly finish the edges.
      </p>
      <img src="/images/dress-front.png" />
      <img src="/images/dress.png" />
      <p className="fonted">
        {" "}
        I really like the aesthetic and reality-bending elements of the trompe l'oeil fashion trend, so I have been
        experimenting with using this "printing" method to create my own trompe l'oeil garments.{" "}
      </p>
      <img width="300px" src="/images/audrey.png" />
      <img width="400px" src="/images/jacket.png" />
      <p className="fonted">
        I tried felting with wool thread, with mixed results. It shrinks so much it becomes very expensive, although I
        like that it's possible to get a higher resolution. Pictures to follow.
      </p>
    </div>
  );
}
