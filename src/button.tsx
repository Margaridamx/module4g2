import { ReactNode } from "react";
import "./Button.css"

type Props = {
    style: string | undefined;
    children: ReactNode;
}

const Button = ({ children, style }:Props) => {
    return (
      <>
        <div className="button-container">
          <button className={style}>
            {children}
          </button>
        </div>
      </>
    )
  }

export default Button