export function Unity() {
  return (
    <div>
      <a className="link" id="home" href="/">
        {" "}
        home{" "}
      </a>
      <div className="unity_description">
        <p>
          {" "}
          I am learning C# by creating a simple point and click Unity game. The walk cycles were animated using
          Procreate and Moho.{" "}
        </p>
        <p>
          {" "}
          Currently, you can pick up items when you are near enough, combine items, and drop items using the inventory
          UI down at the bottom.{" "}
        </p>
      </div>
      <img className="unity_container" src="/images/unity_game.png" />
    </div>
  );
}
