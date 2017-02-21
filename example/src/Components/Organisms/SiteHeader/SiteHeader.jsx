import React from 'react';
import { MainHeader } from '/src/Components/Atoms/Typography';
import { HeaderNav } from '/src/Components/Molecules/Nav';


/**
 * Header Navigation
 *
 * @description Main navigation for the site, present in the header
 */
export default () => (
  <header className="bg-white tc pv4 avenir mw7 center">
    <MainHeader title="Github Profiler" subtitle="Example for Brief Media frontend" />
    <HeaderNav />
  </header>
);
