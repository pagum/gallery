import React, { useState, useEffect } from "react";
import { Image, GalleryProps } from "./data.types";
import {
  StyledImage,
  GalleryContainer,
  GalleryMessage
} from "./component.style";

export const Gallery = ({ searchTerm, filter }: GalleryProps) => {
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
  const content = images
    ? filter
      ? images.filter(image => image.type === filter)
      : images
    : undefined;

  return (
    <GalleryContainer>
      {content ? (
        content.length > 0 ? (
          <>
            <GalleryMessage>
              Search results for <strong>{searchTerm}</strong>
            </GalleryMessage>
            <div>
              {content.map(({ id, contentUrl, pageURL, description }) => (
                <a href={pageURL} key={id} target="_blank">
                  <StyledImage
                    key={id}
                    src={contentUrl}
                    alt={description}
                    title={description}
                  ></StyledImage>
                </a>
              ))}
            </div>
          </>
        ) : (
          <GalleryMessage>
            No content for you. Try with different search term!
          </GalleryMessage>
        )
      ) : (
        <GalleryMessage>Looking for images? Type a search term!</GalleryMessage>
      )}
    </GalleryContainer>
  );
};
