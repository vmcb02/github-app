import { GitHubInput } from '../components/GitHubInput';
import { LayoutGitHub } from '../layout/LayoutGitHub';
import { MainBoxGitHub } from '../components/MainBoxGitHub';
import { useFetch } from '../hooks/useFetch';

export const GitHubContainerPage = () => {
  
 
  const {state, onUser } = useFetch();

  return (
    <LayoutGitHub>
        <GitHubInput onUser={ onUser } />
        <MainBoxGitHub { ...state } />
    </LayoutGitHub>
  )
}
