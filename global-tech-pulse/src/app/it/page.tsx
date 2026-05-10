import { FeedPage } from "@/components/feed-page";
import { getUpdatesByCategory } from "@/lib/updates";

export default function ItPage() {
  return <FeedPage activeCategory="IT" updates={getUpdatesByCategory("IT")} />;
}
