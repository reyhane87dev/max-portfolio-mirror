"use client";
import Image from "next/image";
import animation from "./animation";
import { useState, useRef, useCallback, memo } from "react";
import type { HoveredItem } from "./types/HoveredItem";
import { useGSAP } from "@gsap/react";

function Works() {
  const [hoveredItem, setHoveredItem] = useState<HoveredItem>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(animation, [hoveredItem]);

  const onMouseEnter = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const target = event.currentTarget;
      setHoveredItem(target.dataset.name as HoveredItem);
    },
    []
  );

  const onMouseLeave = useCallback(() => {
    setHoveredItem(null);
  }, []);

  return (
    <div ref={containerRef} id="works" className="works text-white ">
      <section>
        <div className="flex-between">
          <span></span>
          <span>(WORKS.)</span>
          <span>[N.004]</span>
        </div>
        <div className="content-container">
          <h2>
            SOME OF THE LATEST <br /> PROJECTS
          </h2>

          <div className="work-image-container">
            {hoveredItem !== null && (
              <Image
                alt="max's work"
                height={200}
                src={
                  hoveredItem == "OLHA" ? "/work1.jpg" : (
                    hoveredItem == "MAX" ? "/work3.jpg" : (
                      hoveredItem == "CAPITALS" ? "/work2.jpg" : (
                        hoveredItem == "RAINE" ? "/work4.jpg" : "/work5.jpg"
                      )
                    )
                  )
                  }
                width={400}
              />
            )}
          </div>

          <div className="content">
            <div className="work-title-row">
              <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                data-name="OLHA"
              >
                <span className="case">CASE 1</span>
                <span>OLHALAZARIEVA</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                data-name="MAX"
              >
                <span className="case">CASE 2</span>
                <span>MAX MILKIN</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
            <div className="work-title-row">
              <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                data-name="CAPITALS"
              >
                <span className="case">CASE 3</span>
                <span>TWO CAPITALS STUDIO</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                data-name="RAINE"
              >
                <span className="case">CASE 4</span>
                <span>RAINE ARCHITECTS</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
            <div className="last-work-title-row">
              <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                data-name="MOSAIC"
              >
                <span className="case">CASE 5</span>
                <span>MOSAIC OF CULTURES</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default memo(Works);
