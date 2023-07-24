import React from "react";
import Link from "./Link";

export default function HelpPage() {

    return(
        <div className="w-2/3 mx-auto pb-8">
            <h2 className="text-xl font-bold text-center font-display">
                Over One Hundred Worthwhile Dilemmas
            </h2>
            <p className="mt-8"> 
                Oblique Strategies was a orginally created as a card deck by musician <Link url="https://www.brian-eno.net/">Brian Eno</Link> and visual artist <Link url="http://www.peterschmidtweb.com/main.html">Peter Schmidt</Link> during the 1970s. Thier purpose was to help break creative blocks by offering alternative ways of thinking via suggestions or phrases. Over time, thier popularity grew and they have been used by many people in different contexts. Only a limited number of decks were created, so finding a physical deck can be difficult and expensive, which is why I created this app.
            </p>

            <h3 className="text-lg font-bold mt-4">How to Use the Deck</h3>
            <p className="mt-2">
                There is no right or wrong way to interact with the deck, as Eno himself said in the original introduction that was included with the first three editions: 
                    <blockquote 
                        cite="http://www.rtqe.net/ObliqueStrategies/OSintro.html"
                        className="bg-nomad-200 w-2/3 my-4 p-4 italic mx-auto"
                    >
                        &quot;[The cards] can be used as a pack (a set of possibilities being continuously reviewed in the mind) or by drawing a single card from the shuffled pack when a dilemma occurs in a working situation. In this case, the card is trusted even if the appropriateness is quite unclear. They are not final, as new ideas will present themselves...&quot;
                    </blockquote>
                Clicking the &quot;Draw card&quot; button will display a single, random strategy. If you want to arrange a layout of several strategies, click the &quot;Add to spread&quot; button and expand the frame on the rignt to view your spread or clear it.  You can also save strategies by clicking the &quot;Add to favorites&quot; button for easy review. If you want to view a complete list of all the strategies, see the link below.
            </p>

            <h3 className="text-lg font-bold mt-4">Additional Information</h3>
            <ul className="list-square list-inside mt-2 ml-4">
                <li><Link url="https://en.wikipedia.org/wiki/Oblique_Strategies">Wikipedia page</Link></li>
                <li><Link url="https://matt-rickard.com/list-of-all-oblique-strategies">Complete list of strategies</Link></li>
                <li><Link url="https://www.amazon.com/Oblique-strategies-hundred-worthwhile-dilemmas/dp/B0000EEZG9">Purchase a physical deck</Link></li>
                <li><Link url="http://www.rtqe.net/ObliqueStrategies/index.html">Gregory Taylor's site dedicated to the Oblique Strategies</Link></li>
            </ul>

            <h3 className="text-lg font-bold mt-4">Credits</h3>
            <p><span>Oblique Strategies</span> &copy; 1975, 1978, and 1979 &mdash; <Link url="https://www.brian-eno.net/">Brian Eno</Link> & <Link url="http://www.peterschmidtweb.com/main.html">Peter Schmidt</Link> </p>
        </div>
    )
}