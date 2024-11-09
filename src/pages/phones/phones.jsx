import React from "react";
import { useGetPhones } from "../service/query/useGetPhones";
import { Container, Grid, Stack, Button, Typography } from "@mui/material";
import { Card } from "../../components/card";

export const Phones = () => {
    const [page, setPage] = React.useState(1);
    const { data, isLoading } = useGetPhones(page);
    const phones = data?.data || [];
    const pageSize = data?.pageSize || 0;

    return (
        <Container>
            <Grid container spacing={2} py={5}>
                {isLoading ? (
                    <Typography variant="h2">Loading...</Typography>
                ) : (
                    phones.map((item) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                            <Card
                                img={item.img}
                                title={item.title}
                                brand={item.brand}
                                price={item.price}
                            />
                        </Grid>
                    ))
                )}
            </Grid>
            <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
                {[...Array(pageSize)].map((_, index) => (
                    <Button
                        sx={{
                            bgcolor: page === index + 1 ? "red" : "blue",
                        }}
                        variant="contained"
                        onClick={() => setPage(index + 1)}
                        key={index}
                    >
                        {index + 1}
                    </Button>
                ))}
            </Stack>
        </Container>
    );
};
