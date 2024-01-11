import { Button as Btn, ButtonProps } from "@mui/material";
import stl from "./index.module.scss";

interface ButtonDefaultProps extends ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonDefaultProps> = ({
  variant = "contained",
  children,
  ...props
}) => (
  <Btn variant={variant} className={stl.btn} {...props}>
    {children}
  </Btn>
);

export default Button;
