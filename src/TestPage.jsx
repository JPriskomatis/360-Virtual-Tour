import InfoPanelUI from "./Components/UI/InfoPanelUI"

export default function TestPage() {
    return(
        <div className="app" style={{ width: "100vw", height: "100vh" }}>
            <div className="flex flex-col justify-center items-center w-full h-full">
                 <InfoPanelUI
                 title="Hotspot title"
                 information="This is the information of the hotspot"
                 />
            </div>
        </div>
    )
}