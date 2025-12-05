export default function TutorialIcons({ imageSrc, iconDescription }) {
  return (
    <div className="flex flex-col w-[100px] h-[180px] text-white">
      <img src={imageSrc} alt="icon" className="hover:translate-z-0 "/>

      <div className="self-center mt-auto mb-auto pt-2 ">
        {iconDescription}
      </div>
    </div>
  );
}
