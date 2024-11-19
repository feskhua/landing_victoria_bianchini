"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from "@/src/components/Socials/Card";
import {
  sliderBreakPointsConfig,
  SocialsList,
} from "@/src/components/Socials/constants";

import styles from "./styles.module.css";

export function Socials(): ReactElement {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileBreakPoint = 1024;

    if (window.innerWidth <= mobileBreakPoint) {
      setIsMobile(true);
    }

    const headerResizeHandler = () => {
      setIsMobile(window.innerWidth <= mobileBreakPoint);
    };

    window.addEventListener("resize", headerResizeHandler);

    return () => {
      window.removeEventListener("resize", headerResizeHandler);
    };
  }, []);

  return (
    <section className={styles.socials}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Follow our socials</h2>
        <p className={styles.description}>
          Check our profiles to stay up to date with the latest news from the
          SUBBD world.
        </p>

        {isMobile ? (
          <div>
            <div className={styles.navigation}>
              <button
                className={`${styles.navigationBtn} custom-swiper-button-next`}
                type="button"
              >
                Previous
              </button>
              <button
                className={`${styles.navigationBtn} custom-swiper-button-prev`}
                type="button"
              >
                Next
              </button>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              breakpoints={sliderBreakPointsConfig}
              className={styles.slider}
              pagination={{
                el: ".swiper-custom-pagination",
                clickable: true,
                bulletActiveClass: styles.activeBullet,
                bulletClass: styles.bullet,
              }}
              loop
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
            >
              {SocialsList.map((social) => (
                <SwiperSlide key={social.title}>
                  <Card
                    title={social.title}
                    url={social.url}
                    img={social.img}
                    IconComponent={social.icon}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={`swiper-custom-pagination ${styles.pagination}`} />
          </div>
        ) : (
          <ul className={styles.list}>
            {SocialsList.map((social) => (
              <li key={social.title} className={styles.listItem}>
                <Card
                  title={social.title}
                  url={social.url}
                  img={social.img}
                  IconComponent={social.icon}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
