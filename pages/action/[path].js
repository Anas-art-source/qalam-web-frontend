import React from "react";
import ActionSection from "../../component/ActionSection/ActionSection";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import { useRouter } from "next/router";

export default function ActionPage() {
  const router = useRouter();
  const { path } = router.query;

  return (
    <>
      <Header />
      <ActionSection path={path} />
      <Footer />
    </>
  );
}
