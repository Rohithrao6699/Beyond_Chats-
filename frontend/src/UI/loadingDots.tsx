export const LoadingDots = () => (
  <div className="flex items-center justify-center space-x-1">
    <div className="flex space-x-1">
      <div
        className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"
        style={{ animationDelay: "0ms" }}
      ></div>
      <div
        className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"
        style={{ animationDelay: "150ms" }}
      ></div>
      <div
        className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"
        style={{ animationDelay: "300ms" }}
      ></div>
    </div>
    <span className="text-gray-800 dark:text-slate-300 text-xs font-medium ml-2">
      Thinking...
    </span>
  </div>
);
