import React from 'react';

const Header = (props) => {
  // this is equal to (🔥 es6):
  // const logo = props.logo;
  // const navItems = props.navItems;
  const { logo, navItems } = props;
  return (
    <header>
      <img src={logo} alt="Logo" />
      <nav>
        <ul>
          {
            navItems.map((navItem, index) =>
              (
                <li key={`navItem-${index}`}>
                  <a href={navItem.url}>
                    {navItem.title}
                  </a>
                </li>
              )
            )
          }
        </ul>
      </nav>
    </header>
  )
};

export default Header;
