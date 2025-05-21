import { useMediaQuery } from "../hooks/useMediaQuery";
import { Close } from "../icons/close";
import { MoreIcon } from "../icons/more";
import { NightMode } from "../icons/nightMode";
import { Button } from "../UI/button";

export function Navbar() {
  const isDektop = useMediaQuery("(min-width: 880px)");
  const isMobile = useMediaQuery("(min-width: 640px)");
  console.log(isMobile);
  return (
    <nav className="h-14 w-full flex flex-col sm:flex-row items-start border-b-1 border-slate-200 bg-[#fefefe]">
      {isMobile && (
        <div className="h-full w-[40%] ml:w-70 pl-3 pt-1 border-r-1 border-slate-100 font-medium text-lg transition-all duration-200 ease-in-out">
          Your inbox
        </div>
      )}

      {isDektop && (
        <div className="flex-1 flex flex-row justify-between pl-4 pt-2 lg:pt-1 pr-4 h-full border-r-1 border-slate-100 transition-all duration-300 ease-in-out">
          <div className="font-normal lg:font-medium lg:text-lg text-base transition-all duration-300 ease-in-out">
            Luis Easton
          </div>
          <div className="flex flex-row gap-2">
            <Button
              type="icon"
              textstyles="lg"
              size="sm"
              icon={<MoreIcon size="md" />}
            />
            <Button
              type="icon"
              textstyles="lg"
              size="sm"
              icon={<NightMode size="md" />}
            />
            <Button
              type="primary"
              textstyles="md"
              size="sm"
              content="Close"
              icon={<Close size="md" />}
            />
          </div>
        </div>
      )}

      <div className="w-full ml:w-[360px] flex flex-row items-start gap-5 pl-1 sm:pl-3 h-full transition-all duration-200 ease-in-out">
        <Button
          content="AI Copilot"
          type="noborder"
          size="sm"
          textstyles="lg"
        />
        <Button content="Details" type="noborder" size="sm" textstyles="lg" />
      </div>
    </nav>
  );
}

//-------------------------------------------------------------------
