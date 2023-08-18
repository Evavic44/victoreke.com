export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto md:px-16 px-6">
      <div className="flex items-center gap-x-6 mb-10">
        <span className="w-12 h-7 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse"></span>
        <span className="w-1/3 h-7 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse"></span>
      </div>

      <div className="flex lg:flex-row flex-col items-start justify-between">
        <div className="w-full flex flex-col gap-x-6">
          <div className="flex items-center gap-4 mb-6">
            <span className="lg:w-28 w-full h-7 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse"></span>
            <span className="lg:w-28 w-full h-7 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse"></span>
          </div>

          <span className="lg:w-[90%] w-full h-14 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse mb-4"></span>
          <span className="lg:w-[90%] w-full h-8 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse mb-12"></span>
          <span className="lg:w-[90%] w-full lg:h-[500px] h-96 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse"></span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="lg:w-60 w-full lg:h-32 h-28 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse"></span>
          <span className="lg:w-60 w-full lg:h-32 h-28 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse"></span>
          <span className="lg:w-60 w-full lg:h-32 h-28 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse"></span>
          <span className="lg:w-60 w-full lg:h-32 h-28 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-sm animate-pulse"></span>
        </div>
      </div>
    </div>
  );
}
