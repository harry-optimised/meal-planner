import React, { useEffect } from 'react';

// Styles
import theme from './theme';
import {
  Autocomplete,
  Heading,
  TextInput,
  ThemeProvider,
  Text,
  Card,
  Spinner,
  Button,
  HelpIcon,
  Dialog,
  TickIcon,
  CrossIcon
} from 'evergreen-ui';

// Components
import { Pane } from 'evergreen-ui';
import LottieView from 'react-lottie';
import animationData from './loading.json';

// Algorithm
import buildMealPlan, { MealPlan } from './algorithm/algorithm';
import { Recipe, RECIPES } from './algorithm/data';
import { flushSync } from 'react-dom';

interface ScreenProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

function Screen({ children, backgroundColor }: ScreenProps) {
  return (
    <Pane
      width="100%"
      height="100%"
      minHeight="100vh"
      paddingBottom={100}
      display="flex"
      justifyContent="center"
      backgroundColor={backgroundColor || theme.colors.background}
    >
      <Pane
        className="App"
        width="100%"
        maxWidth="1200px"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        backgroundColor={theme.colors.background}
      >
        {children}
      </Pane>
    </Pane>
  );
}

// TODO: Allow selecting number of recipes.
// TODO: Popup with disclaimer, show a help button as well.

function App() {
  // State
  const [selectedRecipe, setSelectedRecipe] = React.useState<Recipe | null>(null);
  const [mealPlan, setMealPlan] = React.useState<MealPlan | null>(null);
  const [isComputing, setIsComputing] = React.useState<boolean>(false);
  const [isAboutOpen, setIsAboutOpen] = React.useState<boolean>(false);

  // Derived data
  const recipeList: Recipe[] = RECIPES;
  const recipeNames: string[] = recipeList.map((recipe) => recipe.name);

  const handleRecipeChange = (changedItem: string) => {
    const recipe = recipeList.find((recipe) => recipe.name === changedItem);
    setSelectedRecipe(recipe || null);
  };

  const handleBuildMealPlan = () => {
    if (!selectedRecipe) {
      return;
    }
    setMealPlan(null);
    setIsComputing(true);

    buildMealPlan(selectedRecipe).then((mealPlan) => {
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

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsAboutOpen(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    <ThemeProvider value={theme}>
      <Screen>
        {/* Header */}
        <Pane
          marginTop={50}
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
        >
          <Dialog
            title="About Meal Planner"
            isShown={isAboutOpen}
            onCloseComplete={() => setIsAboutOpen(false)}
            hasCancel={false}
            confirmLabel="Okay"
            hasClose={false}
          >
            <Pane>
              <Text>A personal project to explore algorithms for meal planning. </Text>
            </Pane>
            <Pane marginTop={48}>
              <Heading size={500}>What this app does</Heading>

              <Pane display="flex" alignItems="center" paddingTop={8}>
                <TickIcon size={24} marginRight={8} color={theme.colors.green500} />
                <Heading size={400}>Builds a list of recipes that all use similar ingredients.</Heading>
              </Pane>
              <Pane display="flex" alignItems="center" paddingTop={8}>
                <TickIcon size={24} marginRight={8} color={theme.colors.green500} />
                <Heading size={400}>Maximises the use of the ingredients to minimise wastage.</Heading>
              </Pane>
              <Pane display="flex" alignItems="center" paddingTop={8}>
                <TickIcon size={24} marginRight={8} color={theme.colors.green500} />
                <Heading size={400}>
                  Uses recipes from{' '}
                  <a href="https://www.amazon.co.uk/Roasting-Tin-Simple-Dish-Dinners/dp/1910931519">The Roasting Tin</a>
                </Heading>
              </Pane>
            </Pane>
            <Pane marginTop={48}>
              <Heading size={500}>Please note</Heading>

              <Pane display="flex" alignItems="center" paddingTop={8}>
                <CrossIcon size={24} marginRight={8} color={theme.colors.red500} />
                <Heading size={400}>This app will not provide the actual recipes.</Heading>
              </Pane>
              <Pane display="flex" alignItems="center" paddingTop={8}>
                <CrossIcon size={24} marginRight={8} color={theme.colors.red500} />
                <Heading size={400}>This app is not affiliated with The Roasting Tin in any way.</Heading>
              </Pane>
            </Pane>
          </Dialog>

          {/* Reduce opacity on hover. */}
          <Pane
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            userSelect="none"
            onClick={() => setIsAboutOpen(true)}
            onMouseEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => (e.currentTarget.style.opacity = '1')}
          >
            <HelpIcon size={24} marginRight={8} color={theme.colors.primary} opacity={0.7} />
            <Text fontSize={24} color={theme.colors.primary} opacity={0.7}>
              About
            </Text>
          </Pane>
        </Pane>

        {/* Search Recipe */}
        <Pane
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          userSelect="none"
          marginTop={50}
          width="100%"
        >
          <Pane>
            <img
              src="/assets/header.png"
              alt="Description"
              width={906 * 0.7}
              height={324 * 0.7}
              onDragStart={(e) => e.preventDefault()}
            />
          </Pane>
          <Pane marginTop={32}>
            <Autocomplete onChange={handleRecipeChange} items={recipeNames}>
              {(props) => {
                const { getInputProps, getRef, inputValue } = props;
                return (
                  <TextInput
                    placeholder="Find a recipe..."
                    fontSize={20}
                    size="large"
                    width={400}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    value={inputValue}
                    ref={getRef}
                    {...getInputProps({})}
                  />
                );
              }}
            </Autocomplete>
          </Pane>

          <Button
            marginTop={32}
            marginLeft={16}
            appearance="primary"
            size="large"
            onClick={handleBuildMealPlan}
            disabled={selectedRecipe === null}
          >
            Build me a plan
          </Button>
        </Pane>

        {/* Display Meal Plan */}
        {mealPlan && (
          <Card
            userSelect="none"
            elevation={3}
            marginTop={64}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            padding={16}
            borderRadius={8}
            backgroundColor={theme.colors.white}
          >
            <Pane minWidth={500}>
              <Heading margin={8} paddingBottom={16} size={800}>
                Recipes
              </Heading>
              {mealPlan.recipes.map((recipe) => (
                <Pane margin={8} display="flex" alignItems="center" justifyContent="space-between">
                  <Heading size={600}>{recipe.name}</Heading>
                  <Heading size={400} marginLeft={8} fontFamily="Lora">
                    Page {recipe.page}
                  </Heading>
                </Pane>
              ))}
              <Heading margin={8} paddingTop={32} paddingBottom={16} size={800}>
                Shopping List
              </Heading>
              {Object.keys(mealPlan.productList).map((product) => (
                <Pane
                  paddingLeft={4}
                  paddingRight={4}
                  margin={4}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Heading size={600}>
                    {mealPlan.productList[product]} {product}
                  </Heading>
                </Pane>
              ))}
            </Pane>
          </Card>
        )}

        {/* Thinking */}
        {isComputing && (
          <Pane marginTop={64} display="flex" flexDirection="column" alignItems="center" opacity={0.7}>
            <LottieView
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
            />
            <Heading size={500} marginTop={48} opacity={0.5}>
              Building a plan
            </Heading>
          </Pane>
        )}
      </Screen>
    </ThemeProvider>
  );
}

export default App;
