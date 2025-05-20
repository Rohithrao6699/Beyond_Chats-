import { Close } from "../icons/close";
import { MoreIcon } from "../icons/more";
import { NightMode } from "../icons/nightMode";
import { Button } from "../UI/button";

export function Navbar() {
  return (
    <nav className="h-14 w-full flex flex-row items-start border-b-1 border-slate-200 bg-[#fefefe]">
      <div className="h-full w-70 pl-3 pt-1 border-r-1 border-slate-100 font-medium text-lg">
        Your inbox
      </div>
      <div className="flex-1 flex flex-row justify-between pl-4 pt-1 pr-4 h-full border-r-1 border-slate-100">
        <div className="font-medium text-lg">Luis Easton</div>
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
      <div className="w-90 flex flex-row items-start gap-5 pl-3 h-full">
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
