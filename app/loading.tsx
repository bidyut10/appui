import { PageLoaderOverlay } from "@/components/system/loaders";

/** Root route loading — white pages use the light loader. */
export default function Loading() {
  return <PageLoaderOverlay variant="light" />;
}
