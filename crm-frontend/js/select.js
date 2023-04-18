export const choiseJS = () => {
  const galleryChoicesSelect = document.querySelectorAll('.js-choices');
  for (let i = 0; galleryChoicesSelect.length > i; i++) {
    if (!galleryChoicesSelect[i].classList.contains('fillter-choices__input')) {
      const galleryChoices = new Choices(galleryChoicesSelect[i], {
        shouldSort: false,
        searchEnabled: false,
        itemSelectText: '',
        position: 'bottom',
        classNames: {
          containerOuter: 'fillter-choices',
          containerInner: 'fillter-choices__inner',
          input: 'fillter-choices__input',
          inputCloned: 'fillter-choices__input--cloned',
          list: 'fillter-choices__list',
          listItems: 'fillter-choices__list--multiple',
          listSingle: 'fillter-choices__list--single',
          listDropdown: 'fillter-choices__list--dropdown',
          item: 'fillter-choices__item',
          itemSelectable: 'fillter-choices__item--selectable',
          itemDisabled: 'fillter-choices__item--disabled',
          itemChoice: 'fillter-choices__item--choice',
          placeholder: 'fillter-choices__placeholder',
          group: 'fillter-choices__group',
          groupHeading: 'fillter-choices__heading',
          button: 'fillter-choices__button',
          activeState: 'is-active',
          focusState: 'is-focused',
          openState: 'is-open',
          disabledState: 'is-disabled',
          highlightedState: 'is-highlighted',
          selectedState: 'is-selected',
          flippedState: 'is-flipped',
          loadingState: 'is-loading',
          noResults: 'has-no-results',
          noChoices: 'has-no-fillter-choices'
        },
      });
    }
  }
};
