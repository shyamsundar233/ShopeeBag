import "./SbAppBar.css";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {useEffect, useState} from "react";
import {List, ListItem, ListSubheader} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
}));

const optionsJsonData = {
    men : {
        col1 : [
            {
                heading: "Topwear",
                options: ["T-Shirts", "Casual Shirts", "Formal Shirts", "Sweatshirts", "Sweaters", "Jackets", "Blazers & Coats", "Suits", "Rain Jackets"]
            },
            {
                heading: "Indian & Festive Wear",
                options: ["Kurtas & Kurta Sets", "Sherwanis", "Nehru Jackets", "Dhotis"]
            }
        ],
        col2 : [
            {
                heading: "Bottomwear",
                options: ["Jeans", "Casual Trousers", "Formal Trousers", "Shorts", "Track Pants & Joggers"]
            },
            {
                heading: "Innerwear & Sleepwear",
                options: ["Briefs & Trunks", "Boxers", "Vests", "Sleepwear & Loungewear", "Thermals"]
            },
            {
                heading: "Plus Size",
                options: []
            }
        ]
    }
}

const SbAppBarOptions = ({option}) => {

    const [optionsArr, setOptionsArr] = useState([]);

    useEffect(() => {
        setOptionsArr(optionsJsonData[option]);
    }, [option]);

    return(
        <Stack direction="row" spacing={2} sx={{padding: "20px"}}>
            <Item>
                {optionsArr && optionsArr.col1 && optionsArr.col1.map(option => {
                    return (
                        <List>
                            <ListSubheader id="test123" sx={{color: "#ee5f73", fontWeight: "bolder", textAlign: "left"}}>{option.heading}</ListSubheader>
                            {option.options.map(opt => {
                                return(
                                    <ListItem>{opt}</ListItem>
                                );
                            })}
                        </List>
                    );
                })}
            </Item>
            <Item>
                {optionsArr && optionsArr.col2 && optionsArr.col2.map(option => {
                    return (
                        <List>
                            <ListSubheader sx={{color: "#ee5f73", fontWeight: "bolder", textAlign: "left"}}>{option.heading}</ListSubheader>
                            {option.options.map(opt => {
                                return(
                                    <ListItem>{opt}</ListItem>
                                );
                            })}
                        </List>
                    );
                })}
            </Item>
            <Item>Item 3</Item>
            <Item>Item 4</Item>
            <Item>Item 5</Item>
        </Stack>
    );
}

export default SbAppBarOptions;