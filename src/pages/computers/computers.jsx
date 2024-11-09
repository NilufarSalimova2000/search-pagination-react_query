import { Container, Grid2, Typography } from "@mui/material";
import { useGetComputers } from "../service/query/useGetComputers";
import React from "react";
import { Card } from "../../components/card";
import { useInView } from 'react-intersection-observer'

export const Computers = () => {
    const { data, isLoading, fetchNextPage, hasNextPage } = useGetComputers();
    const {ref,inView}= useInView()
    React.useEffect(() => {
        if(inView && hasNextPage){
            fetchNextPage()
        }
    },[inView])

    return (
        <div>
            <Container>
                <Grid2 py={"50px"} container spacing={"20px"}>
                    {isLoading ? (<Typography variant="h2">Loading...</Typography>) : (
                        data?.pages.map((page) => page.map((item)=> <Grid2 key={item.id} size={4}><Card  img={item.img} title={item.title} brand={item.brand} price={item.price} /></Grid2>))
                    )}
                </Grid2>
                {hasNextPage ? <h1 ref={ref}>Loading...</h1>: ""}
            </Container>
        </div>
    )
}