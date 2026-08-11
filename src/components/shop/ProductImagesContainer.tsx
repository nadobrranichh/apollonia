import { Box, IconButton } from "@mui/material";
import ImageBox from "../ImageBox";
import { useRef, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ProductImagesContainer({
  imageUrls,
}: {
  imageUrls: string[];
}) {
  const imageHeights = useRef<number[]>(new Array(imageUrls.length).fill(0));

  const [currentImage, setCurrentImage] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const hasMultiple = imageUrls.length > 1;
  const prevImage = () => {
    setCurrentImage((i) => {
      const newIndex = i === 0 ? imageUrls.length - 1 : i - 1;
      setContainerHeight(imageHeights.current[newIndex]);
      return newIndex;
    });
  };

  const nextImage = () =>
    setCurrentImage((i) => {
      const newIndex = i === imageUrls.length - 1 ? 0 : i + 1;
      setContainerHeight(imageHeights.current[newIndex]);
      return newIndex;
    });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: hasMultiple ? "space-between" : "center",
        alignItems: "center",
        height: `${containerHeight}px`,
      }}
    >
      {hasMultiple && (
        <IconButton onClick={prevImage}>
          <ArrowBackIosNewIcon />
        </IconButton>
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
              borderRadius: "1rem",
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
        <IconButton onClick={nextImage}>
          <ArrowForwardIosIcon />
        </IconButton>
      )}
    </Box>
  );
}
