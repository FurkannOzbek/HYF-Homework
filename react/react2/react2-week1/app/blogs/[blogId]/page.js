"use client";
import { usePathname } from "next/navigation";

const formatWeWant = (word) => {
  return word.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word;
};

export default function Blog() {
  const path = usePathname();
  const lastPartofPath = path?.split("/").pop();

  return <div> {formatWeWant(lastPartofPath)}</div>;
}
