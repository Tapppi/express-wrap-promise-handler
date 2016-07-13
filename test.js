import test from 'ava';

import wrap from './index';

test('doesn\'t do anything on succesful promise', async t => {
	t.plan(2);
	const fn = wrap(async(req, res, next) => {
		return next(null);
	});
	const p = fn(null, null, err => t.falsy(err));
	t.notThrows(p);
	return p;
});

test('calls next with an error on failed promise', t => {
	t.plan(2);
	const fn = wrap(async() => {
		throw new Error();
	});
	const p = fn(null, null, err => t.truthy(err));
	t.notThrows(p);
	return p;
});
