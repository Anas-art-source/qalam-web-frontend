import React from "react";
import styles from "./ServiceSection.module.css";
import ServiceCard from "../utils/ServiceCard";
import Heading from "../utils/Heading";
import { useRouter } from "next/router";

function ServiceSection() {
  // router will push and pass query to requested page
  // query will be used to activate relevant filters -- such as Home tutor, Home-based tutor, Near me , etc
  const router = useRouter();

  return (
    <div className={styles.serviceSectionContainer}>
      <Heading secondary="We offer these Services" main="Our Services" />

      <div className={styles.backgroundImage}></div>
      <div className={styles.serviceCardContainer}>
        <ServiceCard
          heading="Home Tutors"
          onClick={() => router.push("/teacher")}
        />
        <ServiceCard
          heading="Home-based Tutors"
          onClick={() => router.push("/teacher")}
        />
        <ServiceCard
          heading="Assignment Helpers"
          onClick={() => router.push("/teacher")}
        />
      </div>
    </div>
  );
}

export default React.memo(ServiceSection);
