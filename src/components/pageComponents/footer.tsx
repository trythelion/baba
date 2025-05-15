import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Link,
  Avatar,
  Menu,
  Portal,
} from "@chakra-ui/react";
import { MdClose, MdMenu } from "react-icons/md";
import { useState, useEffect } from "react";

function Footer() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      as="footer"
      bg="gray.900"
      color="gray.100"
      px={{ base: 4, md: 6 }}
      py={4}
      boxShadow={scrolled ? "md" : "none"}
      w="100vw"
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="6xl"
        mx="auto"
        direction={{ base: "column", md: "row" }}
      >
        {/* Profile */}
        <HStack gap={4} mb={{ base: 4, md: 0 }}>
          <Avatar.Root size="lg">
            <Avatar.Image src="https://gravatar.com/avatar/13a9ae24e2a0e254448d1ae01eb5f06d56cfda4baa5d55d654add1284f2be42a" />
            <Avatar.Fallback name="Sanjay Sen" />
          </Avatar.Root>
          <Box textAlign={{ base: "center", md: "left" }}>
            <Heading size="lg" color="whiteAlpha.900">
              Sanjay Sen
            </Heading>
            <Text fontSize="md" color="gray.400">
              A man with too many mottos in life
            </Text>
          </Box>
        </HStack>

        <HStack as="nav" gap={8} display="flex" fontWeight="medium">
          <Link href="/" color="gray.200" _hover={{ color: "teal.300" }}>
            About
          </Link>
          <Link href="/home" color="gray.200" _hover={{ color: "teal.300" }}>
            At Home
          </Link>
          <Link href="/carear" color="gray.200" _hover={{ color: "teal.300" }}>
            At Work
          </Link>
          <Link color="gray.200" _hover={{ color: "real.300" }}>
            At His Best
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Footer;
