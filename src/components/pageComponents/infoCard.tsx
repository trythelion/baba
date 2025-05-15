import { Box, Heading, Image, VStack, Card } from "@chakra-ui/react";
import { Testimonial } from "../testimonial";
import home from "../../assets/home.jpg";
import work from "../../assets/work.jpg";
import best from "../../assets/best.jpg";
import bg from "../../assets/bgs/bgah.jpg";

function AboutPage() {
  return (
    <VStack gap={1}>
      <Image src={bg} w="100%" />

      <Heading fontSize="50px" mt={5} mb={5} as="h1" color="black">
        The three phases of the one and only SANJAY SEN!!!!
      </Heading>

      {/* Inline InfoCard replacements with just massive title and no body */}
      {/* 1. At Home */}
      <Card.Root
        transition="all 0.2s ease"
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
        <Image
          objectFit="cover"
          w={{ base: "80%", md: "300px" }}
          h="auto"
          src={home}
          alt="At Home"
          alignSelf="center"
          display={{ base: "block", md: "block" }}
        />
        <Box flex="1" p={{ base: 4, md: 8 }}>
          <Card.Body alignItems="start">
            <Card.Title color="black" mb={2}>
              <Heading as="h1" fontSize="6xl" fontWeight="extrabold">
                At Home
              </Heading>
            </Card.Title>
            {/* No body */}
          </Card.Body>
        </Box>
        {/* No right image since layout is "l" */}
      </Card.Root>

      {/* 2. At Work */}
      <Card.Root
        transition="all 0.2s ease"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        overflow="hidden"
        w="full"
        justifySelf="center"
        px={{ base: 4, md: "10%" }}
        py={8}
        bg="white"
        border="none"
      >
        {/* Left image hidden since layout is "r" */}
        <Box flex="1" p={{ base: 4, md: 8 }}>
          <Card.Body alignItems="end">
            <Card.Title color="black" mb={2}>
              <Heading
                as="h1"
                fontSize="6xl"
                fontWeight="extrabold"
                textAlign="right"
              >
                At Work
              </Heading>
            </Card.Title>
            {/* No body */}
          </Card.Body>
        </Box>
        <Image
          objectFit="cover"
          w={{ base: "80%", md: "300px" }}
          h="auto"
          src={work}
          alt="At Work"
          alignSelf="center"
          display={{ base: "none", md: "block" }}
        />
      </Card.Root>

      {/* 3. At His Best */}
      <Card.Root
        transition="all 0.2s ease"
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
        <Image
          objectFit="cover"
          w={{ base: "80%", md: "300px" }}
          h="auto"
          src={best}
          alt="At His Best"
          alignSelf="center"
          display={{ base: "block", md: "block" }}
        />
        <Box flex="1" p={{ base: 4, md: 8 }}>
          <Card.Body alignItems="start">
            <Card.Title color="black" mb={2}>
              <Heading as="h1" fontSize="6xl" fontWeight="extrabold">
                At His Best
              </Heading>
            </Card.Title>
            {/* No body */}
          </Card.Body>
        </Box>
        {/* No right image since layout is "l" */}
      </Card.Root>

      <Heading fontStyle="italic" fontSize="50px" as="h1" color="black">
        Testimonials
      </Heading>

      {/* Testimonials unchanged */}
      <Testimonial
        rating={5}
        quote="I’ve known this man for over two decades. He’s the kind of person who can be unbelievably irritating… and yet somehow, I find myself wanting him to keep annoying me. He’s silly—like, really silly—but he somehow still manages to crack me up. He’s snappy enough to make me roll my eyes daily, yet he's the first person I end up telling everything to (even the stuff he pretends not to care about).

Living without him? Not an option. Staying away from him? Also not an option. Having a moment of peace with him around? Hah—what’s that?

But here’s the thing: he’s my chaos, my noise, my daily dose of ridiculous... and I wouldn’t trade him for anything—not in this life, and not even in the afterlife (where I fully plan to keep annoying him right back).
"
        name="Sutanuka Sen"
        role="Wife"
        avatarUrl="https://media.licdn.com/dms/image/v2/D5603AQFHerWX7TRBpg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1665632404164?e=1752710400&v=beta&t=hwTuHSncJHGBwTGpjsZTZ_mFkO3D_rbh-Z_Z4iTRNV8"
      />
      <Testimonial
        quote="If Human was an umbrella term, Sanjay Sen is his own entire species. From art, to tech, to design and everything in between, he is always ready to talk about anything. He even gets into heated debates at rare times :). He’s the reason I like to code, and am where I am today. He is always logical.

Though we don’t always agree, *who are we kidding we rarely do*, at the end of the day, it’s all fine and well for both of us. Though he will never claim it, my dad is an ‘arteest’. If you ever see how much detail he puts into everything, from work, to his art, to his everyday organization, he likes things to be neat. He won’t organize his own work or living space, but he will make **damn** sure everything else is perfect.
"
        rating={1}
        name="Snehin Sutanuka Sen"
        role="Son"
        avatarUrl="https://media.licdn.com/dms/image/v2/D5603AQFAYTL8NgYCLQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1687380285471?e=1752710400&v=beta&t=swkGvoZBYxSkUn5BTi4iMMzs8s_bQyvJLGv2SPOPOhs"
      />
    </VStack>
  );
}

export default AboutPage;
