import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PageLayout = ({
  title = "Venus Vavadiya",
  description ="Software Developer",
  children
}) => (
  <>
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/ProfessionalImage.jpg" />

      <link
        rel="stylesheet"
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      />
    </Head>

    <div className="antialiased min-h-screen bg-gray-200">
      <Header />

      <div className="overflow-hidden">
        {children}
      </div>

      <Footer />
    </div>
  </>
);

export default PageLayout;
