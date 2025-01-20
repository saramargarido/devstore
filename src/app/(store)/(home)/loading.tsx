import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid h-full grid-cols-6 gap-6">
      <Skeleton className="col-span-6 row-span-6 h-[856px]"></Skeleton>
      <Skeleton className="col-span-6 row-span-3"></Skeleton>
      <Skeleton className="col-span-6 row-span-3"></Skeleton>
    </div>
  )
}
