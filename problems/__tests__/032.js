const oddSort = require('../032-add-sort');

test('Тестирование задачи "032-add-sort"', () => {
    expect(oddSort([2,3,6,7,1])).toStrictEqual([2,1,6,3,7]);
    expect(oddSort([])).toStrictEqual([]);
    expect(oddSort([7,1,7,9])).toStrictEqual([1,7,7,9]);
    expect(oddSort([24,105, 66,7,11,9,0])).toStrictEqual([24,7,66,9,11,105,0]);
});
