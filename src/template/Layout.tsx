import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
	Box,
	Center,
	Flex,
	Heading,
	HStack,
	IconButton,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useColorMode,
} from "@chakra-ui/react";
import { Fragment, ReactNode, VFC } from "react";
import NextLink from "next/link";

type layoutProps = {
	children: ReactNode;
};

const Layout: VFC<layoutProps> = (props) => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Fragment>
			<Flex justify="space-between" alignItems="center" px={8} h="100">
				<Box>
					<Heading as="h1" size="lg">
						Next + ChakraUi
					</Heading>
				</Box>
				<HStack spacing={4}>
					<Box>
						<IconButton
							aria-label="dark or light"
							icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
							onClick={toggleColorMode}
						/>
					</Box>
					<Menu>
						<MenuButton as={IconButton} aria-label="options" icon={<HamburgerIcon />} />
						<MenuList>
							<MenuItem>
								<NextLink href="/" passHref>
									<Link w="full" h="full">
										home
									</Link>
								</NextLink>
							</MenuItem>
							<MenuItem>
								<NextLink href="/products" passHref>
									<Link w="full" h="full">
										products
									</Link>
								</NextLink>
							</MenuItem>
						</MenuList>
					</Menu>
				</HStack>
			</Flex>
			<main>{props.children}</main>
		</Fragment>
	);
};

export default Layout;
