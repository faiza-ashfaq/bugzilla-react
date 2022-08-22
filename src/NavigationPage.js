import React, { useMemo } from 'react';
import GetCount from './components/GetCount';
import ProjectForm from './components/ProjectForm';

// Our Home Page.  Exciting stuff.
export default function NavigationPage() {
  const { count, error, loaded } = GetCount();
  const stringifiedData = useMemo(() => {
    return JSON.stringify(count || {});
  }, [count]);
  if (loaded) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <div>
        <p>The project count is {stringifiedData} so please enter a number within 1-{stringifiedData}.</p>
        <ProjectForm />
        <p>To view bugs, go to the project show page where there is a link to bugs page.</p>
      </div>

    );
  }
  return <span>Loading...</span>;
}
