import { EXPERIENCES } from '../../data/experiences';
import { Panel, PanelHeader, PanelTitle } from '../panel';
import { ExperienceItem } from './experience-item';

export function Experiences() {
  return (
    <Panel id="experience">
      <PanelHeader>
        <PanelTitle>Experience</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem experience={experience} key={experience.id} />
        ))}
      </div>
    </Panel>
  );
}
