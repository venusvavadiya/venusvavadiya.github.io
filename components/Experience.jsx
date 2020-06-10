import React from "react";
import Section from "../base/Section";
import SectionTitle from "../base/SectionTitle";
import SectionContent from "../base/SectionContent";
import ContentBox from "../base/ContentBox";
import ContentList from "../base/ContentList";
import ContentHeader from "../base/ContentHeader";
import { experiences } from "../data";

const Experience = () => (
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
);

export default Experience;
