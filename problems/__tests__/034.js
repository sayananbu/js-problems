const check = require('../034-yandex-task');

test('Тестирование задачи "034-yandex-task"', () => {
    expect(check(1, 1)).toBe(true);
    expect(check(1, { _COMMUNICATOR_CONTROL_: { censorship: true } })).toBe(false);
    expect(check([1, 2], [1, 2])).toBe(true);
    expect(check({ a: 1, b: [1] }, { a: 1, b: [2] })).toBe(false);
    expect(check(
		[1, 2],
		[1, { _COMMUNICATOR_CONTROL_: { validated: true, content: 2 } }])).toBe(true);
	expect(check(
		[1, 2],
		[1, { _COMMUNICATOR_CONTROL_: { censorship: true } }])).toBe(false);
	expect(check(
		{
		  a: [1, 2, 3],
		  b: [1, 2, 3],
		  c: [1, 2, 3]
		},
		{
		  a: { _COMMUNICATOR_CONTROL_: { validated: true, hash: '123', content: [1, 2, 3] } },
		  b: { _COMMUNICATOR_CONTROL_: { validated: true, hash: '123', content: [1, 2, 3] } },
		  c: { _COMMUNICATOR_CONTROL_: { validated: true, hash: '123', content: [1, 2, 3] } }
		})).toBe(true);
	expect(check(
		{
		  a: [1, 2, 3],
		  b: [1, 2, 3],
		  c: [1, 2, 3],
		  d: [4, 5, 6]
		},
		{
		  a: { _COMMUNICATOR_CONTROL_: { validated: true, hash: '123', content: [1, 2, 3] } },
		  b: { _COMMUNICATOR_CONTROL_: { validated: true, hash: '123', content: [1, 2, 3] } },
		  c: { _COMMUNICATOR_CONTROL_: { validated: true, hash: '123', content: [1, 2, 3] } },
		  d: [1, 2, 3]
		})).toBe(false);
	expect(check(
		{
		  a: { x: '.', y: '!', z: '?' },
		  b: { x: '.', y: '!', z: '?' },
		  c: { x: '.', y: '!', z: '?' }
		},
		{
		  a: { _COMMUNICATOR_CONTROL_: { validated: true, hash: 'xyz', content: {
			x: '.',
			y: { _COMMUNICATOR_CONTROL_: { censorship: true } },
			z: '?'
		  } } },
		  b: { _COMMUNICATOR_CONTROL_: { validated: true, hash: 'xyz', content: {
			x: '.',
			y: { _COMMUNICATOR_CONTROL_: { censorship: true } },
			z: '?'
		  } } },
		  c: { _COMMUNICATOR_CONTROL_: { validated: true, hash: 'xyz', content: {
			x: '.',
			y: { _COMMUNICATOR_CONTROL_: { censorship: true } },
			z: '?'
		  } } }
		})).toBe(false);
	expect(check(
		{
		  a: { x: '.', y: '!', z: '?' }
		},
		{
		  a: { _COMMUNICATOR_CONTROL_: { validated: true, content: {
			x: '.',
			y: { _COMMUNICATOR_CONTROL_: { validated: true, content: '!' } },
			z: '?'
		  } } }
		})).toBe(true);
	expect(check(
		{
		  a: { x: '.', y: '!', z: '?' },
		  b: true
		},
		{
		  a: { _COMMUNICATOR_CONTROL_: { validated: true, content: {
			x: '.',
			y: { _COMMUNICATOR_CONTROL_: { validated: true, content: '!' } },
			z: '?'
		  } } }
		})).toBe(false);
});