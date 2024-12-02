window.onload = () => {
    // const isLightMode = localStorage.getItem("is-light-mode")
    // if (isLightMode && isLightMode === "true") {
    //     setLightMode()
    // }

    const darkModeToggle = document.getElementById("dark-mode-toggle")
    darkModeToggle.addEventListener("change", () =>  {
        document.body.classList.toggle("light-mode")
        //localStorage.setItem("is-light-mode", darkModeToggle.checked ? "true" : "false")
    })

    // const setLightMode = () => {
    //     darkModeToggle.checked = true
    //     document.body.classList.toggle("light-mode")
    //     localStorage.setItem("is-light-mode", "true")
    // }
}