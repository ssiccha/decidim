import sortable from 'html5sortable'

class SortListComponent {
  /**
   * Creates a sortable list using hmtl5sortable function.
   *
   * @param {String} sortListSelector The list selector that has to be sortable.
   * @param {Object} options An object containing the same options as html5sortable. It also includes
   *                an extra option `onSortUpdate`, a callback which returns the children collection
   *                whenever the list order has been changed.
   *
   * @returns {void} Nothing.
   */
  constructor(sortListSelector, options) {
    if ($(sortListSelector).length > 0) {
      sortable(sortListSelector, options)[0].addEventListener("sortupdate", (event) => {
        const $children = $(event.target).children();

        if (options.onSortUpdate) {
          options.onSortUpdate($children);
        }
      });
    }
  }
}

export default function createSortList(sortListSelector, options) {
  return new SortListComponent(sortListSelector, options);
}
