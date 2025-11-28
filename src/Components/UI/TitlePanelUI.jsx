import { LiquidGlass } from '@liquidglass/react';

export default function TitlePanelUI({title, sceneContent}){
    return(
        <div className='inline-block pt-20 pl-20 items-start'>
            <LiquidGlass className='flex flex-col rounded-xl border-2 border-white border-solid pt-4 px-8 pb-4'
                    borderRadius={20}
                    blur={20}
                    contrast={1}
                    brightness={1.1}
                    saturation={1.2}
                >
                    <h2 className='text-white text-4xl pb-8'>{title}</h2>
                    <p className='text-white'>{sceneContent}</p>
            </LiquidGlass>
        </div>
        
    )
}