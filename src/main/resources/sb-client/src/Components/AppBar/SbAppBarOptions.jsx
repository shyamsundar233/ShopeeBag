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
        ],
        col3 : [
            {
                heading: "Footwear",
                options: ["Casual Shoes", "Sports Shoes", "Formal Shoes", "Sneakers", "Sandals & Floaters", "Flip Flops", "Socks"]
            },
            {
                heading: "Personal Care & Grooming",
                options: []
            },
            {
                heading: "Sunglasses & Frames",
                options: []
            },
            {
                heading: "Watches",
                options: []
            }
        ],
        col4 : [
            {
                heading: "Sports & Active Wear",
                options: ["Sports Shoes", "Sports Sandals", "Active T-Shirts", "Track Pants & Shorts", "Track Suits", "Jackets & Sweatshirts", "Sports Accessories", "Swim Wear"]
            },
            {
                heading: "Gadgets",
                options: ["Smart Wearables", "Fitness Gadgets", "Headphones", "Speakers"]
            }
        ],
        col5 : [
            {
                heading: "Fashion Accessories",
                options: ["Wallets", "Belts", "Perfumes & Body Mists", "Trimmers", "Deodorants", "Ties, Cufflinks & Pocket Squares", "Accessory Gift Sets", "Caps & Hats", "Mufflers, Scarves & Gloves", "Phone Cases", "Rings & Wrist Wear", "Helmets"]
            },
            {
                heading: "Bags & Backpacks",
                options: []
            },
            {
                heading: "Luggages & Trolleys",
                options: []
            }
        ]
    },
    women : {
        col1 : [
            {
                heading: "Indian & Fusion Wear",
                options: ["Kurtas & Suits", "Kurtis, Tunics & Tops", "Sarees", "Ethnic Wear", "Leggings, Salwars & Churidars", "Skirts & Palazzos", "Dress Materials", "Lehenga Cholis", "Dupattas & Shawls", "Jackets"]
            },
            {
                heading: "Belts, Scarves & More",
                options: []
            },
            {
                heading: "Watches & Wearables",
                options: []
            }
        ],
        col2 : [
            {
                heading: "Western Wear",
                options: ["Dresses", "Tops", "T-Shirts", "Jeans", "Trousers & Capris", "Shorts & Skirts", "Co-Ords", "Playsuits", "Jumpsuits", "Shrugs", "Sweaters & Sweatshirts", "Jackets & Coats", "Blazers & Waistcoats"]
            },
            {
                heading: "Plus Size",
                options: []
            }
        ],
        col3 : [
            {
                heading: "Maternity",
                options: []
            },
            {
                heading: "Sunglasses & Frames",
                options: []
            },
            {
                heading: "Footwear",
                options: ["Flats", "Casual Shoes", "Heels", "Boots", "Sports Shoes & Floaters"]
            },
            {
                heading: "Sports & Active Wear",
                options: ["Clothing", "Footwear", "Sports Accessories", "Sports Equipments"]
            }
        ],
        col4 : [
            {
                heading: "Lingerie & Sleepwear",
                options: ["Bra", "Briefs", "Shapewear", "Sleepwear & Loungewear", "Swimwear", "Camisoles & Thermals"]
            },
            {
                heading: "Beauty & Personal Care",
                options: ["Makeup", "Skincare", "Premium Beauty", "Lipsticks", "Fragrances"]
            }
        ],
        col5 : [
            {
                heading: "Gadgets",
                options: ["Smart Wearables", "Fitness Gadgets", "Headphones", "Speakers"]
            },
            {
                heading: "Jewellery",
                options: ["Fashion Jewellery", "Fine Jewellery", "Earrings"]
            },
            {
                heading: "Backpacks",
                options: []
            },
            {
                heading: "Handbags, Bags & Wallets",
                options: []
            },
            {
                heading: "Luggages & Trolleys",
                options: []
            }
        ]
    },
    kids : {
        col1 : [
            {
                heading: "Boys Clothing",
                options: ["T-Shirts", "Shirts", "Shorts", "Jeans", "Trousers", "Clothing Sets", "Ethnic Wear", "Track Pants & Pyjamas", "Jacket, Sweater, Sweatshirts", "Party Wear", "Innerwear & Thermals", "Nightwear & Loungewear", "Value Packs"]
            }
        ],
        col2 : [
            {
                heading: "Girls Clothing",
                options: ["Dresses", "Tops", "T-Shirts", "Clothing Sets", "Lehenga Choli", "Kurta Sets", "Party Wear", "Dungarees & Jumpsuits", "Skirts & Shorts", "Tights & Leggings", "Jeans, Trousers & Capris", "Jacket, Sweater, Sweatshirts", "Innerwear & Thermals", "Nightwear & Loungewear", "Value Packs"]
            }
        ],
        col3 : [
            {
                heading: "Footwear",
                options: ["Casual Shoes", "Flip Flops", "Sports Shoes", "Flats", "Sandals", "Heels", "School Shoes", "Socks"]
            },
            {
                heading: "Toys & Games",
                options: ["Learning & Development", "Activity Toys", "Soft Toys", "Action Figure / Play Set"]
            }
        ],
        col4 : [
            {
                heading: "Infants",
                options: ["Bodysuits", "Rompers & Sleepsuits", "Clothing Sets", "T-Shirts & Tops", "Dresses", "Bottom Wear", "Winter Wear", "Inner Wear & Sleepwear", "Infant Care"]
            },
            {
                heading: "Home & Bath",
                options: []
            },
            {
                heading: "Personal Care",
                options: []
            }
        ],
        col5 : [
            {
                heading: "Kids Accessories",
                options: ["Bags & Backpacks", "Watches", "Jewellery & Hair Accessory", "Sunglasses", "Masks & Protective Gears", "Caps & Hats"]
            },
            {
                heading: "Brands",
                options: ["H&M", "Max Kids", "Pantaloons", "United Colors of Benetton Kids", "YK", "U.S. Polo Assn. Kids", "Mothercare", "HRX"]
            }
        ]
    },
    home : {
        col1 : [
            {
                heading: "Bed Linen & Furnishing",
                options: ["Bed Runners", "Mattress Protectors", "Bedsheets", "Bedding Sets", "Blankets, Quilts & Dohars", "Pillow & Pillow Covers", "Bed Covers", "Diwan Sets", "Chair Pads & Covers", "Sofa Covers"]
            },
            {
                heading: "Flooring",
                options: ["Floor Runners", "Carpets", "Floor Mats & Dhurries", "Door Mats"]
            }
        ],
        col2 : [
            {
                heading: "Bath",
                options: ["Bath Towels", "Hand & Face Towels", "Beach Towels", "Towels Set", "Bath Rugs", "Bath Robes", "Bathroom Accessories", "Shower Curtains"]
            },
            {
                heading: "Lamps & Lighting",
                options: ["Floor Lamps", "Ceiling Lamps", "Table Lamps", "Wall Lamps", "Outdoor Lamps", "String Lights"]
            }
        ],
        col3 : [
            {
                heading: "Home Décor",
                options: ["Plants & Planters", "Aromas & Candles", "Clocks", "Mirrors", "Wall Décor", "Festive Decor", "Pooja Essentials", "Wall Shelves", "Fountains", "Showpiece & Vases", "Ottoman"]
            },
            {
                heading: "Cushions & Cushion Covers",
                options: []
            },
            {
                heading: "Curtains",
                options: []
            }
        ],
        col4 : [
            {
                heading: "Home Gift Sets",
                options: []
            },
            {
                heading: "Kitchen & Table",
                options: ["Table Runners", "Dinnerware & Serveware", "Cups and Mugs", "Bakeware & Cookware", "Kitchen Storage & Tools", "Bar & Drinkware", "Table Covers & Furnishings"]
            },
            {
                heading: "Storage",
                options: ["Bins", "Hangers", "Organisers", "Hooks & Holders", "Laundry Bags"]
            }
        ],
        col5 : [
            {
                heading: "Brands",
                options: ["H&M", "Marks & Spencer", "Home Centre", "Spaces", "D'Decor", "Story@Home", "Pure Home & Living", "Swayam", "Raymond Home", "Maspar", "My Trident", "Cortina", "Random", "Ellementry", "ROMEE", "SEJ by Nisha Gupta"]
            }
        ]
    },
    beauty : {
        col1 : [
            {
                heading: "Makeup",
                options: ["Lipstick", "Lip Gloss", "Lip Liner", "Mascara", "Eyeliner", "Kajal", "Eyeshadow", "Foundation", "Primer", "Concealer", "Compact", "Nail Polish"]
            }
        ],
        col2 : [
            {
                heading: "Skincare, Bath & Body",
                options: ["Face Moisturiser", "Cleanser", "Masks & Peel", "Sunscreen", "Serum", "Face Wash", "Eye Cream", "Lip Balm", "Body Lotion", "Body Wash", "Body Scrub", "Hand Cream"]
            },
            {
                heading: "Baby Care",
                options: []
            },
            {
                heading: "Masks",
                options: []
            }
        ],
        col3 : [
            {
                heading: "Haircare",
                options: ["Shampoo", "Conditioner", "Hair Cream", "Hair Oil", "Hair Gel", "Hair Color", "Hair Serum", "Hair Accessory"]
            },
            {
                heading: "Fragrances",
                options: ["Perfume", "Deodorant", "Body Mist"]
            }
        ],
        col4 : [
            {
                heading: "Appliances",
                options: ["Hair Straightener", "Hair Dryer", "Epilator"]
            },
            {
                heading: "Men's Grooming",
                options: ["Trimmers", "Beard Oil", "Hair Wax"]
            },
            {
                heading: "Beauty Gift & Makeup Set",
                options: ["Beauty Gift", "Makeup Kit"]
            },
            {
                heading: "Premium Beauty",
                options: []
            },
            {
                heading: "Wellness & Hygiene",
                options: []
            }
        ],
        col5 : [
            {
                heading: "Top Brands",
                options: ["Lakme", "Maybeline", "LOreal", "Philips", "Bath & Body Works", "THE BODY SHOP", "Biotique", "Mamaearth", "MCaffeine", "Nivea", "Lotus Herbals", "LOreal Professional", "KAMA AYURVEDA", "M.A.C", "Forest Essentials"]
            }
        ]
    }
}

