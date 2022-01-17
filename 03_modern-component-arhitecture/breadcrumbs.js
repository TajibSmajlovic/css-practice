import styled from "styled-components";

const Breadcrumbs = ({ children }) => {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  );
};
const Crumb = ({ href, isCurrentPage, children }) => {
  return (
    <CrumbWrapper>
      <CrumbLink href={href} aria-current={isCurrentPage ? "page" : undefined}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
};
const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;
const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 12px;
  &:not(:first-of-type) {
    margin-left: var(--spacing);
    &::before {
      content: "/";
      opacity: 0.25;
      margin-right: var(--spacing);
      /* Note: The ideal version of this solution
       * would instead use a transformed border,
       * to avoid using a real character.
       *
       * For example, something like this:
       *
       *    content: '';
       *    display: inline-block;
       *    transform: rotate(15deg);
       *    border-right: 1px solid;
       *    margin-right: var(--spacing);
       *    height: 0.8em;
       */
    }
  }
`;
const CrumbLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: revert;
  }
`;

render(
  <Breadcrumbs>
    <Crumb href="/">Home</Crumb>
    <Crumb href="/living">Living Room</Crumb>
    <Crumb href="/living/couch">Couches</Crumb>
    <Crumb href="/living/couch/sectional" isCurrentPage={true}>
      Sectionals
    </Crumb>
  </Breadcrumbs>
);
