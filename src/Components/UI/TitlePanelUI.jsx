import { LiquidGlass } from '@liquidglass/react';

export default function TitlePanelUI({title, sceneContent, isTransitioning }){
    return(
        <div className='inline-block max-w-lg md:pl-20 md:pt-20' style={{ filter: isTransitioning ? "blur(16px)" : "none", transition: "filter 0.5s" }}>
            <LiquidGlass className='flex flex-col rounded-xl border-2 border-white border-solid  '
                    borderRadius={20}
                    blur={50}
                    contrast={1}
                    brightness={1.1}
                    saturation={1.2}
                >
                    <h2 className='text-white font-bold text-4xl p-4'>{title}</h2>
                    <p className='text-white p-4 font-semibold w-full text-start'>{sceneContent}</p>
            </LiquidGlass>
        </div>
        
    )
}