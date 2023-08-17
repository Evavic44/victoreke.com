export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto lg:px-0 px-8">
      <div className="flex items-center justify-between mb-6">
        <span className="w-52 h-11 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></span>
        <span className="w-20 h-11 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></span>
      </div>
      <div className="w-full h-96 mb-8 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></div>
      <div className="flex flex-col gap-y-2">
        <span className="w-full h-5 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></span>
        <span className="w-full h-5 dark:bg-primary-bg bg-zinc-200 rounded-sm animate-pulse"></span>
      </div>
    </div>
  );
}
