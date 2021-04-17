// Transcrypt'ed from Python, 2021-04-17 17:09:05
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {datetime} from './datetime.js';
var __name__ = '__main__';
export var Script =  __class__ ('Script', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self._clock ();
		self._pos_set ();
	});},
	get _clock () {return __get__ (this, function (self) {
		var date = Date ();
		document.getElementById ('clock').innerHTML = str (date);
		setTimeout (self._clock, 1000);
	});},
	get _pos_set () {return __get__ (this, function (self) {
		var time = datetime.utcnow ().strftime ('%H:%M:%S').py_split (':');
		var time = (int (time [0]) * 3600 + int (time [1]) * 60) + int (time [2]);
		var percent = 100 - (time / 86400) * 100;
		console.log (percent);
		var earth = document.getElementById ('earth');
		var doc_ele = document.documentElement.style;
		doc_ele.setProperty ('--ls', str (percent) + '%');
		doc_ele.setProperty ('--le', str (percent - 200) + '%');
		earth.classList.add ('earth');
	});}
});
export var script = Script ();

//# sourceMappingURL=sample.map