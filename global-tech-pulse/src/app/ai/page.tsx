import { FeedPage } from "@/components/feed-page";
import { getUpdatesByCategory } from "@/lib/updates";

export default function AiPage() {
  return <FeedPage activeCategory="AI" updates={getUpdatesByCategory("AI")} />;
}
