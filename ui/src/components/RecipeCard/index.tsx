import React from 'react';

// Components
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';

// Types
import { Recipe } from '../../algorithm/data';

function RecipeCard({ recipe }: { recipe: Recipe }) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (!isMobile) {
    return (
      <Box
        userSelect="none"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        padding={4}
        borderRadius={8}
        backgroundColor="white"
        width="100%"
        maxWidth={600}
      >
        <Box width="70%">
          <Text fontSize="xl" fontWeight="bold">
            {recipe.id} {/* Assuming ID is used as title */}
          </Text>
          <Text fontSize="sm" color="gray.600">
            {recipe.name}.
          </Text>
        </Box>
        <Box width="25%" display="flex" alignItems="center" justifyContent="center">
          <Text fontSize="m" fontWeight="bold" textAlign="center">
            Page {recipe.page}
          </Text>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        userSelect="none"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="space-between"
        padding={4}
        borderRadius={8}
        backgroundColor="white"
        width="100%"
        maxWidth={600}
      >
        <Text fontSize="xl" fontWeight="bold">
          {recipe.id} {/* Assuming ID is used as title */}
        </Text>
        <Text fontSize="sm" color="gray.600">
          {recipe.name}.
        </Text>

        <Text fontSize="m" fontWeight="bold" color="gray.600">
          Page {recipe.page}
        </Text>
      </Box>
    );
  }
}

export default RecipeCard;
