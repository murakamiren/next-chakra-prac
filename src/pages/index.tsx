import { Box, Button, Center, Flex, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import { HamburgerIcon, CalendarIcon, EmailIcon, WarningTwoIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";

const Home: NextPage = () => {
	const fruits: string[] = ["apple", "banana", "grape"];

	const gridTexts: string[] = ["abcd", "owo", "brb", "aiueo", "nvm", "http", "margin"];

	const decideColor = (fruit: string): string => {
		if (fruit === "apple") {
			return "red";
		} else if (fruit === "banana") {
			return "yellow";
		} else {
			return "blue";
		}
	};

	return (
		<div>
			<Head>
				<title>Next + Chakra</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Fragment>
				<Flex h="200px">
					{fruits.map((fruit, i) => (
						<Center bg={decideColor(fruit)} key={i} flex="1">
							<VStack>
								<Text>I like {fruit}</Text>
								<Button colorScheme="twitter">tweet</Button>
							</VStack>
						</Center>
					))}
				</Flex>
				<Box>
					<Center h="300">
						<Text fontSize="2xl">hello</Text>
					</Center>
				</Box>
				<Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap="4" px="4">
					{gridTexts.map((txt, i) => (
						<GridItem key={i} border="1px" bg="yellow.400">
							<Center h="150">
								<Text size="2xl">grid on: {txt}</Text>
							</Center>
						</GridItem>
					))}
				</Grid>
				<Box w="full">
					<HStack spacing={16}>
						<HamburgerIcon w={16} h={16} />
						<CalendarIcon w={16} h={16} />
						<EmailIcon w={16} h={16} />
						<WarningTwoIcon w={16} h={16} />
					</HStack>
				</Box>
			</Fragment>
		</div>
	);
};

export default Home;
