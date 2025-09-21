import type { ReactElement, ReactNode } from "react";

interface ICustomIconProps {
  children: ReactNode;
  disabled?: true;
  onClick: () => void;
}
export const CustomButton = ({
  children,
  disabled,
  onClick,
}: ICustomIconProps): ReactElement => {
  return (
    <button className="custom-button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