const SbAppBarOptions = ({option}) => {

    const [optionsArr, setOptionsArr] = useState([]);
    const subHeadingColor = {
        men: "#ee5f73",
        women: "#fb56c1",
        kids: "#f26a10",
        home: "#f2c210",
        beauty: "#0db7af"
    }

    useEffect(() => {
        setOptionsArr(optionsJsonData[option]);
    }, [option]);

    return(
        <Stack direction="row" spacing={2}>
            <Item>
                {optionsArr && optionsArr.col1 && optionsArr.col1.map(selOptions => {
                    return (
                        <List>
                            <ListSubheader id="test123" sx={{color: subHeadingColor[option], fontWeight: "bolder", textAlign: "left"}}>{selOptions.heading}</ListSubheader>
                            {selOptions.options.map(opt => {
                                return(
                                    <ListItem>{opt}</ListItem>
                                );
                            })}
                        </List>
                    );
                })}
            </Item>
            <Item sx={{backgroundColor: "rgba(245,245,246,.4)"}}>
                {optionsArr && optionsArr.col2 && optionsArr.col2.map(selOptions => {
                    return (
                        <List>
                            <ListSubheader sx={{color: subHeadingColor[option], fontWeight: "bolder", textAlign: "left", backgroundColor: "rgba(245,245,246,.4)"}}>{selOptions.heading}</ListSubheader>
                            {selOptions.options.map(opt => {
                                return(
                                    <ListItem>{opt}</ListItem>
                                );
                            })}
                        </List>
                    );
                })}
            </Item>
            <Item>
                {optionsArr && optionsArr.col3 && optionsArr.col3.map(selOptions => {
                    return (
                        <List>
                            <ListSubheader sx={{color: subHeadingColor[option], fontWeight: "bolder", textAlign: "left"}}>{selOptions.heading}</ListSubheader>
                            {selOptions.options.map(opt => {
                                return(
                                    <ListItem>{opt}</ListItem>
                                );
                            })}
                        </List>
                    );
                })}
            </Item>
            <Item sx={{backgroundColor: "rgba(245,245,246,.4)"}}>
                {optionsArr && optionsArr.col4 && optionsArr.col4.map(selOptions => {
                    return (
                        <List>
                            <ListSubheader sx={{color: subHeadingColor[option], fontWeight: "bolder", textAlign: "left", backgroundColor: "rgba(245,245,246,.4)"}}>{selOptions.heading}</ListSubheader>
                            {selOptions.options.map(opt => {
                                return(
                                    <ListItem>{opt}</ListItem>
                                );
                            })}
                        </List>
                    );
                })}
            </Item>
            <Item>
                {optionsArr && optionsArr.col5 && optionsArr.col5.map(selOptions => {
                    return (
                        <List>
                            <ListSubheader sx={{color: subHeadingColor[option], fontWeight: "bolder", textAlign: "left"}}>{selOptions.heading}</ListSubheader>
                            {selOptions.options.map(opt => {
                                return(
                                    <ListItem>{opt}</ListItem>
                                );
                            })}
                        </List>
                    );
                })}
            </Item>
        </Stack>
    );
}

export default SbAppBarOptions;