import { FeedPage } from "@/components/feed-page";
import { getUpdatesByCategory } from "@/lib/updates";

export default function StartupsPage() {
  return (
    <FeedPage
      activeCategory="Startups"
      updates={getUpdatesByCategory("Startups")}
    />
  );
}
