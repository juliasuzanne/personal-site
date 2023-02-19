export function Unity() {
  return (
    <div>
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

      <div id="unityvideo">
        <iframe className="unityvideo" controls="1" src="/images/unity-demo.mp4" title="video player"></iframe>

        <a href="https://github.com/juliasuzanne/2D_unity_scripting_101" className="unity_description_2">
          Github Repo
        </a>
      </div>
    </div>
  );
}
