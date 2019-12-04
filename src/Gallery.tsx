import React, { useState, useEffect } from "react";
import { Image } from "./data.types";
import {
  StyledImage,
  GalleryContainer,
  GalleryMessage,
  ImagesWrapper
} from "./component.style";

export const Gallery = ({ searchTerm }: any) => {
  //tu consumerem wyciagne search term
  const [hasError, setErrors] = useState<boolean>(false);
  const [images, setImages] = useState<Image[] | undefined>(undefined);

  const fetchData = async () => {
    const res = await fetch(
      `http://localhost:4000/search?searchTerm=${searchTerm}`
    );
    await res
      .json()
      .then(res => setImages(res.data.images))
      .catch(err => setErrors(err));
  };

  useEffect(() => {
    searchTerm && fetchData();
  }, [searchTerm]);
  return (
    <GalleryContainer>
      {images ? (
        <>
          <GalleryMessage>
            Search results for <strong>{searchTerm}</strong>
          </GalleryMessage>
          <ImagesWrapper>
            {images.map(({ id, contentUrl, pageURL, description }) => (
              <StyledImage
                key={id}
                src={contentUrl}
                alt={description}
                onClick={() => (window.location.href = pageURL)}
              ></StyledImage>
            ))}
          </ImagesWrapper>
        </>
      ) : (
        <GalleryMessage>Looking for images? Type a search term!</GalleryMessage>
      )}
    </GalleryContainer>
  );
};
