import {
  Box,
  Card,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import ImageCaraousel from "../pageComponents/imgCaraousel";
import ph1 from "../../assets/atbest/ph1.jpg";
import ph2 from "../../assets/atbest/ph2.jpg";
import ph3 from "../../assets/atbest/ph3.jpg";
import ph4 from "../../assets/atbest/ph4.jpg";
import ph5 from "../../assets/atbest/ph5.jpg";

import ar1 from "../../assets/atbest/artist/ph1.jpg";
import ar2 from "../../assets/atbest/artist/ph2.jpg";
import ar3 from "../../assets/atbest/artist/ph3.jpg";
import ar4 from "../../assets/atbest/artist/ph4.jpg";

import fg1 from "../../assets/atbest/funnyguy/f1.jpg";
import fg2 from "../../assets/atbest/funnyguy/f2.jpg";
import fg3 from "../../assets/atbest/funnyguy/f3.jpg";
import fg4 from "../../assets/atbest/funnyguy/f4.jpg";
import fg5 from "../../assets/atbest/funnyguy/f5.jpg";
import fg6 from "../../assets/atbest/funnyguy/f6.jpg";
import fg7 from "../../assets/atbest/funnyguy/f7.jpg";
import fg8 from "../../assets/atbest/funnyguy/f8.jpg";
import fg9 from "../../assets/atbest/funnyguy/f9.jpg";

export default function AtHisBest() {
  const phtography = [ph1, ph2, ph3, ph4, ph5];
  const artistry = [ar1, ar2, ar3, ar4];
  const funnyguy = [fg1, fg2, fg3, fg4, fg5, fg6, fg7, fg8, fg9];

  return (
    <VStack justifyContent="center">
      <Image
        src="https://scontent.fyto1-1.fna.fbcdn.net/v/t39.30808-6/490092218_10162889440845126_7584527457612539938_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=cEGedTM1p9cQ7kNvwFyYUxU&_nc_oc=AdmfphwUof4p1a0kHqs1lvT4z8DcaF_ty1aOLBli2an7dsnpR9l8RJoTPzpUq6s3uAM&_nc_zt=23&_nc_ht=scontent.fyto1-1.fna&_nc_gid=Fq8utK3WpP2ZBcULiSDIew&oh=00_AfKeu5M4ltc6Qwfoj5OHLVEJkac4lqq8A0Y1pq0_dL2CRQ&oe=682832A0"
        w="1000%"
      />
      <Heading as="h1" color="black" justifySelf="center" fontSize={25}>
        At His Best
      </Heading>
      <Text as="p" color="black">
        This is the phase that we love the most. In this phase he picks up his
        hobbies, such as painting and photography and tries to be humorous
        (misses 99.9999999999999% of the time).
      </Text>
      <Card.Root
        transition="all 0.2 ease"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        overflow="hidden"
        w="full"
        justifySelf="center"
        px={{ base: 4, md: "10%" }}
        py={8}
        bg="gray.300"
        border="none"
      >
        <HStack gap={3}>
          <VStack gap={5}>
            <Heading as="h4" color="black">
              Photographer
            </Heading>
            <ImageCaraousel images={phtography} />
          </VStack>
          <VStack gap={5}>
            <Heading as="h4" color="black">
              Artist
            </Heading>
            <ImageCaraousel images={artistry} />
          </VStack>
          <VStack gap={5}>
            <Heading as="h4" color="black">
              Funny Guy
            </Heading>
            <ImageCaraousel images={funnyguy} />
          </VStack>
        </HStack>
      </Card.Root>
    </VStack>
  );
}
