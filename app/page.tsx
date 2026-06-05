import { Box } from "./Box";
import { FacebookPostCard } from "@/components/cards/FacebookPostCard";
import { GithubContributionCard } from "@/components/cards/GithubContributionCard";
import { InstagramPostCard } from "@/components/cards/InstagramPostCard";
import { LinkedInPostCard } from "@/components/cards/LinkedInPostCard";
import { NotepadCard } from "@/components/cards/NotepadCard";
import { TwitterPostCard } from "@/components/cards/TwitterPostCard";
import { BusinessCard } from "@/components/cards/BusinessCard";
import { TwitterProfileCard } from "@/components/cards/TwitterProfileCard";
import { GoogleProfileCard } from "@/components/cards/GoogleProfileCard";
import { GithubProfileCard } from "@/components/cards/GithubProfileCard";
import { FacebookProfileCard } from "@/components/cards/FacebookProfileCard";
import { LinkedInProfileCard } from "@/components/cards/LinkedInProfileCard";
import { HomeMenuBar } from "@/components/menubar/HomeMenuBar";
import { BorderedAccordion } from "@/components/accordions/BorderedAccordion";
import { MinimalAccordion } from "@/components/accordions/MinimalAccordion";
import { SearchBar } from "@/components/searchbar/SearchBar";
import { SearchBarWithResults } from "@/components/searchbar/SearchBarWithResults";
import { HomeDropdown } from "@/components/dropdowns/HomeDropdown";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <div className="mb-10 flex max-w-xl flex-col items-center text-center">
        <h1 className="mb-2">Introduction</h1>

        <p className="max-w-lg text-sm leading-relaxed text-neutral-500">
          A handcrafted collection of copy-paste components for production apps.
          Every component is live-previewed, open source, and yours to use.
        </p>
      </div>

      <div className="w-full space-y-2 px-2">
        <div className="flex w-full gap-2">
          <Box>
            <InstagramPostCard />
          </Box>
          <Box>
            <FacebookPostCard />
          </Box>
          <Box>
            <LinkedInPostCard />
          </Box>
        </div>

        <div className="flex w-full gap-2">
          <Box>
            <TwitterPostCard />
          </Box>
          <Box>
            <BusinessCard />
          </Box>
          <Box>
            <GithubContributionCard />
          </Box>
        </div>

        <div className="flex w-full gap-2">
          <Box>
            <NotepadCard />
          </Box>
          <Box>
            <FacebookProfileCard />
          </Box>
          <Box>
            <GoogleProfileCard />
          </Box>
        </div>
        <div className="flex w-full gap-2">
          <Box>
            <TwitterProfileCard />
          </Box>
          <Box>
            <LinkedInProfileCard />
          </Box>
          <Box>
            <GithubProfileCard />
          </Box>
        </div>
        <div className="flex w-full gap-2">
          <Box>
            <HomeMenuBar/>
          </Box>
          <Box>
            <BorderedAccordion/>
          </Box>
          <Box>
            <MinimalAccordion />
          </Box>
        </div>
        <div className="flex w-full gap-2">
          <Box>
            <SearchBar />
          </Box>
          <Box>
            <SearchBarWithResults />
          </Box>
          <Box>
            <HomeDropdown/>
          </Box>
        </div>
      </div>
    </div>
  );
}
