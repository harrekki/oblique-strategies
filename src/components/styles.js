const styles = {
    button: "bg-nomad-400 text-lg text-center px-8 py-4 border border-nomad-800 rounded-sm drop-shadow-sm transition ease-in-out delay-50 sm:hover:bg-nomad-500 sm:hover:text-nomad-50 duration-300",
    card: "flex justify-center items-center border border-shark-400 rounded-2xl drop-shadow-xl",
    cardFront: "bg-nomad-100",
    cardBack: "bg-shark-950",
    link: " text-nomad-800 hover:border-b-2  border-nomad-600 hover:text-nomad-600",
    helpButton: "bg-nomad-400 text-nomad-950 text-xl flex  justify-center  items-center ml-10 w-12 h-12 sm:w-10 sm:h-10 border-4 border-nomad-800 rounded-full cursor-pointer transition ease-in-out sm:hover:bg-nomad-500 sm:hover:border-nomad-900 sm:hover:text-nomad-50 duration-300",
}

const appStyles = {
    header: "flex w-11/12 shrink-0 justify-center items-center py-4 mx-auto",
    h1: "text-nomad-950 text-4xl sm:text-6xl font-display text-center mt-4 sm:mt-1",
    footer: "text-sm text-shark-900 text-center w-full shrink-0 py-4 px-12 shadow-inner"
};

const favoritesStyles = {
    message: "text-nomad-500 text-center italic px-4",
    ul: "sm:text-lg list-square px-4 py-4",
    div: "flex flex-col items-center gap-4 py-6",
    h2: "text-lg sm:text-xl uppercase font-bold",
};

const spreadStyles = {
    cardSize: "text-md p-6 w-40 h-30 sm:text-lg sm:w-60 sm:h-40",
    message: "text-nomad-500 text-center italic px-4",
    spreadDiv: "flex flex-col items-center gap-4 py-6",
};

const splitViewStyles = {
    cardSize: "text-2xl p-8 w-80 h-60 sm:w-112 sm:h-72",
    main: "flex flex-col grow justify-center items-center mt-0 px-12pb-0",
    buttonDiv: "w-full flex flex-col sm:flex-row justify-center gap-6 sm:gap-20 mt-28",
    divider: "w-2 h-full py-80 bg-shark-400 rounded",
    button: "text-shark-950 font-bold text-lg self-end pt-4 mr-4 hover:text-nomad-700",
};

const rightPanelStyles = {div: "bg-shark-50 w-full flex flex-col item-center"};

export {styles, appStyles, favoritesStyles, spreadStyles, splitViewStyles, rightPanelStyles};