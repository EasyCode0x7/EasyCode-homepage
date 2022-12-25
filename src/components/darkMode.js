import { HiOutlineMoon } from "react-icons/hi";

const LightTheme = {
    text: "#23374D",
    toggle: "#757575",
    hover: "#0085FF",
    bgc: "#eee",
};

const DarkTheme = {
    text: "eee",
    toggle: "#0085FF",
    hover: "#00D4FF",
    bgc: "323374D",
}

const Themes = {
    light: LightTheme,
    dark: DarkTheme,
}

const Change = () => {
    
    let wht = document.getElementById("change")
    
    wht.innerHTML = <HiOutlineMoon />
    console.log(wht.innerText)
}



export default Change;

