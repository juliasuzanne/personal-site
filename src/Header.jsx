export function Header() {
  return (
    <nav className="navbar navbar-expand">
      <a className="navbar-brand" href="/">
        Julia Grimes
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/website">
              Capstone Project <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/AYAB">
              AYAB
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/unity">
              Unity
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/snake">
              Play Snake
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/yee">
              Yee History Project
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
