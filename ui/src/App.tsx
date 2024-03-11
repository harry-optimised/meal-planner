import React, { ChangeEvent, useEffect, useState } from 'react';

// Components
import {
  ChakraProvider,
  Modal,
  Text,
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Box,
  Spinner,
  VStack,
  Input,
  ListItem,
  List,
  InputGroup,
  InputRightElement,
  IconButton,
  Flex,
  Divider,
  Progress
} from '@chakra-ui/react';
import LottieView from 'react-lottie';
import animationData from './loading.json';
import RecipeCard from './components/RecipeCard';
import { CloseIcon } from '@chakra-ui/icons';

// Algorithm
import buildMealPlan, { MealPlan } from './algorithm/algorithm';
import { Recipe, RECIPES } from './algorithm/data';
import { flushSync } from 'react-dom';
import { on } from 'events';

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false });
  return (
    <>
      <IconButton aria-label="About" icon={<Text fontSize="xl">?</Text>} onClick={onOpen} isRound={true} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent margin={4}>
          <ModalHeader>About Meal Planner</ModalHeader>
          <ModalBody>
            <Text>
              This is a personal project of mine for exploring algorithms for meal planning. The idea is to pick recipes
              that all use similar ingredients to minimise the number of half empty jars and packets in the fridge that
              end up going off and being thrown away (something I'm quite guilty of).
            </Text>
            <br />
            <Text>
              This version uses recipes from{' '}
              <a
                style={{ textDecoration: 'underline' }}
                href="https://www.amazon.co.uk/Roasting-Tin-Simple-Dish-Dinners/dp/1910931519"
              >
                The Roasting Tin.
              </a>{' '}
              Obviously I don't provide the actual recipes here, I just reference the page numbers, so you'll need the
              book to use this tool.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Understood
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

interface AutocompleteProps {
  options: Recipe[];
  onSelect: (id: string) => void;
}

function AutocompleteSearch({ options, onSelect }: AutocompleteProps) {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<Recipe[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onSelect('');
    setInputValue(value);

    const filteredOptions = options.filter((option) => option.id.toLowerCase().includes(value.toLowerCase()));
    setFilteredSuggestions(filteredOptions.slice(0, 10));
  };

  const handleSelect = (suggestion: string) => {
    setInputValue(suggestion);
    onSelect(suggestion);
    setFilteredSuggestions([]);
  };

  const handleClearInput = () => {
    setInputValue('');
    onSelect('');
    setFilteredSuggestions(options.slice(0, 10));
  };

  const handleOnFocused = () => {
    setFilteredSuggestions(options.slice(0, 10));
  };

  return (
    <VStack spacing={4} width="100%">
      <InputGroup width="100%">
        <Input
          placeholder="Find a recipe..."
          value={inputValue}
          onChange={handleChange}
          color="white"
          borderWidth={2}
          fontWeight={600}
          userSelect="none"
          onFocus={handleOnFocused}
          _placeholder={{ color: 'gray.200' }}
          _active={{ borderColor: 'teal.50' }}
          _focus={{ borderColor: 'teal.50', boxShadow: 'none' }}
          _hover={{ borderColor: 'teal.50' }}
        />
        {inputValue && (
          <InputRightElement>
            <IconButton aria-label="Clear input" icon={<CloseIcon />} size="sm" onClick={handleClearInput} />
          </InputRightElement>
        )}
      </InputGroup>
      <Box width="100%">
        {filteredSuggestions.length !== 0 && (
          <List spacing={2}>
            {filteredSuggestions.map((suggestion, index) => (
              <ListItem
                key={index}
                cursor="pointer"
                _hover={{ bg: 'teal.900' }}
                onClick={() => handleSelect(suggestion.id)}
                textColor="white"
                fontWeight={600}
                padding={1}
                paddingLeft={2}
                borderRadius={4}
              >
                {suggestion.id}
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </VStack>
  );
}

// TODO: Allow selecting number of recipes.
// TODO: Popup with disclaimer, show a help button as well.

function MealPlanner() {
  // State
  const [selectedRecipe, setSelectedRecipe] = React.useState<Recipe | null>(null);
  const [mealPlan, setMealPlan] = React.useState<MealPlan | null>(null);
  const [isComputing, setIsComputing] = React.useState<boolean>(false);

  // Derived data
  const recipeList: Recipe[] = RECIPES;

  const handleRecipeChange = (changedItemID: string) => {
    const recipe = recipeList.find((recipe) => recipe.id === changedItemID);
    if (!recipe) {
      setSelectedRecipe(null);
      setMealPlan(null);
      setIsComputing(false);
      return;
    }

    setSelectedRecipe(recipe || null);
    setMealPlan(null);
    setIsComputing(true);

    buildMealPlan(recipe).then((mealPlan) => {
      flushSync(() => {
        setMealPlan(mealPlan);
        setIsComputing(false);
      });

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    });
  };

  const getJoiningWord = (container: string) => {
    switch (container) {
      case 'loose':
        return '';
      default:
        return 'of';
    }
  };

  const getEstimatedCost = (mealPlan: MealPlan) => {
    const cost = Object.keys(mealPlan.productList).reduce((acc, product) => {
      return acc + mealPlan.productList[product].product.price * mealPlan.productList[product].quantity;
    }, 0);
    return cost.toFixed(2);
  };

  return (
    <Flex direction="column" justify="flex-start" align="center" width="100%" marginBottom={6}>
      <Flex direction="column" align="center" width="80%" justify="center" maxWidth={600}>
        <Box marginBottom={8} userSelect="none">
          <img src="assets/header.png" alt="header" />
        </Box>
        <AutocompleteSearch options={recipeList} onSelect={handleRecipeChange} />
      </Flex>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop={4}
        width={['90%', '100%']}
        maxWidth={600}
      >
        {selectedRecipe && <RecipeCard recipe={selectedRecipe} />}
      </Box>

      {/* Display Meal Plan */}
      {mealPlan && (
        <Box
          userSelect="none"
          marginTop={8}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          borderRadius={8}
          backgroundColor="white"
          width={['90%', '100%']}
          maxWidth={600}
        >
          <Text fontSize="xl" fontWeight="bold" margin={4}>
            Recipes
          </Text>
          {mealPlan.recipes.map((recipe) => (
            <RecipeCard recipe={recipe} />
          ))}
          <Divider marginTop={4} />
          <Text fontSize="xl" fontWeight="bold" marginTop={8} margin={4}>
            Shopping List
          </Text>
          <Box margin={4}>
            {Object.keys(mealPlan.productList).map((product) => (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                width="100%"
                marginBottom={4}
              >
                <Text fontSize="lg">
                  {mealPlan.productList[product].quantity} x {mealPlan.productList[product].product.container}{' '}
                  {getJoiningWord(mealPlan.productList[product].product.container)} {product} from{' '}
                  {mealPlan.productList[product].product.shop}
                </Text>
                <Progress value={mealPlan.productList[product].utilisation} width="50%" />
              </Box>
            ))}
          </Box>
          <Text fontSize="xl" fontWeight="bold" margin={4}>
            Estimated Cost: £{getEstimatedCost(mealPlan)}
          </Text>
        </Box>
      )}

      {/* Thinking */}
      {isComputing && (
        <Box marginTop={8} display="flex" flexDirection="column" alignItems="center" opacity={0.7}>
          {/* <LottieView
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
              speed={0.1}
              height={100}
              width={400}
            /> */}
          <Spinner color="gray.200" size="xl" />
          <Text fontSize="lg" marginTop={8} fontWeight="bold" color="white">
            Building a plan
          </Text>
        </Box>
      )}
    </Flex>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Box maxWidth={1200} margin="auto" height="100%">
        <Box padding={4} display="flex" justifyContent="flex-end" width="100%">
          <BasicUsage />
        </Box>
        <MealPlanner />
      </Box>
    </ChakraProvider>
  );
}

export default App;
