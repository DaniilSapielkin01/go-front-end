"use client";
import { useAuthStore } from "@/stores/stores";
import {
  BgRender,
  Footer,
  Header,
  htmlContentBlock,
  htmlContentBlockStatic,
} from "..";
import { Button } from "@/lib";

import stl from "./index.module.scss";
import styled from "styled-components";

import Link from "next/link";

const Wrapper = styled.div``;

const Landing = () => {
  const isLoadAuth = useAuthStore(({ loading }) => loading);
  const setLoadAuth = useAuthStore(({ setLoading }) => setLoading);

  return (
    <Wrapper>
      <Header />
      <div className={stl.body}>
        <section className={stl.sectionHeader}>
          <div className={stl.section}>
            {/* header main info */}
            <div className={stl.mainInfo}>
              <h1>
                Introducing Web3 cashback coins
                <span style={{ color: "rgb(63, 149, 63)" }}> GO </span>
                Globally usable anywhere in the world
              </h1>
              <p>
                Their uniqueness lies in the ability to be used worldwide - your
                <span style={{ color: "rgb(63, 149, 63)" }}> cashback </span>is
                available everywhere the
                <span style={{ color: "rgb(63, 149, 63)" }}> GO </span> system
                is accessible.
              </p>

              <Link href="/signup">
                <Button className={stl.btn} variant="outlined" color="success">
                  Register now
                </Button>
              </Link>
            </div>

            {/* small cards list */}
            <div className={stl.smallCardsList}>
              {/*  */}
              <div className={stl.smallCard}>
                <span>ICON</span>
                <div className={stl.hCard}>
                  Access to GO digital securities ecosystem
                </div>
                <div className={stl.dCard}>
                  Legally compliant environment to manage security tokens and
                  other digital assets.
                </div>
              </div>

              <div className={stl.smallCard}>
                <span>ICON</span>
                <div className={stl.hCard}>One token for everything</div>
                <div className={stl.dCard}>
                  Their uniqueness lies in the ability to use them anywhere in
                  the world. Enjoy the convenience of global cashback!
                </div>
              </div>

              <div className={stl.smallCard}>
                <span>ICON</span>
                <div className={stl.hCard}>
                  Legally compliant access to DeFi apps
                </div>
                <div className={stl.dCard}>
                  Unlock compliant operations with cryptocurrencies in web3
                  environment.
                </div>
              </div>
              {/*  */}
            </div>
            <div className={stl.bgBlock}>
              <BgRender renderHtml={htmlContentBlock} />
            </div>
            <div className={stl.bgBlockStatic}>
              <BgRender renderHtml={htmlContentBlockStatic} />
            </div>
            {/*  */}
          </div>
        </section>
        <section>1</section>
        <Footer />
      </div>
      {/* <Footer /> */}
    </Wrapper>
  );
};

export default Landing;
