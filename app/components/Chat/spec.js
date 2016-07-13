import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { Chat } from './'

describe('<Chat />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <Chat />
    )
    expect(renderedComponent.find('div'))
  })
})
