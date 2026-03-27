import { Box } from "@mui/material";
import SwipeButton from "./SwipeButton";
import ImageBox from "../ImageBox";
import { useRef, useState } from "react";

export default function ProductImagesContainer({
  imageUrls,
}: {
  imageUrls: string[];
}) {
  const imageHeights = useRef<number[]>(new Array(imageUrls.length).fill(0));

  const [currentImage, setCurrentImage] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const hasMultiple = imageUrls.length > 1;
  const prevImage = () =>
    setCurrentImage((i) => (i === 0 ? imageUrls.length - 1 : i - 1));
  const nextImage = () =>
    setCurrentImage((i) => (i === imageUrls.length - 1 ? 0 : i + 1));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: hasMultiple ? "space-between" : "center",
        alignItems: "center",
      }}
    >
      {hasMultiple && (
        <SwipeButton
          variant="light"
          direction="left"
          onClickCallback={prevImage}
        />
      )}
      <Box
        className="imagebox"
        sx={{
          position: "relative",
          overflow: "hidden",
          width: hasMultiple ? "80%" : "90%",
          height: `${containerHeight}px`,
        }}
      >
        {imageUrls.map((url, i) => (
          <ImageBox
            key={i}
            src={url}
            alt="icon"
            sx={{
              width: "100%",
              objectFit: "cover",
              position: "absolute",
              transform: `translateX(${100 * (i - currentImage)}%)`,
              transition: "transform 0.4s",
            }}
            onLoad={(e) => {
              const img = e.target as HTMLImageElement;
              const containerWidth = img.getBoundingClientRect().width;
              const height =
                (img.naturalHeight / img.naturalWidth) * containerWidth;
              imageHeights.current[i] = height;
              if (i === currentImage) setContainerHeight(height);
            }}
          />
        ))}
      </Box>
      {hasMultiple && (
        <SwipeButton
          variant="light"
          direction="right"
          onClickCallback={nextImage}
        />
      )}
    </Box>
  );
}
