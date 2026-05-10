import { FeedPage } from "@/components/feed-page";
import { getUpdatesByCategory } from "@/lib/updates";

export default function FundingPage() {
  return (
    <FeedPage activeCategory="Funding" updates={getUpdatesByCategory("Funding")} />
  );
}
