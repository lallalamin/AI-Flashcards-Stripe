import { useCallback, useEffect } from "react";
import { keyframes, css } from "@emotion/css";
import PropTypes from "prop-types";

const animationFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  `;

const Container1 = ({ className = "" }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onBoxContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='boxContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={[
        css`
          width: 1205.4px;
          height: 2312px;
          max-width: 100%;
          opacity: 0;
          text-align: left;
          font-size: 16px;
          color: #1e1e1e;
          font-family: Inter;
          &.animate {
            animation: 1s ease 0s 1 normal forwards ${animationFadeIn};
          }
        `,
        className,
      ].join(" ")}
      data-animate-on-scroll
    >
      <div
        className={css`
          position: absolute;
          top: 0px;
          left: 3px;
          background-color: #fff;
          width: 1200px;
          height: 2312px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 2181px;
          left: 3px;
          width: 1200px;
          height: 131px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            background-color: #fff;
            border-top: 1px solid #d9d9d9;
            box-sizing: border-box;
            width: 1200px;
            height: 131px;
          `}
        />
        <div
          className={css`
            position: absolute;
            top: 57px;
            left: 1051px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 0px 8px;
            gap: 16px;
          `}
        >
          <img
            className={css`
              width: 24px;
              position: relative;
              height: 24px;
              overflow: hidden;
              flex-shrink: 0;
            `}
            alt=""
            src="/logo-instagram.svg"
          />
          <img
            className={css`
              width: 24px;
              position: relative;
              height: 24px;
              overflow: hidden;
              flex-shrink: 0;
            `}
            alt=""
            src="/logo-youtube.svg"
          />
          <img
            className={css`
              width: 24px;
              position: relative;
              height: 24px;
              overflow: hidden;
              flex-shrink: 0;
            `}
            alt=""
            src="/linkedin.svg"
          />
        </div>
        <div
          className={css`
            position: absolute;
            top: 57px;
            left: 876px;
            width: 141px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: flex-end;
            gap: 12px;
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 0px 0px 16px;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
            >
              <div
                className={css`
                  position: relative;
                  line-height: 140%;
                  font-weight: 600;
                `}
              >
                Terms of Service
              </div>
            </div>
          </div>
          <div
            className={css`
              width: 89px;
              position: relative;
              height: 22px;
              display: none;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0%;
                left: 0%;
                line-height: 140%;
              `}
            >
              Blog
            </div>
          </div>
          <div
            className={css`
              width: 89px;
              position: relative;
              height: 22px;
              display: none;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0%;
                left: 0%;
                line-height: 140%;
                display: none;
              `}
            >
              Best practices
            </div>
          </div>
          <div
            className={css`
              width: 89px;
              position: relative;
              height: 22px;
              display: none;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0%;
                left: 0%;
                line-height: 140%;
                display: none;
              `}
            >
              Colors
            </div>
          </div>
          <div
            className={css`
              width: 89px;
              position: relative;
              height: 22px;
              display: none;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0%;
                left: 0%;
                line-height: 140%;
              `}
            >
              Color wheel
            </div>
          </div>
          <div
            className={css`
              width: 89px;
              position: relative;
              height: 22px;
              display: none;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0%;
                left: 0%;
                line-height: 140%;
                display: none;
              `}
            >
              Support
            </div>
          </div>
          <div
            className={css`
              width: 89px;
              position: relative;
              height: 22px;
              display: none;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0%;
                left: 0%;
                line-height: 140%;
                display: none;
              `}
            >
              Developers
            </div>
          </div>
          <div
            className={css`
              width: 89px;
              position: relative;
              height: 22px;
              display: none;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0%;
                left: 0%;
                line-height: 140%;
                display: none;
              `}
            >
              Resource library
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 57px;
            left: 718px;
            width: 119px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 0px 0px 16px;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
            >
              <div
                className={css`
                  position: relative;
                  line-height: 140%;
                  font-weight: 600;
                `}
              >
                Privacy Policy
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 57px;
            left: 99px;
            line-height: 140%;
            font-weight: 600;
            color: #000;
            display: inline-block;
            width: 118px;
            height: 39px;
          `}
        >
          <p
            className={css`
              margin: 0;
            `}
          >
            BrainCards
          </p>
        </div>
        <img
          className={css`
            position: absolute;
            top: 47px;
            left: 29px;
            width: 53px;
            height: 37px;
            object-fit: cover;
          `}
          alt=""
          src="/untitled-artwork-2@2x.png"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 1356px;
          left: 161px;
          width: 913px;
          height: 554px;
          cursor: pointer;
          font-size: 24px;
        `}
        data-scroll-to="boxContainer"
        onClick={onBoxContainerClick}
      >
        <div
          className={css`
            position: absolute;
            top: 91px;
            left: 0px;
            width: 913px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 64px;
          `}
        >
          <div
            className={css`
              width: 432px;
              border-radius: 8px;
              background-color: #fff;
              border: 1px solid #d9d9d9;
              box-sizing: border-box;
              height: 463px;
              overflow: hidden;
              flex-shrink: 0;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 32px;
              gap: 24px;
              min-width: 300px;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-end;
                gap: 8px;
              `}
            >
              <div
                className={css`
                  width: 149px;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                `}
              >
                <div
                  className={css`
                    flex: 1;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                  `}
                >
                  <div
                    className={css`
                      flex: 1;
                      position: relative;
                      letter-spacing: -0.02em;
                      line-height: 120%;
                      font-weight: 600;
                    `}
                  >
                    Basic
                  </div>
                </div>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: baseline;
                  justify-content: flex-start;
                  gap: 8px;
                  font-size: 48px;
                `}
              >
                <div
                  className={css`
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                  `}
                >
                  <b
                    className={css`
                      position: relative;
                      letter-spacing: -0.02em;
                      line-height: 120%;
                    `}
                  />
                  <b
                    className={css`
                      position: relative;
                      letter-spacing: -0.02em;
                      line-height: 120%;
                    `}
                  >
                    Free
                  </b>
                </div>
                <div
                  className={css`
                    position: relative;
                    font-size: 14px;
                    line-height: 140%;
                  `}
                >
                  / month
                </div>
              </div>
              <div
                className={css`
                  align-self: stretch;
                  height: 226px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: 12px;
                  font-size: 16px;
                  color: #757575;
                `}
              >
                <div
                  className={css`
                    width: 89px;
                    display: none;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: 0px 0px 16px;
                    box-sizing: border-box;
                    color: #1e1e1e;
                  `}
                >
                  <div
                    className={css`
                      align-self: stretch;
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: flex-start;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 140%;
                        font-weight: 600;
                      `}
                    >
                      Text Strong
                    </div>
                  </div>
                </div>
                <div
                  className={css`
                    width: 89px;
                    position: relative;
                    height: 22px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0%;
                      left: 0%;
                      line-height: 140%;
                    `}
                  >
                    <ul
                      className={css`
                        margin: 0;
                        font-family: inherit;
                        font-size: inherit;
                        padding-left: 21px;
                      `}
                    >
                      <li className={css``}>Access basic flashcard features</li>
                    </ul>
                  </div>
                </div>
                <div
                  className={css`
                    width: 89px;
                    position: relative;
                    height: 22px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0%;
                      left: 0%;
                      line-height: 140%;
                    `}
                  >
                    <ul
                      className={css`
                        margin: 0;
                        font-family: inherit;
                        font-size: inherit;
                        padding-left: 21px;
                      `}
                    >
                      <li className={css``}>Limited storage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                align-self: stretch;
                border-radius: 8px;
                background-color: #ffaaaa;
                border: 1px solid #767676;
                overflow: hidden;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 12px;
                gap: 8px;
                font-size: 16px;
              `}
            >
              <img
                className={css`
                  width: 16px;
                  position: relative;
                  height: 16px;
                  overflow: hidden;
                  flex-shrink: 0;
                  display: none;
                `}
                alt=""
                src="/star.svg"
              />
              <b
                className={css`
                  position: relative;
                  line-height: 100%;
                `}
              >
                GET START
              </b>
              <img
                className={css`
                  width: 16px;
                  position: relative;
                  height: 16px;
                  overflow: hidden;
                  flex-shrink: 0;
                  display: none;
                `}
                alt=""
                src="/x.svg"
              />
            </div>
          </div>
          <div
            className={css`
              width: 399px;
              border-radius: 8px;
              background-color: #fff;
              border: 1px solid #d9d9d9;
              box-sizing: border-box;
              height: 463px;
              overflow: hidden;
              flex-shrink: 0;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 32px;
              gap: 24px;
              min-width: 300px;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-end;
                gap: 8px;
              `}
            >
              <div
                className={css`
                  width: 149px;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                `}
              >
                <div
                  className={css`
                    flex: 1;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                  `}
                >
                  <div
                    className={css`
                      flex: 1;
                      position: relative;
                      letter-spacing: -0.02em;
                      line-height: 120%;
                      font-weight: 600;
                    `}
                  >
                    Pro
                  </div>
                </div>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: baseline;
                  justify-content: flex-start;
                  gap: 8px;
                  font-size: 48px;
                `}
              >
                <div
                  className={css`
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                  `}
                >
                  <b
                    className={css`
                      position: relative;
                      letter-spacing: -0.02em;
                      line-height: 120%;
                    `}
                  >
                    $
                  </b>
                  <b
                    className={css`
                      position: relative;
                      letter-spacing: -0.02em;
                      line-height: 120%;
                    `}
                  >
                    5
                  </b>
                </div>
                <div
                  className={css`
                    position: relative;
                    font-size: 14px;
                    line-height: 140%;
                  `}
                >
                  / month
                </div>
              </div>
              <div
                className={css`
                  align-self: stretch;
                  height: 226px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: 12px;
                  font-size: 16px;
                  color: #757575;
                `}
              >
                <div
                  className={css`
                    width: 89px;
                    display: none;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: 0px 0px 16px;
                    box-sizing: border-box;
                    color: #1e1e1e;
                  `}
                >
                  <div
                    className={css`
                      align-self: stretch;
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: flex-start;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 140%;
                        font-weight: 600;
                      `}
                    >
                      Text Strong
                    </div>
                  </div>
                </div>
                <div
                  className={css`
                    width: 89px;
                    position: relative;
                    height: 22px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0%;
                      left: 0%;
                      line-height: 140%;
                    `}
                  >
                    <ul
                      className={css`
                        margin: 0;
                        font-family: inherit;
                        font-size: inherit;
                        padding-left: 21px;
                      `}
                    >
                      <li className={css``}>Unlimited storage</li>
                    </ul>
                  </div>
                </div>
                <div
                  className={css`
                    width: 89px;
                    position: relative;
                    height: 22px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0%;
                      left: 0%;
                      line-height: 140%;
                    `}
                  >
                    <ul
                      className={css`
                        margin: 0;
                        font-family: inherit;
                        font-size: inherit;
                        padding-left: 21px;
                      `}
                    >
                      <li className={css``}>Unlimited flashcard</li>
                    </ul>
                  </div>
                </div>
                <div
                  className={css`
                    width: 89px;
                    position: relative;
                    height: 22px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0%;
                      left: 0%;
                      line-height: 140%;
                    `}
                  >
                    <ul
                      className={css`
                        margin: 0;
                        font-family: inherit;
                        font-size: inherit;
                        padding-left: 21px;
                      `}
                    >
                      <li className={css``}>Priority support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                align-self: stretch;
                border-radius: 8px;
                background-color: #2e46cd;
                border: 1px solid #2c2c2c;
                overflow: hidden;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 12px;
                gap: 8px;
                font-size: 16px;
                color: #f5f5f5;
              `}
            >
              <img
                className={css`
                  width: 16px;
                  position: relative;
                  height: 16px;
                  overflow: hidden;
                  flex-shrink: 0;
                `}
                alt=""
                src="/star1.svg"
              />
              <b
                className={css`
                  position: relative;
                  line-height: 100%;
                `}
              >
                UPGRADE TO PRO
              </b>
              <img
                className={css`
                  width: 16px;
                  position: relative;
                  height: 16px;
                  overflow: hidden;
                  flex-shrink: 0;
                  display: none;
                `}
                alt=""
                src="/x1.svg"
              />
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 207px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 8px;
            text-align: center;
          `}
        >
          <div
            className={css`
              align-self: stretch;
              position: relative;
              letter-spacing: -0.02em;
              line-height: 120%;
              font-weight: 600;
            `}
          >
            Pricing
          </div>
          <div
            className={css`
              width: 499px;
              position: relative;
              letter-spacing: -0.02em;
              line-height: 120%;
              display: inline-block;
              height: 29px;
              flex-shrink: 0;
            `}
          >
            Choose the plan that fits your study needs!
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 784px;
          left: 83px;
          width: 1041px;
          height: 391px;
          font-size: 24px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 3px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 8px;
          `}
        >
          <div
            className={css`
              align-self: stretch;
              position: relative;
              letter-spacing: -0.02em;
              line-height: 120%;
              font-weight: 600;
            `}
          >
            Features
          </div>
          <div
            className={css`
              width: 1008px;
              position: relative;
              font-size: 20px;
              line-height: 120%;
              color: #757575;
              display: flex;
              align-items: center;
            `}
          >
            Unlock powerful features designed to boost your learning! From
            customizable flashcards and spaced repetition to rich media
            integration and progress tracking, our tools are built to help you
            study smarter and achieve more.
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 129px;
            left: 0px;
            width: 1041px;
            height: 262px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
            gap: 64px;
          `}
        >
          <div
            className={css`
              width: 301.3px;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 24px;
              min-width: 240px;
            `}
          >
            <img
              className={css`
                width: 32px;
                position: relative;
                height: 32px;
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
              src="/info.svg"
            />
            <div
              className={css`
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 16px;
                min-width: 160px;
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: 8px;
                `}
              >
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    letter-spacing: -0.02em;
                    line-height: 120%;
                    font-weight: 600;
                  `}
                >
                  Easy Text Input
                </div>
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    font-size: 16px;
                    line-height: 140%;
                    color: #757575;
                  `}
                >{`Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. `}</div>
              </div>
              <div
                className={css`
                  width: 384px;
                  display: none;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-start;
                  gap: 16px;
                  font-size: 16px;
                  color: #303030;
                `}
              >
                <div
                  className={css`
                    border-radius: 8px;
                    overflow: hidden;
                    display: none;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    padding: 12px;
                    gap: 8px;
                  `}
                >
                  <img
                    className={css`
                      width: 16px;
                      position: relative;
                      height: 16px;
                      overflow: hidden;
                      flex-shrink: 0;
                      display: none;
                    `}
                    alt=""
                    src="/star.svg"
                  />
                  <div
                    className={css`
                      position: relative;
                      line-height: 100%;
                    `}
                  >
                    Button
                  </div>
                  <img
                    className={css`
                      width: 16px;
                      position: relative;
                      height: 16px;
                      overflow: hidden;
                      flex-shrink: 0;
                      display: none;
                    `}
                    alt=""
                    src="/x.svg"
                  />
                </div>
                <div
                  className={css`
                    border-radius: 8px;
                    background-color: #e3e3e3;
                    border: 1px solid #767676;
                    overflow: hidden;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    padding: 12px;
                    gap: 8px;
                    color: #1e1e1e;
                  `}
                >
                  <img
                    className={css`
                      width: 16px;
                      position: relative;
                      height: 16px;
                      overflow: hidden;
                      flex-shrink: 0;
                      display: none;
                    `}
                    alt=""
                    src="/star.svg"
                  />
                  <div
                    className={css`
                      position: relative;
                      line-height: 100%;
                    `}
                  >
                    Button
                  </div>
                  <img
                    className={css`
                      width: 16px;
                      position: relative;
                      height: 16px;
                      overflow: hidden;
                      flex-shrink: 0;
                      display: none;
                    `}
                    alt=""
                    src="/x.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 24px;
              min-width: 240px;
            `}
          >
            <img
              className={css`
                width: 32px;
                position: relative;
                height: 32px;
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
              src="/info.svg"
            />
            <div
              className={css`
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 16px;
                min-width: 160px;
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: 8px;
                `}
              >
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    letter-spacing: -0.02em;
                    line-height: 120%;
                    font-weight: 600;
                  `}
                >
                  Smart Flashcard
                </div>
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    font-size: 16px;
                    line-height: 140%;
                    color: #757575;
                  `}
                >{`Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. `}</div>
              </div>
              <div
                className={css`
                  width: 384px;
                  display: none;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-start;
                  gap: 16px;
                  font-size: 16px;
                  color: #303030;
                `}
              >
                <div
                  className={css`
                    border-radius: 8px;
                    overflow: hidden;
                    display: none;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    padding: 12px;
                    gap: 8px;
                  `}
                >
                  <img
                    className={css`
                      width: 16px;
                      position: relative;
                      height: 16px;
                      overflow: hidden;
                      flex-shrink: 0;
                      display: none;
                    `}
                    alt=""
                    src="/star.svg"
                  />
                  <div
                    className={css`
                      position: relative;
                      line-height: 100%;
                    `}
                  >
                    Button
                  </div>
                  <img
                    className={css`
                      width: 16px;
                      position: relative;
                      height: 16px;
                      overflow: hidden;
                      flex-shrink: 0;
                      display: none;
                    `}
                    alt=""
                    src="/x.svg"
                  />
                </div>
                <div
                  className={css`
                    border-radius: 8px;
                    background-color: #e3e3e3;
                    border: 1px solid #767676;
                    overflow: hidden;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    padding: 12px;
                    gap: 8px;
                    color: #1e1e1e;
                  `}
                >
                  <img
                    className={css`
                      width: 16px;
                      position: relative;
                      height: 16px;
                      overflow: hidden;
                      flex-shrink: 0;
                      display: none;
                    `}
                    alt=""
                    src="/star.svg"
                  />
                  <div
                    className={css`
                      position: relative;
                      line-height: 100%;
                    `}
                  >
                    Button
                  </div>
                  <img
                    className={css`
                      width: 16px;
                      position: relative;
                      height: 16px;
                      overflow: hidden;
                      flex-shrink: 0;
                      display: none;
                    `}
                    alt=""
                    src="/x.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 24px;
              min-width: 240px;
            `}
          >
            <img
              className={css`
                width: 32px;
                position: relative;
                height: 32px;
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
              src="/info.svg"
            />
            <div
              className={css`
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 16px;
                min-width: 160px;
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: 8px;
                `}
              >
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    letter-spacing: -0.02em;
                    line-height: 120%;
                    font-weight: 600;
                  `}
                >
                  Accessible Anywhere
                </div>
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    font-size: 16px;
                    line-height: 140%;
                    color: #757575;
                  `}
                >{`Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. `}</div>
              </div>
              <div
                className={css`
                  width: 384px;
                  display: none;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-start;
                  gap: 16px;
                  font-size: 16px;
                  color: #303030;
                `}
              >
                <div
                  className={css`
                    border-radius: 8px;
                    overflow: hidden;
                    display: none;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    padding: 12px;
                    gap: 8px;
                  `}
                >
                  <img
                    className={css`
                      width: 16px;
                      position: relative;
                      height: 16px;
                      overflow: hidden;
                      flex-shrink: 0;
                      display: none;
                    `}
                    alt=""
                    src="/star.svg"
                  />
                  <div
                    className={css`
                      position: relative;
                      line-height: 100%;
                    `}
                  >
                    Button
                  </div>
                  <img
                    className={css`
                      width: 16px;
                      position: relative;
                      height: 16px;
                      overflow: hidden;
                      flex-shrink: 0;
                      display: none;
                    `}
                    alt=""
                    src="/x.svg"
                  />
                </div>
                <div
                  className={css`
                    border-radius: 8px;
                    background-color: #e3e3e3;
                    border: 1px solid #767676;
                    overflow: hidden;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    padding: 12px;
                    gap: 8px;
                    color: #1e1e1e;
                  `}
                >
                  <img
                    className={css`
                      width: 16px;
                      position: relative;
                      height: 16px;
                      overflow: hidden;
                      flex-shrink: 0;
                      display: none;
                    `}
                    alt=""
                    src="/star.svg"
                  />
                  <div
                    className={css`
                      position: relative;
                      line-height: 100%;
                    `}
                  >
                    Button
                  </div>
                  <img
                    className={css`
                      width: 16px;
                      position: relative;
                      height: 16px;
                      overflow: hidden;
                      flex-shrink: 0;
                      display: none;
                    `}
                    alt=""
                    src="/x.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 83px;
          left: 0px;
          width: 1205.4px;
          height: 500.3px;
        `}
      >
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 1205.4px;
            height: 500.3px;
            object-fit: contain;
          `}
          alt=""
          src="/image-1@2x.png"
        />
        <div
          className={css`
            position: absolute;
            top: 162px;
            left: 72px;
            border-radius: 40px;
            background-color: #fff;
            width: 1067px;
            height: 146px;
          `}
        />
        <div
          className={css`
            position: absolute;
            top: 338px;
            left: 507px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 16px;
          `}
        >
          <div
            className={css`
              border-radius: 8px;
              background-color: #fff;
              border: 1px solid #1e1e1e;
              overflow: hidden;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 12px;
              gap: 8px;
            `}
          >
            <img
              className={css`
                width: 16px;
                position: relative;
                height: 16px;
                overflow: hidden;
                flex-shrink: 0;
                display: none;
              `}
              alt=""
              src="/star.svg"
            />
            <b
              className={css`
                position: relative;
                line-height: 100%;
              `}
            >
              Get start!
            </b>
            <img
              className={css`
                width: 16px;
                position: relative;
                height: 16px;
                overflow: hidden;
                flex-shrink: 0;
                display: none;
              `}
              alt=""
              src="/x.svg"
            />
          </div>
          <div
            className={css`
              border-radius: 8px;
              background-color: #2e46cd;
              border: 1px solid #303030;
              overflow: hidden;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 12px;
              gap: 8px;
              color: #f5f5f5;
            `}
          >
            <img
              className={css`
                width: 16px;
                position: relative;
                height: 16px;
                overflow: hidden;
                flex-shrink: 0;
                display: none;
              `}
              alt=""
              src="/star2.svg"
            />
            <b
              className={css`
                position: relative;
                line-height: 100%;
              `}
            >
              Sign up
            </b>
            <img
              className={css`
                width: 16px;
                position: relative;
                height: 16px;
                overflow: hidden;
                flex-shrink: 0;
                display: none;
              `}
              alt=""
              src="/x2.svg"
            />
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 185px;
            left: 98px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 8px;
            text-align: center;
            font-size: 43px;
            color: #0c0c0d;
          `}
        >
          <b
            className={css`
              align-self: stretch;
              position: relative;
              letter-spacing: -0.03em;
              line-height: 120%;
            `}
          >
            Master your learning with lightning-fast flashcards!
          </b>
          <div
            className={css`
              align-self: stretch;
              position: relative;
              font-size: 32px;
              line-height: 120%;
            `}
          >
            The easiest way to create flashcards from your text
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 22px;
          left: 24px;
          width: 1153px;
          height: 42px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 10px;
            left: 975px;
            width: 178px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 12px;
          `}
        >
          <div
            className={css`
              flex: 1;
              border-radius: 8px;
              background-color: #fff;
              border: 1px solid #767676;
              overflow: hidden;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 8px;
              gap: 8px;
            `}
          >
            <img
              className={css`
                width: 16px;
                position: relative;
                height: 16px;
                overflow: hidden;
                flex-shrink: 0;
                display: none;
              `}
              alt=""
              src="/star.svg"
            />
            <div
              className={css`
                position: relative;
                line-height: 100%;
              `}
            >
              Sign up
            </div>
            <img
              className={css`
                width: 16px;
                position: relative;
                height: 16px;
                overflow: hidden;
                flex-shrink: 0;
                display: none;
              `}
              alt=""
              src="/x.svg"
            />
          </div>
          <div
            className={css`
              flex: 1;
              border-radius: 8px;
              background-color: #2e46cd;
              border: 1px solid #2e46cd;
              overflow: hidden;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 8px;
              gap: 8px;
              color: #f5f5f5;
            `}
          >
            <img
              className={css`
                width: 16px;
                position: relative;
                height: 16px;
                overflow: hidden;
                flex-shrink: 0;
                display: none;
              `}
              alt=""
              src="/star1.svg"
            />
            <div
              className={css`
                position: relative;
                line-height: 100%;
              `}
            >
              Login
            </div>
            <img
              className={css`
                width: 16px;
                position: relative;
                height: 16px;
                overflow: hidden;
                flex-shrink: 0;
                display: none;
              `}
              alt=""
              src="/x1.svg"
            />
          </div>
        </div>
        <b
          className={css`
            position: absolute;
            top: 10px;
            left: 68px;
            line-height: 100%;
            display: none;
            color: #000;
            align-items: center;
            width: 133px;
            height: 22px;
          `}
        >
          BrainCards
        </b>
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 53px;
            height: 37px;
            object-fit: cover;
          `}
          alt=""
          src="/untitled-artwork-2@2x.png"
        />
        <div
          className={css`
            position: absolute;
            top: 10px;
            left: 273px;
            width: 544px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-end;
            gap: 8px;
          `}
        >
          <div
            className={css`
              border-radius: 8px;
              background-color: #f5f5f5;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 8px;
            `}
          >
            <div
              className={css`
                position: relative;
                line-height: 100%;
              `}
            >
              Pricing
            </div>
          </div>
          <div
            className={css`
              border-radius: 8px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 8px;
            `}
          >
            <div
              className={css`
                position: relative;
                line-height: 100%;
              `}
            >
              Community
            </div>
          </div>
          <div
            className={css`
              border-radius: 8px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 8px;
            `}
          >
            <div
              className={css`
                position: relative;
                line-height: 100%;
              `}
            >
              About
            </div>
          </div>
          <div
            className={css`
              border-radius: 8px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 8px;
            `}
          >
            <div
              className={css`
                position: relative;
                line-height: 100%;
              `}
            >
              Resources
            </div>
          </div>
          <div
            className={css`
              border-radius: 8px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 8px;
            `}
          >
            <div
              className={css`
                position: relative;
                line-height: 100%;
              `}
            >
              Contact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
};

export default Container1;
