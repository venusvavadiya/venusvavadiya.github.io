import React from "react";
import Section from "../base/Section";
import SectionTitle from "../base/SectionTitle";
import SectionContent from "../base/SectionContent";
import ContentBox from "../base/ContentBox";
import ContentList from "../base/ContentList";
import ContentHeader from "../base/ContentHeader";
import { experiences } from "../content";

const Experiences = () => (
  <Section>
    <SectionTitle>
      Experience
    </SectionTitle>

    <SectionContent>
      {experiences.map(({ title, subtitle, subsubtitle, items }) => (
        <div key={title + subsubtitle} className="border-b">
          <ContentBox header={(
            <ContentHeader {...{title, subtitle, subsubtitle}}/>
          )}>
            <div className="p-2 md:p-4 bg-gray-100 rounded-lg">
              <ContentList items={items} />
            </div>
          </ContentBox>
        </div>
      ))}
    </SectionContent>
  </Section>
);

export default Experiences;
