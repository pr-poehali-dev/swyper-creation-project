import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductSwiper from "../components/ProductSwiper";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <ProductSwiper />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
