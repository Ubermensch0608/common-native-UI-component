import React, {
  ComponentProps,
  ComponentPropsWithRef,
  ReactNode,
  Ref,
  forwardRef,
  useId,
} from "react";
import styles from "./Switch.module.scss";

const SwitchContext = React.createContext<SwitchProps | null>(null);

const useSwitchContext = () => {
  const context = React.useContext(SwitchContext);
  if (!context) {
    throw new Error(
      "Switch: 해당 컴포넌트는 Switch 컴포넌트 내부에서만 사용할 수 있습니다."
    );
  }
  return context;
};

interface SwitchProps {
  id?: string;
  checked?: boolean;
  children?: ReactNode;
  style?: ComponentProps<"div">["style"];
  className?: ComponentProps<"div">["className"];
  onChange?: ComponentProps<"input">["onChange"];
}

export const Switch = ({
  children,
  checked,
  style,
  className,
  onChange,
  ...props
}: SwitchProps) => {
  const id = useId();

  return (
    <SwitchContext.Provider value={{ id, checked, onChange }}>
      <div
        style={style}
        className={[className, styles.button].join(" ")}
        {...props}
      >
        {children}
      </div>
    </SwitchContext.Provider>
  );
};

interface LabelProps extends ComponentProps<"label"> {
  children: ReactNode;
}

const Label = ({ children, ...props }: LabelProps) => {
  const { id } = useSwitchContext();

  return (
    <label htmlFor={id} className={styles.label} {...props}>
      {children}
    </label>
  );
};

interface ToggleProps extends ComponentPropsWithRef<"input"> {}

const Toggle = (
  { className, ...props }: ToggleProps,
  ref?: Ref<HTMLInputElement>
) => {
  const { id, checked, onChange } = useSwitchContext();

  return (
    <>
      <input
        id={id}
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        ref={ref}
        hidden
        {...props}
      />
      <label htmlFor={id} className={[styles.toggle, className].join(" ")} />
    </>
  );
};

Switch.Label = Label;
Switch.Toggle = forwardRef(Toggle);
