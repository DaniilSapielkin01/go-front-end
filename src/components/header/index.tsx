"use client";

import Link from "next/link";
import { Button } from "@/lib";

import stl from "./index.module.scss";

const Header = () => {
  return (
    <div className={stl.wrapper}>
      <div className={stl.body}>
        <div>ICON</div>
        <div className={stl.info}>
          <div className="mr-6">1 GO ~ 0.25 USDT</div>
          <Link href="/login">
            <Button variant="outlined" color="success" className={stl.btn}>
              Sign in
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
