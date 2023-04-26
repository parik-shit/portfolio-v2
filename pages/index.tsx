import type { GetStaticProps, NextPage } from "next";
import CurlyDivider from "@components/CurlyDivider";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Heading from "@components/Heading";
import Header from "@components/Header";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { Tab } from "@headlessui/react";
import StyledLink from "@components/StyledLink";

export const getStaticProps: GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult;
}> = async () => {
  // MDX text - can be from a local file, database, anywhere
  const source =
    "Hey 👋 , I am Parikshit Verma and I would like to describe myself as a *replicant*  who loves building cool *web apps / dapps* . I'm currently looking to participate in *hackathons* , particularly web3/blockchain themed so be sure to lookout for me if you want a team mate. <br/><br/> I am currently a 3rd year CSE Undergraduate Student looking for *internship opportunities*.   <br/><br/> My preferred tech stack is *React.js / React + TailwindCss + Hardhat + Mocha . ";
  const mdxSource = await serialize(source);
  return { props: { mdxSource } };
};

interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

const Timeline = dynamic(() => import("@components/Timeline"), {
  suspense: true,
});

const StyledTab = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tab
      className={({ selected }) =>
        selected
          ? "px-3 py-1 bg-zinc-500 text-zinc-200 rounded  font-sora duration-200 ease-out focus-within:outline-none "
          : "px-3 rounded hover:bg-zinc-500/50 duration-200 ease-out  py-1 font-sora focus-within:outline-none"
      }
    >
      {children}
    </Tab>
  );
};

const Home: NextPage<Props> = ({ mdxSource }) => {
  return (
    <div className="my-8 flex flex-col gap-4">
      <section>
        <Header />
      </section>
      <CurlyDivider />
      <section>
        <Heading>About</Heading>
        <div>{mdxSource && <MDXRemote {...mdxSource} />}</div>
      </section>
      {/* Work Experience */}
      <section className="mt-4 space-y-8">
        <Tab.Group>
          <Tab.List className="bg-orange-200/50 max-w-fit p-1 rounded-md flex gap-1">
            <StyledTab>Work Experience / Hackathons</StyledTab>
            <StyledTab>Blogs</StyledTab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Suspense fallback="Loading...">
                <Timeline />
              </Suspense>
            </Tab.Panel>
            <Tab.Panel> I am still working on this 🔨. You can find my notion blogs  on <StyledLink href={"https://www.notion.so/Solidity-Test-Ensuring-Code-Quality-f2b6c291611f4d4c952f8512ebf6916d"}>Solidity-Test-Ensuring-Code-Quality</StyledLink> <StyledLink href={"https://www.notion.so/225ae8d29dfc4cadbf7d68e1579316fe?v=484c7a1da972491a818c51d5790e0130"}>ZK Proofs</StyledLink> </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>

      {/* Projects */}
      {/* Hackathons */}
      <CurlyDivider />
      <div></div>
    </div>
  );
};

export default Home;
