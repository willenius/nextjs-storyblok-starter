
//color blue, black, red

import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

import { Button } from "../ui/button";

export default function CallToAction({ blok }) {
    return (
        <Link href={blok.link.url}>
            <Button {...storyblokEditable(blok)} variant={blok.color}>
                {blok.title}
            </Button>
        </Link>
    );
}