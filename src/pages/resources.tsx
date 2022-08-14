import data from "src/data/resources.json";
import * as React from "react";
import { useRouter } from "next/router";
import { useViewport } from "lib/hooks/useViewport";
import classNames from "clsx";

export default function resources() {
    console.log(data.categories);
    const router = useRouter();
    const [menuOpen, setMenuOpen] = React.useState(false);
    const viewport = useViewport();

    React.useEffect(() => {
        if (viewport > 768) {
        setMenuOpen(false);
        }
    }, [viewport]);

    React.useEffect(() => {
        setMenuOpen(false);
    }, [router]);

    return (
        <div className="w-64 overflow-y-auto py-4 px-4">
            {data.categories.map((c) => (
                <li className="z50">
                    {c}
                </li>
            ))};
        </div>
    )
}