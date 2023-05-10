import Image from "next/image";
import styles from "./styles.module.css";
import Accordion from "./Accordion";

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.mobileHeader}>
          <svg
            data-testid="icon-center-align"
            viewBox="0 0 512 512"
            style={{
              display: "inline-block",
              width: "1em",
              height: "1em",
              fontSize: "24px",
              color: "inherit",
              fill: "currentColor",
            }}
            aria-hidden="true"
            focusable="false"
          >
            <path d="M448 147H64c-8 0-15-7-15-15 0-9 7-15 15-15h384c8 0 15 6 15 15 0 8-7 15-15 15zm0 128H64c-8 0-15-7-15-15 0-9 7-15 15-15h384c8 0 15 6 15 15 0 8-7 15-15 15zm0 128H64c-8 0-15-7-15-15 0-9 7-15 15-15h384c8 0 15 6 15 15 0 8-7 15-15 15z"></path>
          </svg>
          <Image
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            width={150}
            height={150}
          />
          <button className="p-1 rounded-full bg-primary w-9 h-9">
            <svg
              data-testid="icon-user"
              viewBox="0 0 24 24"
              role="img"
              aria-label="User avatar"
              focusable="false"
              style={{
                display: "inline-block",
                width: "1em",
                height: "1em",
                fontSize: "24px",
                color: "rgb(255, 255, 255)",
                fill: "currentcolor",
              }}
            >
              <path d="M21.905 19.273c-.582-2.01-2.376-6.22-6.787-7.56 1.939-1.34 2.763-3.78 2.036-5.98A5.39 5.39 0 0 0 12.015 2C9.64 2 7.555 3.483 6.828 5.732c-.727 2.201.097 4.641 2.036 5.98-4.993 1.293-6.447 5.695-6.835 7.8a1.98 1.98 0 0 0 .484 1.675c.388.478.97.765 1.6.813H19.82a2.24 2.24 0 0 0 1.745-.813c.437-.527.534-1.244.34-1.914zM8.088 7.359c-.048-1.627.922-3.014 2.424-3.637a3.918 3.918 0 0 1 4.315.862c1.115 1.1 1.454 2.775.873 4.258a4.039 4.039 0 0 1-3.685 2.393c-2.181 0-3.927-1.77-3.927-3.876zm12.314 12.918a.694.694 0 0 1-.582.288H4.162c-.243 0-.437-.096-.534-.24-.145-.191-.193-.382-.145-.574.485-2.631 2.279-7.081 8.532-7.081 5.575 0 7.708 4.402 8.484 7.033.048.192 0 .383-.097.575z"></path>
            </svg>
          </button>
        </div>
        <div className={styles.desktopHeader}>
          <Image
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            width={150}
            height={150}
          />
          <div className={styles.linksContainer}>
            <button className={styles.linkButton}>Buy</button>
            <button className={styles.linkButton}>Sell</button>
            <button className={styles.linkButton}>Rent</button>
            <button className={styles.linkButton}>Mortgage</button>
            <button className={styles.linkButton}>Find Realtors</button>
            <button className={styles.linkButton}>My Home</button>
            <button className={styles.linkButton}>News & Insights</button>
          </div>
          <div className="flex mx-5 w-full">
            <button className="hidden text-sm border py-1 px-2  rounded-md  border-black mx-2">
              Manage Rentals
            </button>
            <button className="border text-sm py-1 px-2 rounded-md border-black">
              Advertise
            </button>
          </div>
          <div className={styles.buttonsContainer}>
            <button className="px-4 text-sm">Log In</button>
            <button className={styles.signUpButton}>Sign Up</button>
          </div>
        </div>
      </header>
      <main className="p-5">
        <div className={styles.mainContent}>
          <div className={styles.col}>
            <Image
              width={500}
              height={500}
              alt="home-image"
              src="https://ap.rdcpix.com/16c53cc698aecbfb79be01fcf5a25ddel-m2671495377od-w480_h360_x2.webp"
              style={{
                objectFit: "cover",
                borderRadius: 10,
                width: 740,
                height: 420,
              }}
            />
            <div className={styles.row}>
              <div className={styles.coloredSquare} />
              <p>Contingent</p>
            </div>
            <div className={styles.row}>
              <p className={`text-2xl ${styles.semibold}`}>$499,900</p>
              <p className="ml-5">
                Est.{" "}
                <span className="text-blue-700">
                  $3,209/mo{" "}
                  <svg
                    data-testid="icon-edit"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                    focusable="false"
                    style={{
                      display: "inline-block",
                      width: "1em",
                      height: "1em",
                      fontSize: "16px",
                      color: "rgb(51, 119, 204)",
                      fill: "currentcolor",
                    }}
                  >
                    <path d="m452 73-17-18c-10-10-23-15-36-15-14 0-27 5-36 15L87 329c-3 3-5 4-6 8L43 444c-2 6-2 12 2 17 3 5 9 8 15 8 2 1 4 1 5 0l96-38c8-5 15-11 21-18l270-268c20-20 20-53 0-72zM162 391c-4 4-9 8-14 12l-69 28 29-81 233-231 48 47zm269-267-28 27-48-47 29-28c8-8 21-8 30 0l17 18c4 4 7 9 7 15-1 5-3 11-7 15z"></path>
                  </svg>
                </span>
              </p>
            </div>
            <div className={styles.row}>
              <p className="mx-0 lg:block lg:mx-1">
                <span className={styles.semibold}>3</span> bed
              </p>
              <p className="mx-0 lg:block lg:mx-1">
                <span className={styles.semibold}>1.5</span> bath
              </p>
              <p className="mx-0 lg:block lg:mx-1">
                <span className={styles.semibold}>1,500</span> sqft
              </p>
              <p className="mx-0 lg:block lg:mx-1">
                <span className={styles.semibold}>1.21</span> acre lot
              </p>
            </div>
            <div className={styles.row}>
              <p>21 Lantern Ln, Acushnet, MA 02743</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <div className={styles.row}>
                <svg
                  data-testid="icon-home"
                  viewBox="0 0 512 512"
                  style={{
                    display: "inline-block",
                    width: "1em",
                    height: "1em",
                    fontSize: "24px",
                    color: "inherit",
                    fill: "currentColor",
                  }}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="m262 81 169 172h-52l-2 157c0 10-8 18-18 18H157c-5 0-10-2-13-5-4-4-6-9-6-14V253H82L262 81m0-30c-8 0-15 3-21 9L61 231c-9 9-12 22-7 33 5 12 15 19 28 19h26v126c0 27 22 49 49 49h202c26 0 48-21 48-48l1-127h23c12 0 23-7 27-18 5-11 2-24-6-33L284 60c-6-6-14-9-22-9z"></path>
                </svg>
                <div className="grid grid-flow-row">
                  <p className="font-semibold">Single Family</p>
                  <p className="text-[12px] text-gray-500">Property type</p>
                </div>
              </div>
              <div className={styles.row}>
                <svg
                  data-testid="icon-calendar"
                  viewBox="0 0 512 512"
                  style={{
                    display: "inline-block",
                    width: "1em",
                    height: "1em",
                    fontSize: "24px",
                    color: "inherit",
                    fill: "currentColor",
                  }}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M410 79h-22c-2 0-4 1-6 1v-8c2-12-3-25-14-32s-25-7-35 0c-11 7-17 20-15 32v7H192v-7c2-12-4-25-14-32-11-7-25-7-36 0-10 7-16 20-14 32v5h-23c-31 0-57 26-57 57v273c0 32 26 57 57 57h305c32 0 57-25 57-57V137c0-32-25-58-57-58zm-72-7c-1-4 1-9 5-12 3-2 9-2 12 0 4 3 6 8 5 12v53c1 4-1 9-5 12-3 3-9 3-12 0-4-3-6-8-5-12zm-189 0c-1-4 1-9 5-12 3-2 9-2 12 0 4 3 6 8 5 12v53c1 4-1 9-5 12-3 3-9 3-12 0-4-3-6-8-5-12zm-44 35h23v18c-2 12 4 25 14 32 11 7 25 7 36 0 10-7 16-20 14-32v-16h124v16c-2 12 4 25 15 32 10 7 24 7 35 0s16-20 14-32v-18c2 1 4 1 7 1h21c15 0 28 12 28 28v64H78v-66c0-15 12-27 27-27zm305 328H105c-15 0-27-13-27-28V222h360v185c0 15-13 28-28 28z"></path>
                </svg>
                <div className="grid grid-flow-row">
                  <p className="font-semibold">7 days</p>
                  <p className="text-[12px] text-gray-500">
                    Time on Realtor.com
                  </p>
                </div>
              </div>
              <div className={styles.row}>
                <svg
                  data-testid="icon-measure"
                  viewBox="0 0 512 512"
                  style={{
                    display: "inline-block",
                    width: "1em",
                    height: "1em",
                    fontSize: "24px",
                    color: "inherit",
                    fill: "currentColor",
                  }}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M470 90c0-27-22-47-48-47-13 0-25 5-34 14L56 388c-15 14-19 36-11 54 7 19 25 31 45 31l333-2c13 0 26-5 35-14s14-22 14-35zm-36 343c-3 2-6 4-10 4h-70v-46c0-6-4-10-10-10s-11 4-11 10v46h-49v-46c0-6-5-10-11-10s-11 4-11 10v47h-51v-47c0-6-5-10-10-10-6 0-11 4-11 10v47H90c-6 0-11-4-13-9-3-6-2-13 3-17L412 80c3-3 6-4 10-4s8 1 10 4c3 2 4 6 4 10v112h-44c-6 0-11 5-11 11s5 10 11 10h45v50h-45c-6 0-11 5-11 11s5 11 11 11h45v50h-45c-6 0-11 5-11 10 0 6 5 11 11 11h46v57c0 3-2 7-4 10z"></path>
                </svg>
                <div className="grid grid-flow-row">
                  <p className="font-semibold">$333</p>
                  <p className="text-[12px] text-gray-500">Price per sqft</p>
                </div>
              </div>
              <div className={styles.row}>
                <svg
                  data-testid="icon-indoor-garage"
                  viewBox="0 0 512 512"
                  style={{
                    display: "inline-block",
                    width: "1em",
                    height: "1em",
                    fontSize: "24px",
                    color: "inherit",
                    fill: "currentColor",
                  }}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M435 43c25 0 45 20 45 44v373c0 8-7 15-15 15-7 0-14-6-15-13V223h-77l17 62c1 1 1 3 1 4 10 8 16 20 16 34v69c0 17-11 33-26 40 0 1 1 3 1 4v10c0 14-12 26-26 26h-21c-14 0-26-12-26-26v-10H203v10c0 13-11 24-24 26h-23c-14 0-26-12-26-26v-10c0-1 1-3 1-4-15-7-26-23-26-40v-69c0-14 7-26 16-34v-2l1-2 17-62H62v237c0 8-7 15-15 15s-14-6-15-13V87c0-24 20-44 45-44zm-75 393h-29v10c0 2 1 4 3 4l1 1h21c2 0 4-3 4-5zm-179 0h-29v10c0 2 1 4 3 4l1 1h21c2 0 4-3 4-5zm-32-128h-1c-6 1-12 6-12 13l-1 2v69c0 8 7 15 15 15h212c8 0 15-7 15-15v-69c0-8-7-15-15-15h1l-10 2c-64 12-129 12-192 0zm196 30c8 0 15 6 15 15 0 8-7 14-15 14s-15-6-15-14c0-9 7-15 15-15zm-178 0c8 0 15 6 15 15 0 8-7 14-15 14s-15-6-15-14c0-9 7-15 15-15zm175-115H170l-16 56 13 2c59 11 120 11 180 0l11-2zm93-150H77c-8 0-15 6-15 14v106h388V87c0-7-5-13-13-14z"></path>
                </svg>
                <div className="grid grid-flow-row">
                  <p className="font-semibold">1</p>
                  <p className="text-[12px] text-gray-500">Garage</p>
                </div>
              </div>
              <div className={styles.row}>
                <svg
                  data-testid="icon-hammer"
                  viewBox="0 0 512 512"
                  style={{
                    display: "inline-block",
                    width: "1em",
                    height: "1em",
                    fontSize: "24px",
                    color: "inherit",
                    fill: "currentColor",
                  }}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="m467 247-2-2-40-40c-3-2-7-4-9-4l-19-3c4-8 2-19-4-27-24-28-50-52-77-75-45-30-94-51-147-58-11-2-22 5-26 13-4 9-4 22 2 30 21 26 68 75 81 90 7 6 7 17 0 25l-28 39L51 378c-13 12-15 34-2 47l4 4 30 25c7 9 15 15 24 15 8 0 19-4 25-10l60-58c30-28 62-60 90-85l40-34c2-3 4-5 9-7v17c0 5 2 9 4 11 0 2 30 30 43 43 6 6 12 8 21 8 11 0 21-4 30-11 13-12 25-25 38-40 11-19 11-41 0-56zM177 384l-60 58c-2 2-6 4-8 6-4 0-9-4-11-6l-30-26c-8-9-6-15-2-21l139-135 51 49zm265-102c-11 12-22 23-32 36-5 2-11 6-13 4-9-8-28-28-36-36v-24c0-4-3-8-5-10-17-11-40-9-53 8l-30 24-43-41 22-28c15-19 13-46-2-64-13-12-52-55-73-81 45 9 88 26 124 52 25 21 49 42 70 68-8 11-6 25 2 34 2 2 7 4 9 4l28 2 34 35c2 6 2 12-2 17z"></path>
                </svg>
                <div className="grid grid-flow-row">
                  <p className="font-semibold">1981</p>
                  <p className="text-[12px] text-gray-500">Year built</p>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <button className="rounded-full bg-primary px-3 py-1 text-white">
                Contact Agent
              </button>
              <button className="rounded-full border py-1 px-3 border-primary text-primary">
                Share this home
              </button>
            </div>
            <Accordion
              svg={
                <svg
                  data-testid="icon-calculator"
                  viewBox="0 0 512 512"
                  style={{
                    display: "inline-block",
                    width: "1em",
                    height: "1em",
                    fontSize: "24px",
                    color: "inherit",
                    fill: "currentColor",
                  }}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M325 196H193c-20-4-34-22-34-42 0-21 14-38 34-42h132c20 4 34 21 34 42 0 20-14 38-34 42zm-132-67c-12 1-22 12-22 25s10 24 22 25h132c13-1 22-12 22-25s-9-24-22-25zm3 181c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm80-66c0-10-8-19-19-19s-20 9-20 19c0 11 9 20 20 20s19-9 19-20zm79 0c0-10-8-19-19-19s-20 9-20 19c0 11 9 20 20 20s19-9 19-20zm-79 66c0-11-8-20-19-20s-20 9-20 20 9 20 20 20 19-9 19-20zm79 0c0-11-8-20-19-20s-20 9-20 20 9 20 20 20 19-9 19-20zm-159 65c0-10-9-19-20-19s-20 9-20 19c0 11 9 20 20 20s20-9 20-20zm80 0c0-10-8-19-19-19s-20 9-20 19c0 11 9 20 20 20s19-9 19-20zm-80-131c0-10-9-19-20-19s-20 9-20 19c0 11 9 20 20 20s20-9 20-20zm167 225H149c-31 0-57-25-57-57V100c0-32 26-57 57-57h214c31 0 57 25 57 57v312c0 32-26 57-57 57zM149 73c-15 0-27 12-27 27v312c0 15 12 27 27 27h214c15 0 27-12 27-27V100c0-15-12-27-27-27z"></path>
                </svg>
              }
              title="Utils"
              content="lorem ipsum "
            />
            <Accordion
              svg={
                <svg
                  data-testid="icon-open-house"
                  viewBox="0 0 512 512"
                  style={{
                    display: "inline-block",
                    width: "1em",
                    height: "1em",
                    fontSize: "24px",
                    color: "inherit",
                    fill: "currentColor",
                  }}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M375 47H119c-5 0-10 2-14 6l-2 2c-4 4-7 10-7 16v332c1 9 5 16 13 20 2 2 4 3 7 4l155 40c4 1 8 1 13 1 9 1 18-2 25-8 10-9 15-21 15-34h52c21 0 38-17 38-38V85c0-10-4-20-11-27-8-7-18-11-28-11zm-73 376c0 7-2 14-7 20-6 4-13 5-20 3l-155-41c-3-4-4-9-4-14V70h2l163 43c12 3 21 14 21 27zm82-35c0 4-4 8-8 8h-52V140c-1-22-16-41-37-48l-57-15h145c2 0 5 1 6 3 2 1 3 3 3 5zM272 267c0 11-8 20-19 20s-20-9-20-20 9-20 20-20 19 9 19 20z"></path>
                </svg>
              }
              title="Open houses"
              content="lorem ipsum "
            />
            <Accordion
              svg={
                <svg
                  data-testid="icon-property-features"
                  viewBox="0 0 24 24"
                  style={{
                    display: "inline-block",
                    width: "1em",
                    height: "1em",
                    fontSize: "24px",
                    color: "inherit",
                    fill: "currentColor",
                  }}
                  aria-hidden="true"
                  focusable="false"
                >
                  <g clipPath="url(#IconPropertyFeatures_svg__a)">
                    <path d="M3.89 10.64v11.72h9.844v-1.266H5.156V9.375H3.375l9.188-7.734 10.5 8.859.796-.984L12.562 0-.046 10.64h3.938zm3.563 7.782h6.234v-1.266H7.454v1.266zm8.578-1.688-.61 1.078 2.063 1.266 2.11-3.89-1.125-.563-1.453 2.719-.985-.61zm0 4.97-.61 1.077 2.063 1.266 2.11-3.89-1.125-.61-1.453 2.765-.985-.609zm-8.578-8.25h6.234v-1.267H7.454v1.266zm8.578-1.642-.61 1.032 2.063 1.265 2.11-3.89-1.125-.563-1.453 2.719-.985-.563z"></path>
                  </g>
                  <defs>
                    <clipPath id="IconPropertyFeatures_svg__a">
                      <path d="M0 0h24v24H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              }
              title="Property details"
              content="lorem ipsum "
            />
          </div>
        </div>
      </main>
    </div>
  );
}
