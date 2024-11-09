import { Box, Container, Stack, TextField } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import { useSearch } from "../../service/useSearch";

export const Header = () => {
    const [input, setinput] = React.useState("");
    const debounce = useDebounce(input);
    const { data, isLoading } = useSearch(debounce);

    return (
        <Box py={"50px"} bgcolor={"pink"}>
            <Container>
                <Stack >
                    <Stack direction={"row"} gap={"30px"}>
                        <NavLink style={{ textDecoration: "none", color: "#000", fontSize: "20px", fontWeight: "700" }} to={"/"}>Phones</NavLink>
                        <NavLink style={{ textDecoration: "none", color: "#000", fontSize: "20px", fontWeight: "700" }} to={"/computers"}>Computers</NavLink>
                    </Stack>
                    <Stack p={"30px"} position={"relative"}>
                        <TextField sx={{ width: '400px', bgcolor:"#fff" }} placeholder="Search" value={input} onChange={(e) => setinput(e.target.value)} />
                        {!isLoading && <Stack boxShadow={"0px 0px 99px -9px rgba(161,137,161,1)"}>
                            {data.map((item) => <Stack direction={"row"} alignItems={"center"} p="20px" border={"1px solid grey"} key={item.id}>
                                <img style={{ width: "150px" }} src={item.img} />
                                <h3>{item.title}</h3>
                            </Stack>)}
                        </Stack>}

                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}