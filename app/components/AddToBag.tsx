"use client"

import { Button } from "@/components/ui/button";
import { Description } from "@radix-ui/react-dialog";
import { Currency } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { Product } from "use-shopping-cart/core";
import { urlFor } from "../lib/sanity";

export interface ProductCart{
    name:string;
    description:string;
    price:number;
    currency:string;
    image:any;
    price_id:string
}

export default function AddToBag({
currency,
description,
image,
name,
price,
price_id,
}:ProductCart){

    const {handleCartClick, addItem} = useShoppingCart();
    const product = {
        name:name,
        description:description,
        price:price,
        currency:currency,
        image:urlFor(image).url(),
        price_id:price_id,
    }
    return(
        <Button onClick={()=>{
            addItem(product),handleCartClick()
        }}>
            Add to Cart
        </Button>
    )
}