import type { ReactElement } from "react";

import { Icon } from "@/src/components/icons";

import styles from "./styles.module.css";

interface Props {
  title: string;
  url: string;
  img: string;
  IconComponent: () => ReactElement;
}

export function Card(props: Props): ReactElement {
  const { url, title, img, IconComponent } = props;
  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt={`${title} profile`} />
      <div className={styles.cardContent}>
        <div className={styles.icon}>
          <Icon IconComponent={IconComponent} />
        </div>
        <p className={styles.socialTitle}> {title}</p>
        <a className={styles.link} href={url}>
          Check profile
        </a>
      </div>
    </div>
  );
}
