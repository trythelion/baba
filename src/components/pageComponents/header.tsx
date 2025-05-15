import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Link,
  Stack,
  Avatar,
  Drawer,
  IconButton,
  Menu,
  Portal,
} from "@chakra-ui/react";
import { MdClose, MdMenu } from "react-icons/md";
import { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      as="header"
      bg="gray.900"
      opacity={scrolled ? 0.93 : 1}
      color="gray.100"
      px={{ base: 4, md: 6 }}
      py={1.5}
      boxShadow={scrolled ? "md" : "none"}
      w="100vw"
      position="sticky"
      top={0}
      left={0}
      zIndex="sticky"
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="6xl"
        mx="auto"
        direction="row"
      >
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
              A man who has too many mottos in life
            </Text>
          </Box>
        </HStack>

        {/* Desktop Nav */}
        <HStack
          as="nav"
          gap={8}
          display={{ base: "none", md: "flex" }}
          fontWeight="medium"
        >
          <Link href="/" color="gray.200" _hover={{ color: "teal.300" }}>
            About
          </Link>
          <Link href="/home" color="gray.200" _hover={{ color: "teal.300" }}>
            At Home
          </Link>
          <Link href="/carrear" color="gray.200" _hover={{ color: "teal.300" }}>
            At Work
          </Link>
          <Link href="/best" color="gray.200" _hover={{ color: "teal.300" }}>
            At his best
          </Link>
        </HStack>

        <Drawer.Root
          placement="end"
          // onOpenChange={() => setIsOpen(!isOpen)}
          open={isOpen}
        >
          <Drawer.Trigger asChild>
            <IconButton
              variant="ghost"
              aria-label="Open menu"
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
            >
              <MdMenu />
            </IconButton>
          </Drawer.Trigger>

          <Drawer.Positioner>
            <Drawer.Content bg="gray.800">
              <Drawer.Header
                borderBottomWidth="1px"
                borderColor="gray.700"
                position="relative"
              >
                <Drawer.Title>Sanjay Sen</Drawer.Title>
                <IconButton
                  position="absolute"
                  right="0"
                  bg="gray.800"
                  onClick={onClose}
                >
                  <MdClose color="white" />
                </IconButton>
              </Drawer.Header>

              <Drawer.Body>
                <Stack gap={4} mt={4} fontWeight="medium">
                  <Link
                    href="/"
                    color="gray.200"
                    _hover={{ color: "teal.300" }}
                  >
                    Home
                  </Link>
                  <Link
                    href="/carrear"
                    color="gray.200"
                    _hover={{ color: "teal.300" }}
                  >
                    Life
                  </Link>

                  <Link color="gray.200" _hover={{ color: "teal.300" }}>
                    As a person
                  </Link>
                </Stack>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Root>
      </Flex>
    </Box>
  );
}

export default Header;
