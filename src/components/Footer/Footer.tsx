import type { ReactElement } from "react";

import { FooterSocialsList } from "@/src/components/Footer/constants";
import { Icon, LogoLgIcon, RedHeartIcon } from "@/src/components/icons";

import styles from "./styles.module.css";

export function Footer(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <a className={styles.logo} href="#">
          <LogoLgIcon />
        </a>

        <div className={styles.credsBox}>
          <div className={styles.creds}>
            <RedHeartIcon />
            <p className={styles.credsText}>by Creators for Creators</p>
          </div>
          <p className={styles.copyright}>
            Copyright © 2024 SUBBD. All rights reserved.
          </p>
        </div>
        <ul className={styles.socialsList}>
          {FooterSocialsList.map((IconComponent) => (
            <li key={IconComponent.name}>
              <a href="#">
                <Icon IconComponent={IconComponent} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
