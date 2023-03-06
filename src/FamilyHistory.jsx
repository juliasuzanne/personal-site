export function FamilyHistory() {
  return (
    <div>
      <h2 className="header">Yee Family History Project </h2>
      <p className="fonted"> My mom's side of the family, working on recording history.</p>
      <a className="header" href="https://github.com/juliasuzanne/family-tree-frontend" target="_blank">
        {" "}
        GitHub Repo here
      </a>
      <a className="header" href="https://yeefamilyhistory.org/org_chart.html" target="_blank">
        Website with Interactive Family Tree
      </a>
      <p className="fonted">
        Website is still being developed, but so far I have used GoJS to create an interactive family tree with photos,
        birthday, and custom colors and styling. Recipes, photos, and historical documents coming soon!
      </p>
      <div className="games_images">
        <img className="game_image" id="two" src="TREEEXAMPLE.png" />
      </div>
    </div>
  );
}
