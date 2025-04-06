import { Skeleton } from "@/components/ui/skeleton"

export default function ProductsLoading() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="rounded-lg border p-3">
          <Skeleton className="aspect-square w-full rounded-lg" />
          <div className="mt-4 space-y-2">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/4" />
          </div>
        </div>
      ))}
    </div>
  )
}

