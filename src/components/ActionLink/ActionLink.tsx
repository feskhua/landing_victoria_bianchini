import type { ReactElement } from "react";

import styles from "./styles.module.css";

interface Props {
  text: string;
  url: string;
  lg?: boolean;
}

export function ActionLink(props: Props): ReactElement {
  const { text, url, lg = false } = props;

  return (
    <a className={`${styles.actionLink} ${lg ? styles.lg : ""}`} href={url}>
      {text}
    </a>
  );
}
