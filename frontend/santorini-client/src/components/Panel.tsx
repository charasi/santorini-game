import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

export const Panel = () => {
  //gsap.registerPlugin(GSDevTools);
  //GSDevTools.create();
  return (
    <div
      className={
        "flex flex-col items-center justify-center border-4 border-double border-gray-500 px-8 py-4 rounded-md space-y-8"
      }
    >
      <div className="avatar">
        <button
          className={
            "avatar w-36 rounded-full p-0 border-0 overflow-hidden " +
            "cursor-pointer " +
            "transition-transform duration-150 ease-in-out " +
            "hover:scale-105 " +
            "active:scale-95 active:shadow-inner "
          }
          aria-label="User Avatar Button"
        >
          <img
            src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
            alt="User Avatar"
            className="rounded-full"
          />
        </button>
      </div>
      <button className="btn btn-outline btn-info">Info</button>
      <button className="btn btn-outline btn-info">Info</button>
    </div>
  );
};
