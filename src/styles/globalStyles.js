import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 0.75rem;
`;

export const Body = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;
