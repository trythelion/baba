import {
  Stack,
  HStack,
  Box,
  Text,
  Heading,
  Avatar,
  RatingGroup,
} from "@chakra-ui/react";
import Markdown from "react-markdown";

interface Props {
  quote: string;
  name: string;
  role: string;
  avatarUrl?: string;
  rating?: number;
}

export function Testimonial({ quote, name, role, avatarUrl, rating }: Props) {
  return (
    <Box bg="gray.300" borderRadius="md" p={6} maxW="full" textAlign="center">
      <RatingGroup.Root
        readOnly
        count={5}
        defaultValue={rating}
        value={rating}
        size="sm"
        colorPalette="blue"
      >
        <RatingGroup.HiddenInput />
        <RatingGroup.Control />
      </RatingGroup.Root>

      <HStack gap={4} justify="center" mt={4} bg="gray.300">
        <Avatar.Root size="lg" bg="gray.400">
          {avatarUrl ? (
            <Avatar.Image src={avatarUrl} />
          ) : (
            <Avatar.Fallback name={name} color="black" bg="gray.400" />
          )}
        </Avatar.Root>
        <Box textAlign="left">
          <Heading size="sm" color="black">
            {name}
          </Heading>
          <Text fontSize="sm" color="gray.800">
            {role}
          </Text>
        </Box>
      </HStack>
      <Box color="gray.800" my={4} maxW="xl">
        <Markdown>{"“" + quote + "”"}</Markdown>
      </Box>
    </Box>
  );
}
