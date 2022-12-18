

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
    let sun = document.getElementById("bssun")
    let moon = document.getElementById("bsmoon")

    sun.addEventListener('click', () => {
        let s = document.getElementById("bg")
        s.setAttribute("style", "background-color: black")
    })
    moon.addEventListener('click', () => {
        alert("Moon: Dark mode")
    })
}



export default Change;
<div className='gap-4 py-3 d-flex' style={styleSize}>
<a href={Twitter}><i class="fa-brands fa-twitter twitter"></i></a>
<a href={Linkedin}><i class="fa-brands fa-linkedin linkedin"></i></a>
<a href={YTChannel}><i class="fa-brands fa-youtube youtube"></i></a>
</div>