import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Heading,
  IconButton,
  Image,
  Portal,
  Positioner,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import ImageCaraousel from "../pageComponents/imgCaraousel";

import w1 from "../../assets/atwork/w1.jpg";
import w2 from "../../assets/atwork/w2.jpg";
import w3 from "../../assets/atwork/w3.jpg";
import w4 from "../../assets/atwork/w4.jpg";
import w5 from "../../assets/atwork/w5.jpg";
import w6 from "../../assets/atwork/w6.jpg";
import w7 from "../../assets/atwork/w7.jpg";
import w8 from "../../assets/atwork/w8.jpg";
import { FaX } from "react-icons/fa6";

export default function AtWork() {
  const images = [w1, w2, w3, w4, w5, w6, w7, w8];
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
      <Heading
        as="h1"
        color="black"
        mt={4}
        fontSize={25}
        mb={6}
        justifySelf="center"
      >
        At Work
      </Heading>
      <Text as="p" color="black" mb={6}>
        In this phase he has two sub catagories. Meeting and no meeting.You
        cannot breathe infront of him if he is in meeting mode, which he is 90%
        of his time. During the no meeting mode, he could be snappy, so arrive
        at your own risk!
      </Text>
      <SimpleGrid
        columns={{ base: 2, md: 4 }}
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
              alt={`At work image ${i + 1}`}
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
