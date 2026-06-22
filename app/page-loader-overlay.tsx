import { Loader } from "@/icons/elements/Loader";

export function PageLoaderOverlay() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      aria-live="polite"
      aria-busy="true"
      role="status"
      aria-label="Loading"
    >
      <Loader size={28} color="#171717" className="animate-spin" />
    </div>
  );
}
