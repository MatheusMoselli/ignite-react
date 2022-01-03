import { Button } from "@chakra-ui/react";

interface Props {
  number: number;
  onPageChange: (page: number) => void;
  isCurrent?: boolean;
}

export const PaginationItem: React.FC<Props> = ({
  isCurrent = false,
  number,
  onPageChange,
}) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: "pink.500", cursor: "default" }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      w="4"
      fontSize="xs"
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
};
