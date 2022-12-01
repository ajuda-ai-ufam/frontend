import React from 'react';
import { CurrentPageName, Link, StyledBreadcrumbs } from './styles';

type Props = {
  currentPage: string;
  previousPages: {
    name: string;
    route: string;
  }[];
};

const Breadcrumbs = ({ currentPage, previousPages }: Props) => (
  <StyledBreadcrumbs>
    {previousPages.map((page) => (
      <Link key={page.name} id={page.name} href={page.route}>
        {page.name}
      </Link>
    ))}
    <CurrentPageName>{currentPage}</CurrentPageName>
  </StyledBreadcrumbs>
);

export default Breadcrumbs;
