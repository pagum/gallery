import React, { useState, useEffect } from "react";

export const Gallery = ({ searchTerm }: any) => {
  //tu consumerem wyciagne search term
  const [hasError, setErrors] = useState<boolean>(false);
  const [images, setImages] = useState<any>(undefined);

  const fetchData = async () => {
    const res = await fetch(
      `http://localhost:4000/search?searchTerm=${searchTerm}`
    );
    await res
      .json()
      .then(res => setImages(res))
      .catch(err => setErrors(err));
  };

  useEffect(() => {
    searchTerm && fetchData();
  }, [searchTerm]);

  return (
    <>
      {images && <div>search</div>}
      <div>gallery</div>
    </>
  );
};
