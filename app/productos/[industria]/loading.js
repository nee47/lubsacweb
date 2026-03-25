// productos/[industria]/loading.js

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 my-12 animate-pulse">
      {/* Back button skeleton */}
      <div className="w-44 h-10 bg-neutral-200 rounded-lg mb-12" />

      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar skeleton */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="w-28 h-3 bg-neutral-200 rounded mb-6" />
          <div className="flex flex-col gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-11 bg-neutral-100 rounded-xl border border-neutral-100"
              />
            ))}
          </div>
        </aside>

        {/* Product list skeleton */}
        <article className="flex-1">
          {/* Header */}
          <div className="mb-8">
            <div className="w-52 h-8 bg-neutral-200 rounded mb-3" />
            <div className="w-40 h-4 bg-neutral-100 rounded" />
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-white border border-neutral-100 rounded-2xl overflow-hidden"
              >
                <div className="flex p-6 gap-6">
                  {/* Product image skeleton */}
                  <div className="w-32 h-40 bg-neutral-100 rounded-lg flex-shrink-0" />

                  {/* Info skeleton */}
                  <div className="flex flex-col flex-1 gap-3">
                    <div className="w-20 h-5 bg-yellow-100 rounded" />
                    <div className="w-3/4 h-6 bg-neutral-200 rounded" />
                    <div className="w-full h-4 bg-neutral-100 rounded" />
                    <div className="w-5/6 h-4 bg-neutral-100 rounded" />
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-neutral-50 px-6 py-4 border-t border-neutral-100 flex justify-between items-center">
                  <div className="w-24 h-4 bg-neutral-200 rounded" />
                  <div className="flex gap-2">
                    <div className="w-16 h-5 bg-neutral-200 rounded" />
                    <div className="w-16 h-5 bg-neutral-200 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
