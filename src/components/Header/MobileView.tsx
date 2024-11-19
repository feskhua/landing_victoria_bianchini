import type { ReactElement } from "react";
import { useState } from "react";

import { ActionLink } from "@/src/components/ActionLink";
import { MenuLinks, socialIcons } from "@/src/components/Header/constants";
import { Icon, LogoSmIcon, Menu } from "@/src/components/icons";

import styles from "./mobileStyles.module.css";

export function MobileView(): ReactElement {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    const updatedOpen = !open;

    setOpen(updatedOpen);

    document.body.style.overflow = updatedOpen ? "hidden" : "scroll";
  };

  const calculateClasses = (className: string) => {
    return open ? `${className} ${styles.open}` : className;
  };

  return (
    <header className={calculateClasses(styles.header)}>
      <div className={styles.topToolbar}>
        <a className={styles.logo} href="#">
          <LogoSmIcon />
        </a>
        <ActionLink url="#" text="Join SUBBD" />
        <button
          className={calculateClasses(styles.button)}
          onClick={handleToggle}
          type="button"
        >
          <Menu />
        </button>
      </div>

      <div className={calculateClasses(styles.menu)}>
        <nav>
          <ul className={styles.menuList}>
            {MenuLinks.map((link) => (
              <li key={link}>
                <a className={styles.menuLink} href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className={styles.list}>
          {socialIcons.map((IconComponent) => (
            <li key={IconComponent.name}>
              <a href="#">
                <Icon IconComponent={IconComponent} dimmed={false} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
