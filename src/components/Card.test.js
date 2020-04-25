import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from './Card';

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    
    const { asFragment } = render(
      <Card
      key = {10}
      id = {10}
      text = {"You can do it!"}
      emoji = {"heart"}
      onClickCallback = {() => {}}
    />
    );
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});  