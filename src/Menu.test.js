import React from 'react'
import { shallow } from 'enzyme'
import { UnconnectedMenu } from './Menu'

describe('Menu', () => {
  const fetchCategories = jest.fn();
  const setSelectedCategory = jest.fn();

  let wrapper;
  let categories = {
    data: [
      {
        id: 1,
        title: 'title1'
      },
      {
        id: 2,
        title: 'title2'
      }
    ]
  };

  let selectedCategory = 1;

  beforeEach(() => {
    wrapper = shallow(<UnconnectedMenu
        categories={categories}
        selectedCategory={selectedCategory}
        fetchCategories={fetchCategories}
        setSelectedCategory={setSelectedCategory}
    />)
  });

  test('renders without crashing', () => {
    wrapper
  });

    test('fetches categories', () => {
        expect(fetchCategories).toHaveBeenCalled();
    });

  test('renders categories in list', () => {
    const listItemOne = wrapper.find('[data-test="menu-list-item-1"]')
    expect(listItemOne.length).toBe(1);
    expect(listItemOne.first().key()).toBe('1');

    const listItemTwo = wrapper.find('[data-test="menu-list-item-2"]')
    expect(listItemTwo.length).toBe(1);
    expect(listItemTwo.first().key()).toBe('2');

  });


  test('renders category in bold if category is selected category', () => {
    const listButtonOne = wrapper.find('[data-test="menu-list-item-button-1"]');
    expect(listButtonOne.length).toBe(1);
    expect(listButtonOne.first().props().style).toEqual({ fontWeight: 'bold' });

  });


  test('does not render category in bold if category is selected category', () => {
    const listButtonTwo = wrapper.find('[data-test="menu-list-item-button-2"]');
    expect(listButtonTwo.length).toBe(1);
    expect(listButtonTwo.first().props().style).toEqual(null);

  });

  test('clicking on list item sets selected category', () => {
    const listButtonTwo = wrapper.find('[data-test="menu-list-item-button-2"]');
    expect(listButtonTwo.length).toBe(1);
    listButtonTwo.simulate('click');
    expect(setSelectedCategory).toHaveBeenCalledWith(2);
  });
});
