import React from "react";
import Link from "./Link";

export default function HelpPage() {

    return(
        <div className="px-24">
            <h2 className="text-xl font-bold text-center font-display">
                Over One Hundred Worthwhile Dilemmas
            </h2>
            <p className="mt-8"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h3 className="text-lg font-bold mt-4">How to Use the Deck</h3>
            <p className="mt-2">
                At tellus at urna condimentum. Senectus et netus et malesuada fames ac turpis egestas sed. Consequat id porta nibh venenatis cras sed felis eget velit. Leo urna molestie at elementum eu facilisis sed odio morbi. Ornare suspendisse sed nisi lacus sed. Id ornare arcu odio ut sem nulla pharetra diam. Augue neque gravida in fermentum et sollicitudin ac orci.
            </p>

            <h3 className="text-lg font-bold mt-4">Additional Information</h3>
            <ul className="list-square list-inside mt-2">
                <li><a href="https://en.wikipedia.org/wiki/Oblique_Strategies" target="_blank" rel="noreferrer">Wikipedia page</a></li>
                <li><a href="https://matt-rickard.com/list-of-all-oblique-strategies">Complete list of strategies</a></li>
                <li><a href="https://www.amazon.com/Oblique-strategies-hundred-worthwhile-dilemmas/dp/B0000EEZG9">Purchase a physical deck</a></li>
            </ul>

            <h3 className="text-lg font-bold mt-4">Credits</h3>
            <p><span>Oblique Strategies</span> &copy; 1975, 1978, and 1979 &mdash; <a href="">Brian Eno</a> & <a href="Peter Schmidt"></a>Peter Schmidt </p>
        </div>
    )
}