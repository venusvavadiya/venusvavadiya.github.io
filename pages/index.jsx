import React from "react";
import PageLayout from "../layouts/Page";
import Intro from "../components/Intro";
import Saperator from "../components/Saperator";
import ContentBox from "../components/ContentBox";
import ContentList from "../components/ContentList";
import ContentHeader from "../components/ContentHeader";

const experiences = [
  {
    title: "Software Developer",
    subtitle: "Leadrevr • Full Time",
    items: [
      "Designed and built a SASS lead generation tool for used car dealerships.",
      "Built frontend for inventory management in React.",
      "Developed backend API using Python and MongoDB.",
      "Developed automated ad publishing using Python.",
      "Built various scraping projects to collect automotive data using Python",
    ],
  },

  {
    title: "Technical Systems Analyst Co-op",
    subtitle: "RBC • Internship",
    items: [
      "Verified the data and documentation of web services across teams.",
      "Built a proof-of-concept of an internal application for testing in Node.js.",
      "Created and documented stored procedures in T-SQL for the backup and restore.",
      "Built solutions through automation that can make developers productive.",
    ],
  },

  {
    title: "Software Developer",
    subtitle: "Derman Inc. • Part Time",
    items: [
      "Architected the entire web application with my team.",
      "Built features and implemented business logic.",
      "Guided and helped the team whenever and wherever required.",
      "Collaborated with a remote developer.",
      "Completed the project on time and budget.",
    ],
  },

  {
    title: "Programmer Co-op",
    subtitle: "Renegade Digital Media Inc. • Internship",
    items: [
      "Built designs provided by the Lead Designer.",
      "Came up with a scalable and clean solution for functionality in the client's application.",
      "Learned as much as possible from my mentor.",
      "Updated and maintained data for current applications.",
      "Contributed by taking a design initiative on one of the applications.",
      "Achieved Veeva certification for the company."
    ],
  },
];

const IndexPage = () => (
  <PageLayout>
    <Intro />

    <Saperator />

    <div className="max-w-3xl mx-auto py-8 md:px-8">
      <p className="text-sm text-center text-gray-700 uppercase tracking-wide font-bold">
        Experience
      </p>

      <div className="bg-white md:rounded-lg md:shadow mt-4">
        {experiences.map(({ title, subtitle, items }) => (
          <div key={title} className="border-b">
            <ContentBox header={(
              <ContentHeader {...{title, subtitle}}/>
            )}>
              <ContentList items={items} />
            </ContentBox>
          </div>
        ))}
      </div>
    </div>

  </PageLayout>
);

export default IndexPage;
