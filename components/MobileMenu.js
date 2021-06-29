export default function MobileMenu({ setMenu }) {
  return (
    <>
      <nav className="mainNav">
        <div className="mainNavHeader">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            height="1.6rem"
            width="4rem"
            fill="url(#grad1)"
            viewBox="0 0 741 214"
            dangerouslySetInnerHTML={{ __html: '<use xlink:href="#logo"/>' }}
          />
          <p onClick={() => setMenu(false)}>×</p>
        </div>
        <ul className="mainNavList">
          <li>Status</li>
          <li>Shayeri</li>
          <li>Quotes</li>
          <li>Events</li>
        </ul>
      </nav>
    </>
  );
}
