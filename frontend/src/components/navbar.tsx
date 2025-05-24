import { useMediaQuery } from "../hooks/useMediaQuery";
import { Close } from "../assets/icons/close";
import { MoreIcon } from "../assets/icons/more";
import { Button } from "../UI/button";
import { ThemeToggle } from "./ThemeToggler";
import { useEffect } from "react";
import { useToggleStore } from "../store/toggleMain";

export function Navbar() {
  const isOpen = useToggleStore((state) => state.isOpen);
  const setIsOpen = useToggleStore((state) => state.setIsOpen);
  const toggleIsOpen = useToggleStore((state) => state.toggleIsOpen);
  const isDektop = useMediaQuery("(min-width: 880px)");
  const isMobile = useMediaQuery("(min-width: 640px)");

  function handleToggle() {
    toggleIsOpen();
  }

  useEffect(
    function () {
      setIsOpen(isDektop);
    },
    [isDektop]
  );
  console.log(isMobile);
  return (
    <nav className="h-14 w-full flex flex-col sm:flex-row items-start border-b-1 border-slate-200 dark:border-slate-700 bg-[#fefefe] dark:bg-slate-900">
      {isMobile && (
        <div className="h-full w-[40%] ml:w-70 pl-4 pt-1 flex border-r-1 border-slate-100 dark:border-slate-700 font-semibold text-base tracking-tight transition-all duration-200 ease-in-out dark:text-white">
          Your inbox
        </div>
      )}

      {isOpen && (
        <div className="flex-1 flex flex-row justify-between px-4 pt-1 h-full border-r-1 border-slate-100 dark:border-slate-700 transition-all duration-300 ease-in-out">
          <div className="font-semibold text-base lg:text-lg tracking-tight transition-all duration-300 ease-in-out dark:text-white">
            Luis Easton
          </div>
          <div className="flex flex-row gap-2">
            <Button
              variant="icon"
              textstyles="lg"
              size="sm"
              icon={<MoreIcon size="md" />}
            />
            <ThemeToggle />
            <Button
              onClick={handleToggle}
              variant="primary"
              textstyles="md"
              size="sm"
              content="Close"
              icon={<Close size="md" />}
            />
          </div>
        </div>
      )}

      <div className="w-full ml:w-[360px] flex flex-row gap-6 px-3 sm:px-4 h-full transition-all duration-200 ease-in-out">
        <Button
          content="AI Copilot"
          variant="noborder"
          size="sm"
          textstyles="lg"
        />
        <Button
          content="Details"
          variant="noborder"
          size="sm"
          textstyles="lg"
        />
      </div>
    </nav>
  );
}
