import test from 'ava';

import wrap from './index';

test('doesn\'t do anything on succesful promise', async t => {
	t.plan(2);
	const fn = wrap(async(req, res, next) => {
		return next(null);
	});
	t.notThrows(fn(null, null, err => t.falsy(err)));
});

test('calls next with an error on failed promise', async t => {
	t.plan(2);
	const fakeErr = new Error('hi');
	const fn = wrap(async() => {
		throw fakeErr;
	});
	t.notThrows(fn(null, null, err => t.is(err, fakeErr)));
});
