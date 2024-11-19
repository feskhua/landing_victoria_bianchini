"use client";

import type { ReactElement } from "react";
import { useEffect, useState } from "react";

import { ActionLink } from "@/src/components/ActionLink";
import { MenuLinks, socialIcons } from "@/src/components/Header/constants";
import { MobileView } from "@/src/components/Header/MobileView";
import { Icon, LogoSmIcon } from "@/src/components/icons";

import styles from "./styles.module.css";

export function Header(): ReactElement {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileBreakPoint = 1024;

    if (window.innerWidth <= mobileBreakPoint) {
      setIsMobile(true);
    }

    const headerResizeHandler = () => {
      setIsMobile(window.innerWidth <= mobileBreakPoint);
    };

    window.addEventListener("resize", headerResizeHandler);

    return () => {
      window.removeEventListener("resize", headerResizeHandler);
    };
  }, []);

  if (isMobile) {
    return <MobileView />;
  }

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#">
        <LogoSmIcon />
      </a>
      <nav className={styles.menu}>
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
      <ul className={styles.socialsList}>
        {socialIcons.map((IconComponent) => (
          <li key={IconComponent.name}>
            <a href="#">
              <Icon IconComponent={IconComponent} dimmed={false} />
            </a>
          </li>
        ))}
      </ul>
      <ActionLink url="#" text="Join SUBBD" />
    </header>
  );
}
