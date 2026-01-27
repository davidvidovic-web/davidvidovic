"use client";
import React, { useEffect } from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min")
    }
  }, []);
  

  return children;
};

export default Wrapper;
