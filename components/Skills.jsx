import React from "react";
import Section from "../base/Section";
import SectionTitle from "../base/SectionTitle";
import SectionContent from "../base/SectionContent";
import ContentBox from "../base/ContentBox";
import ContentList from "../base/ContentList";
import ContentHeader from "../base/ContentHeader";
import { skills } from "../content";

const Skills = () => (
  <Section>
    <SectionTitle>
      Skills
    </SectionTitle>

    <SectionContent>
      {skills.map(({ title, subtitle }) => (
        <div key={title + subtitle} className="border-b">
          <ContentBox header={(
            <ContentHeader {...{title, subtitle}}/>
          )} />
        </div>
      ))}
    </SectionContent>
  </Section>
);

export default Skills;
