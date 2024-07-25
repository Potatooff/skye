import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[75%] mx-auto py-4">{children}</div>;
}
