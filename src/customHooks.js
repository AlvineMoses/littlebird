// src/customHooks.js
import { useState, useEffect } from "react";

export const useLoadArticles = () => {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  return [allArticles, setAllArticles];
};
