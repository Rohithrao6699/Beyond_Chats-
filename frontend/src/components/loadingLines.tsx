export const LoadingLines = () => (
  <div className="animate-pulse">
    <div className="flex space-x-2">
      <div className="w-4 h-4 bg-purple-200/60 rounded-full"></div>
      <div className="flex-1 space-y-1.5">
        <div className="h-2 bg-gradient-to-r from-purple-200/60 via-pink-100/60 to-purple-200/60 rounded animate-pulse"></div>
        <div className="h-2 bg-gradient-to-r from-purple-200/60 via-pink-100/60 to-purple-200/60 rounded w-3/4 animate-pulse"></div>
      </div>
    </div>
  </div>
);
