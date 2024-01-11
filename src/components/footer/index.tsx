import Link from "next/link";
import { Button } from "@/lib";
import { BgRender, htmlContentBlockStatic } from "..";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import stl from "./index.module.scss";

function Footer() {
  return (
    <div className={stl.wrapper}>
      <div className={stl.body}>
        <div className={stl.mainInfo}>
          <div className={stl.mHeader}>
            <span style={{ color: "rgb(63, 149, 63)" }}>GO</span>
            <div className={stl.dDesc}>
              Web3 coin cachback what you can use anywhere
            </div>
          </div>

          <div className={stl.info}>
            <div className={stl.infoBlock}>
              <div className={stl.headerInfo}>Company</div>
              <Link className={stl.link} href="/">
                About us
              </Link>
              <Link className={stl.link} href="/">
                How it work
              </Link>
            </div>

            <div className={stl.infoBlock}>
              <div className={stl.headerInfo}>Links</div>
              <Link className={stl.link} href="/">
                Terms of Use
              </Link>
              <Link className={stl.link} href="/">
                Privacy Notice
              </Link>
            </div>

            <div className={stl.contactUs}>
              <Link href="mailto:vipdanek@gmail.com">
                <Button
                  variant="outlined"
                  color="success"
                  className={stl.btn}
                  startIcon={<ContactMailIcon width={25} />}
                >
                  Contact us
                </Button>
              </Link>
            </div>
          </div>

          <div className={stl.bottomInfo}>
            <h2>© 2023 GO Plus companie. All rights reserved.</h2>
            <div className={stl.bottomIcons}>
              <Link href="/">
                <LinkedInIcon />
              </Link>
              <Link href="/">
                <TelegramIcon />
              </Link>
              <Link href="/">
                <InstagramIcon />
              </Link>
              <Link href="/">
                <XIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* bg */}
      <div className={stl.bg}>
        <BgRender renderHtml={htmlContentBlockStatic} />
      </div>
    </div>
  );
}

export default Footer;
