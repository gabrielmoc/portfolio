import { projectDemos } from '@/data/projectExperiences';
import ProjectArchitecture from './ProjectArchitecture';
import RequestDemo from './RequestDemo';
import CommerceDemo from './project-demos/CommerceDemo';
import InventoryDemo from './project-demos/InventoryDemo';
import ContentDemo from './project-demos/ContentDemo';

export default function ProjectExperience({ projectId, projectName }: { projectId: string; projectName: string }) {
  const demo = projectDemos[projectId];
  return <>
    <ProjectArchitecture projectId={projectId} />
    {demo === 'request' && <RequestDemo />}
    {demo === 'commerce' && <CommerceDemo projectId={projectId} projectName={projectName} />}
    {demo === 'inventory' && <InventoryDemo projectName={projectName} />}
    {demo === 'content' && <ContentDemo projectName={projectName} />}
  </>;
}
