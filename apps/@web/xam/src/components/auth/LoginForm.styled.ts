import { css } from '@emotion/react';

export const layout = css`
  display: 'flex';
  flex-direction: 'column';
  align-items: 'center';
  width: '100%';
  height: '300px';
`;

export const formLayout = css`
  display: 'flex';
  width: '30%';
  flex-direction: 'column';
  align-items: 'center';
  color: 'gray';
  border: 'solid';
  border-radius: '40px';
  padding: '20px';
  margin: '50px';
`;

export const formInput = css`
  width: '300px';
  height: '30px';
  border: 'none';
  background-color: '#EEE8AA';
`;

export const buttonLayout = css`
  display: 'flex';
  flex-direction: 'row';
  margin-top: '10px';
`;

export const buttonStyle = css`
  background-color: '#8B4513';
  margin-bottom: '10px';
  width: '200px';
`;

export const linkLayout = css`
  margin: '10px';
  height: '20px';
  text-decoration: 'none';
  color: '#8B4513';
`;
