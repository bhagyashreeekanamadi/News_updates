import { FeedPage } from "@/components/feed-page";
import { getUpdatesByCategory } from "@/lib/updates";

export default function PolicyPage() {
  return (
    <FeedPage activeCategory="Policy" updates={getUpdatesByCategory("Policy")} />
  );
}
