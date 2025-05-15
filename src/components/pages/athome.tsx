import {
  Box,
  Dialog,
  Heading,
  IconButton,
  Image,
  Portal,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import ImageCaraousel from "../pageComponents/imgCaraousel";

import h1 from "../../assets/athome/h1.jpg";
import h2 from "../../assets/athome/h2.jpg";
import h3 from "../../assets/athome/h3.jpg";
import h4 from "../../assets/athome/h4.jpg";
import h5 from "../../assets/athome/h5.jpg";
import h6 from "../../assets/athome/h6.jpg";
import h7 from "../../assets/athome/h7.jpg";
import h8 from "../../assets/athome/h8.jpg";
import h9 from "../../assets/athome/h9.jpg";
import h10 from "../../assets/athome/h10.jpg";

import { FaX } from "react-icons/fa6";

export default function AtHome() {
  const images = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10];
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openDialogAtIndex = (index: number) => {
    setActiveIndex(index);
    setDialogOpen(true);
  };

  return (
    <VStack gap={1}>
      <Image
        src="https://scontent.fyto1-1.fna.fbcdn.net/v/t39.30808-6/490092218_10162889440845126_7584527457612539938_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=cEGedTM1p9cQ7kNvwFyYUxU&_nc_oc=AdmfphwUof4p1a0kHqs1lvT4z8DcaF_ty1aOLBli2an7dsnpR9l8RJoTPzpUq6s3uAM&_nc_zt=23&_nc_ht=scontent.fyto1-1.fna&_nc_gid=Fq8utK3WpP2ZBcULiSDIew&oh=00_AfKeu5M4ltc6Qwfoj5OHLVEJkac4lqq8A0Y1pq0_dL2CRQ&oe=682832A0"
        w="100%"
      />
      <Heading as="h1" color="black" fontSize={25} mb={6} justifySelf="center">
        At Home
      </Heading>
      <Text
        fontStyle="bold"
        fontSize={20}
        alignContent="center"
        color="black"
        mb={6}
      >
        This is the phase where he acts normal and fulfills all his duties (As a
        father, as a husband, as a driver, as a plower, as a barbecue chef)
      </Text>
      <SimpleGrid
        columns={{ base: 2, md: 5 }}
        gap={4}
        w="full"
        maxW="1000px"
        mb={10}
      >
        {images.map((img, i) => (
          <Box
            key={i}
            overflow="hidden"
            borderRadius="md"
            boxShadow="md"
            cursor="pointer"
            _hover={{ transform: "scale(1.2)" }}
            transition="transform 0.3s ease"
            onClick={() => openDialogAtIndex(i)}
          >
            <Image
              src={img}
              alt={`At home image ${i + 1}`}
              objectFit="cover"
              w="100%"
              h="140px"
              userSelect="none"
              draggable={false}
            />
          </Box>
        ))}
      </SimpleGrid>

      <Dialog.Root
        size="cover"
        placement="center"
        motionPreset="slide-in-bottom"
        open={dialogOpen}
        onOpenChange={() => {
          setDialogOpen(false);
        }}
      >
        <Portal>
          <Dialog.Backdrop bg="gray.500" opacity={0.5} />
          <Dialog.Positioner>
            <Dialog.Content
              maxW="90vw"
              maxH="90vh"
              bg="transparent"
              boxShadow="none"
              display="flex"
              flexDirection="column"
              alignItems="flex-end"
              p={4}
            >
              <Dialog.Trigger asChild>
                <IconButton size="sm" color="black">
                  <FaX />
                </IconButton>
              </Dialog.Trigger>
              <Box
                flex="1"
                w="full"
                maxH="full"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <ImageCaraousel
                  images={images}
                  startIndex={activeIndex}
                  autoscroll={false}
                />
              </Box>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </VStack>
  );
}
