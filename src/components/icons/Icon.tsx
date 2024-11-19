import type { ReactElement } from "react";

import styles from "./styles.module.css";

interface Props {
  IconComponent: () => ReactElement;
  dimmed?: boolean;
}

export function Icon(props: Props): ReactElement {
  const { IconComponent, dimmed = true } = props;

  const classes = dimmed ? `${styles.icon} ${styles.dimmed}` : styles.icon;

  return (
    <div className={classes}>
      <IconComponent />
    </div>
  );
}
