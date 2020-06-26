import React from "react";
import Section from "../base/Section";
import SectionTitle from "../base/SectionTitle";
import SectionContent from "../base/SectionContent";
import ContentBox from "../base/ContentBox";
import ContentList from "../base/ContentList";
import ContentHeader from "../base/ContentHeader";
import { skills } from "../data";

const Skills = () => (
  <Section>
    <SectionTitle>
      Skills
    </SectionTitle>

    <SectionContent>
      {skills.map(({ title, subtitle, subsubtitle, items }) => (
        <div key={title + subsubtitle} className="border-b">
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

export default Skills;
