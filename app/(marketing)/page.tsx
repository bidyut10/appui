import Image from "next/image";
import { Badge } from "./_components/badge";
import { Heading } from "./_components/heading";
import { Paragraph } from "./_components/paragraph";
import { BOX_PATTERN } from "@/lib/shared";
import { LinkedBlock } from "./_components/linked-block";
import { PhoneColumn } from "./_components/phone-column";
import { CtaButtons } from "./_components/cta-buttons";
import { SiteFooter } from "./_components/site-footer";
import { AnnotatedText } from "@/components/underlines/AnnotatedText";
import { DndFaceWidget } from "@/components/activity/dnd-face-widget";
import { TorchFaceWidget } from "@/components/torch/torch-face-widget";
import { LaptopMockupCard } from "@/components/mockups/laptop-mockup-card";
import { BrowserMockupCard } from "@/components/mockups/browser-mockup-card";
import { AnalogClockWidget } from "@/components/clocks/analog-clock-widget";
import { JournalWritingCard } from "@/components/text/journal-writing-card";
import { BluetoothFaceWidget } from "@/components/bluetooth/bluetooth-face-widget";
import { TechStack, TECH_STACK_ITEMS } from "./_components/tech-stack";
import { InstallOptions } from "./_components/compoent-deisgn-copy-demo";
import { OpenSourcePanel } from "./_components/sponser-resource";
import { ShowcaseScrollRestoration } from "@/app/_shared/scroll/showcase-scroll-restoration";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full min-w-0 flex-col items-center gap-6 overflow-x-hidden px-3 pb-10 selection:bg-neutral-800 selection:text-white md:px-4">
      <ShowcaseScrollRestoration />

      <div className="mt-4 mb-10 max-w-xl px-4 md:px-0">
        <Image
          src="/osui-logo.png"
          alt="Logo"
          width={0}
          height={0}
          sizes="512px"
          className="h-auto w-30"
        />
        <Heading className="mt-36">
          Build Better{" "}
          <span className="relative inline-block">
            <AnnotatedText variant="underline" color="text-cyan-200">
              Interfaces
            </AnnotatedText>
            <Badge className="-top-5 -right-1 rotate-6 text-green-500">
              Free
            </Badge>
          </span>
        </Heading>
        <Paragraph>
          Building for the web has never been easier. Creating something
          memorable still takes care.{" "}
          <AnnotatedText variant="highlight" color="text-yellow-100">
            OpenSource UI
          </AnnotatedText>{" "}
          is a collection of thoughtfully crafted, production-ready components
          designed to help you build interfaces that feel polished, intentional,
          and worth sharing.
        </Paragraph>
        <CtaButtons />
      </div>

      <div className="relative mt-36 max-w-xl px-4 md:px-0">
        <Badge className="-top-7 -left-1 -rotate-3 text-neutral-500">
          why us?
        </Badge>
        <Heading>
          Obsessively Detailed. Effortlessly{" "}
          <AnnotatedText variant="doubleUnderline">Beautiful.</AnnotatedText>
        </Heading>
        <Paragraph>
          Designed with precision, from the frame curves to the smallest
          hardware details, so your apps and websites look as polished as the
          products they deserve.
        </Paragraph>
      </div>

      <section className="-mx-3 w-[calc(100%+1.5rem)] overflow-visible pt-6 pb-14 min-[550px]:mx-0 min-[550px]:w-full min-[1300px]:-mr-3 min-[1300px]:ml-0 min-[1300px]:w-[calc(100%+0.75rem)] md:min-[1300px]:-mr-4 md:min-[1300px]:w-[calc(100%+1rem)]">
        <div className="mx-auto flex w-full max-w-xl flex-col items-stretch gap-10 min-[1300px]:mx-0 min-[1300px]:max-w-none min-[1300px]:flex-row min-[1300px]:items-stretch min-[1300px]:gap-10 min-[1300px]:pl-[max(0px,calc((100%-36rem)/2))]">
          <PhoneColumn variant="purple" src="/wallpaper-15.png" />
          <PhoneColumn variant="orange" src="/wallpaper-2.png" />
          <PhoneColumn
            variant="titanium"
            src="/iphone-wallpaper.png"
            link="view more colors"
          />
        </div>
      </section>

      <div className="my-10 max-w-xl px-4 md:px-0">
        <Heading>
          Premium{" "}
          <AnnotatedText variant="arrow" color="text-rose-300">
            Finishes,
          </AnnotatedText>
          Endless Possibilities.
        </Heading>
        <Paragraph>
          Choose from beautifully crafted color variants like Titanium, Space
          Gray, and more. Every finish is meticulously designed with realistic
          materials, accurate hardware details, and pixel-perfect precision to
          make every presentation feel premium.
        </Paragraph>
      </div>

      <LinkedBlock
        className="relative mx-auto w-full pb-14 md:w-xl"
        link="view more variants"
      >
        <LaptopMockupCard>
          <Image
            src="/wallpaper-3.png"
            alt="App screen"
            fill
            sizes="100%"
            className="object-cover"
          />
        </LaptopMockupCard>
      </LinkedBlock>

      <div className="my-10 max-w-xl px-4 md:px-0">
        <Heading>
          Designed to Blend In.{" "}
          <AnnotatedText variant="wavy">Built to Stand Out.</AnnotatedText>
        </Heading>
        <Paragraph>
          Wrap your UI in light, dark, or transparent browser chrome. Pick a
          theme, drop in your screenshot, and present web work that feels
          finished before you ship.
        </Paragraph>
      </div>

      <LinkedBlock
        className="relative mx-auto w-full max-w-xl px-4 pb-14 md:px-0"
        link="view more themes"
      >
        <BrowserMockupCard theme="transparent">
          <Image
            src="/dith-homee.png"
            alt="App screen"
            fill
            sizes="100%"
            className="object-cover"
          />
        </BrowserMockupCard>
      </LinkedBlock>

      <LinkedBlock
        className="relative mx-auto my-10 max-w-xl px-4 pb-14 md:px-0"
        link="view more annotations"
      >
        <Paragraph tone="dark">
          Draw attention where it matters most with clean, customizable{" "}
          <AnnotatedText variant="circle"> annotations</AnnotatedText>. Add{" "}
          <AnnotatedText variant="underline">
            arrows, labels, and callouts
          </AnnotatedText>{" "}
          to explain features, document interfaces, and create presentations
          that communicate with{" "}
          <AnnotatedText variant="highlight">
            clarity and confidence.
          </AnnotatedText>
        </Paragraph>
      </LinkedBlock>

      <LinkedBlock
        className="relative mx-auto my-10 max-w-xl px-4 pb-14 md:px-0"
        link="view more variants"
      >
        <Heading>
          <AnnotatedText variant="line" color="text-orange-300">
            Designed to Keep
          </AnnotatedText>{" "}
          Time in Style.
        </Heading>
        <Paragraph>
          Explore carefully designed clock variants that balance functionality,
          elegance, and customization for any project.
        </Paragraph>
        <div className="mt-16 flex flex-col items-center justify-between gap-6 md:flex-row">
          <AnalogClockWidget variant="roman" />
          <AnalogClockWidget variant="minimal" />
          <AnalogClockWidget variant="numeric" />
        </div>
      </LinkedBlock>

      <LinkedBlock
        className="relative mx-auto my-10 max-w-xl px-4 pb-14 md:px-0"
        link="view more widgets"
      >
        <Heading>
          Interactive Components{" "}
          <AnnotatedText variant="wavy" color="text-rose-300">
            {" "}
            That Feel Alive.
          </AnnotatedText>
        </Heading>
        <Paragraph>
          Polished widgets inspired by modern design systems, built with smooth
          interactions and thoughtful details that users notice.
        </Paragraph>
        <div className="mt-16 flex flex-col items-center justify-between gap-6 md:flex-row">
          <BluetoothFaceWidget />
          <TorchFaceWidget />
          <DndFaceWidget />
        </div>
      </LinkedBlock>

      <LinkedBlock
        className="relative mx-auto my-10 max-w-xl px-4 pb-14 md:px-0"
        link="view more notebooks"
      >
        <Heading>
          Writing That Feels{" "}
          <AnnotatedText variant="underline" color="text-green-300">
            {" "}
            Natural.
          </AnnotatedText>
        </Heading>
        <Paragraph>
          Designed to feel like a real writing space, complete with a notebook
          layout, live word count, save indicators, and an experience that
          encourages focused writing.
        </Paragraph>
        <div
          className="mt-16 flex w-full items-center justify-center rounded-2xl border border-neutral-100 p-10"
          style={BOX_PATTERN}
        >
          <JournalWritingCard />
        </div>
      </LinkedBlock>

      <div className="relative mt-36 max-w-xl px-4 md:px-0">
        <Badge className="-top-7 -left-1 -rotate-3 text-neutral-500">
          under the hood
        </Badge>
        <Heading>
          How They&apos;re{" "}
          <AnnotatedText variant="underline" color="text-cyan-200">
            Crafted.
          </AnnotatedText>
        </Heading>
        <Paragraph>
          Built on the stack you already trust —{" "}
          <AnnotatedText variant="highlight" color="text-yellow-100">
            React
          </AnnotatedText>{" "}
          and{" "}
          <AnnotatedText variant="underline" color="text-cyan-200">
            Next.js
          </AnnotatedText>{" "}
          for components that fit your app,{" "}
          <AnnotatedText variant="wavy" color="text-rose-300">
            TypeScript
          </AnnotatedText>{" "}
          for props you can rely on,{" "}
          <AnnotatedText variant="underline" color="text-green-300">
            Tailwind CSS v4
          </AnnotatedText>{" "}
          for styling that stays in your codebase, and{" "}
          <AnnotatedText variant="circle" color="text-orange-300">
            Lucide
          </AnnotatedText>{" "}
          for icons. Every file is production-ready, readable, and yours to own.
        </Paragraph>
        <div className="mt-16">
          <TechStack items={TECH_STACK_ITEMS} />
        </div>
      </div>

      <div className="my-10 max-w-xl px-4 md:px-0">
        <Heading>
          A Developer Experience{" "}
          <AnnotatedText variant="highlight" color="text-yellow-100">
            You&apos;ll Love.
          </AnnotatedText>
        </Heading>
        <Paragraph>
          Search for a component, open it, and everything is right there —
          preview up top, details and code below. No digging, no extra steps.{" "}
          <AnnotatedText variant="underline" color="text-green-300">
            Copy and paste
          </AnnotatedText>{" "}
          into your project when you&apos;re ready. No install, no lock-in.
        </Paragraph>
        <InstallOptions />
      </div>

      <div className="relative mt-36 max-w-xl px-4 md:px-0">
        <Badge className="-top-7 -left-1 -rotate-3 text-green-500 max-[499px]:left-4">
          built with
        </Badge>
        <Heading>
          Resources &{" "}
          <AnnotatedText variant="wavy" color="text-rose-300">
            Sponsors.
          </AnnotatedText>
        </Heading>
        <Paragraph>
          Tools, people, and services that power Opensource UI — plus a spot for
          sponsors who want to support the project.
        </Paragraph>
        <OpenSourcePanel />
      </div>

      <SiteFooter />
    </div>
  );
}
