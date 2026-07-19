import { PageLoaderOverlay } from "@/components/system/loaders";

/** Dashboard route loading — light page + dark spinner. */
export default function DashboardLoading() {
  return <PageLoaderOverlay variant="light" />;
}
