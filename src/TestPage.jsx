import TitlePanelUI from "./Components/UI/TitlePanelUI"

export default function TestPage() {
    return(
        <div className="app" style={{ width: "100vw", height: "100vh" }}>
            <div className="flex flex-col justify-center items-center w-full h-full">
                 <TitlePanelUI
                 />
            </div>
        </div>
    )
}