import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTodo, postTodo } from "../redux/action";


export default function TodoInput() {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
    const dispatch=useDispatch();
    let { todos, isLoading } = useSelector((store) => {
		return {
			todos: store.todos,
			isLoading: store.isLoading,
		};
	}, shallowEqual);
	const handleTodo = () => {
        let obj={
            title:title,desc:desc,status:false
        }
        dispatch(postTodo({title,desc}))
		setDesc("");
		setTitle("");
	};
    useEffect(()=>{
        dispatch(getTodo());
        console.log(todos);
    },[])
	return (
		<Flex
			minH={"70vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}
		>
			<Stack
				spacing={8}
				mx={"auto"}
				w={"45%"}
				py={12}
				px={6}
				border={"1px solid red"}
			>
				<Stack align={"center"}>
					<Heading fontSize={"4xl"}>Todos</Heading>
				</Stack>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}
				>
					<Stack spacing={4}>
						<FormControl id="title">
							<FormLabel>Title</FormLabel>
							<Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
						</FormControl>
						<FormControl id="description">
							<FormLabel>Description</FormLabel>
							<Input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
						</FormControl>
						<Stack spacing={10}>
							<Button
								onClick={handleTodo}
								bg={"blue.400"}
								color={"white"}
								_hover={{
									bg: "blue.500",
								}}
							>
								Add Todos
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
			<Stack
				spacing={8}
				mx={"auto"}
				w={"45%"}
				py={12}
				px={6}
				border={"1px solid red"}
			>
				<Stack align={"center"}>
					<Heading fontSize={"4xl"}>Todos</Heading>
				</Stack>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}
				>
					<Stack spacing={4}>
						<FormControl id="title">
							<FormLabel>Title</FormLabel>
							<Input type="text" />
						</FormControl>
						<FormControl id="description">
							<FormLabel>Description</FormLabel>
							<Input type="text" />
						</FormControl>
						<Stack spacing={10}>
							<Button
								bg={"blue.400"}
								color={"white"}
								_hover={{
									bg: "blue.500",
								}}
							>
								Add Todos
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
