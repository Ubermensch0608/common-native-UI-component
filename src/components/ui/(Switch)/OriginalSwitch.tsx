import { ComponentProps } from "react";
import styles from "./Switch.module.scss";

interface SwitchProps {
  label: string;
  checked?: boolean;
  onClick?: ComponentProps<"button">["onClick"];

  labelStyle?: ComponentProps<"div">["style"];
  labelClassName?: ComponentProps<"div">["className"];
  toggleStyle?: ComponentProps<"div">["style"];
  toggleClassName?: ComponentProps<"div">["className"];
}

export const OriginalSwitch = ({
  label,
  checked,
  labelClassName,
  labelStyle,
  toggleClassName,
  toggleStyle,
  onClick,
}: SwitchProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label && (
        <div
          className={[styles.label, labelClassName].join(" ")}
          style={labelStyle}
        >
          {label}
        </div>
      )}
      <div
        className={[
          styles.toggle,
          checked ? styles.on : styles.off,
          toggleClassName,
        ].join(" ")}
        style={toggleStyle}
      />
    </button>
  );
};
