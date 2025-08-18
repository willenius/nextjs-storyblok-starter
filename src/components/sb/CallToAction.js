
//color blue, black, red

import Link from "next/link";
import { Button } from "../ui/button";


export default function CallToAction({ blok }) {
    return (
        <Link href={blok.link.url}>
            <Button variant={blok.color}>
                {blok.title}
            </Button>
        </Link>
    );
}