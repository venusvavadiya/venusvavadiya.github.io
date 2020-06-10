import React from "react";
import PageLayout from "../layouts/Page";
import Intro from "../components/Intro";
import Saperator from "../components/Saperator";
import ContentBox from "../components/ContentBox";
import ContentList from "../components/ContentList";
import ContentHeader from "../components/ContentHeader";
import { experiences } from "../data";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import SectionContent from "../components/SectionContent";

const IndexPage = () => (
  <PageLayout>
    <Intro />

    <Saperator />

    <Section>
      <SectionTitle>
        Experience
      </SectionTitle>

      <SectionContent>
        {experiences.map(({ title, subtitle, subsubtitle, items }) => (
          <div key={title} className="border-b">
            <ContentBox header={(
              <ContentHeader {...{title, subtitle, subsubtitle}}/>
            )}>
              <ContentList items={items} />
            </ContentBox>
          </div>
        ))}
      </SectionContent>
    </Section>

  </PageLayout>
);

export default IndexPage;
