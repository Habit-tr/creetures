"use client";
import React, { useState, useEffect } from "react";
// import { Metadata } from 'next'; // This only works for servor components
import { supabase } from "../../layout";
import { Heading } from "@chakra-ui/react";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: 'Categories',
// }

export default function Categories() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await supabase.from("categories").select();
      setCategories(data || []);
    }
    fetchCategories();
  }, []);

  return (
    <>
      <Heading as="h1">Categories</Heading>
      {categories && categories.length
        ? categories.map((category) => (
            <Link
              href={`/home/challenges/categories/${category.name}`}
              key={category.id}
            >
              <Heading as="h2" size="md">
                {category.name}
              </Heading>
            </Link>
          ))
        : null}
    </>
  );
}
