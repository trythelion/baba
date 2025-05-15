import { HStack, Image, IconButton, Box, Text } from "@chakra-ui/react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface Props {
  images: string[];
  startIndex?: number;
  autoscroll?: boolean;
}

export default function ImageCaraousel({
  images,
  startIndex = 0,
  autoscroll = true,
}: Props) {
  const [currentImageID, setCurrentImageID] = useState(startIndex);

  const prevImage = () => {
    setCurrentImageID((id) => (id === 0 ? images.length - 1 : id - 1));
  };

  const nextImage = () => {
    setCurrentImageID((id) => (id === images.length - 1 ? 0 : id + 1));
  };

  useEffect(() => {
    if (!autoscroll) return;

    const timer = setTimeout(nextImage, 2000);
    return () => clearTimeout(timer);
  }, [currentImageID, images.length, autoscroll]);

  return (
    <Box position="relative">
      <HStack gap={4} align="center">
        <IconButton
          aria-label="Previous image"
          onClick={prevImage}
          size="sm"
          variant="ghost"
          bg="none"
        >
          <FontAwesomeIcon icon={faArrowLeft} color="black" />
        </IconButton>

        <Image
          src={images[currentImageID]}
          alt={`Image ${currentImageID}`}
          w="200px"
          h="200px"
        />

        <IconButton
          aria-label="Next image"
          onClick={nextImage}
          size="sm"
          variant="ghost"
          bg="none"
        >
          <FontAwesomeIcon icon={faArrowRight} color="black" />
        </IconButton>
      </HStack>

      <HStack justify="center" mt={2} gap={2}>
        {images.map((_, idx) => (
          <Box
            key={idx}
            w="8px"
            h="8px"
            borderRadius="full"
            bg={idx === currentImageID ? "blue.500" : "gray.400"}
          />
        ))}
        <Text color="black">
          {currentImageID}/{images.length}
        </Text>
      </HStack>
    </Box>
  );
}
