## Functions

<dl>
<dt><a href="#parse">parse(str, strict)</a> ⇒ <code>Object</code></dt>
<dd><p>Parse a string with an interval in shorthand notation (<a href="https://en.wikipedia.org/wiki/Interval_(music)#Shorthand_notation">https://en.wikipedia.org/wiki/Interval_(music)#Shorthand_notation</a>)
and returns an object with interval properties.</p>
</dd>
<dt><a href="#type">type(num)</a> ⇒ <code>String</code></dt>
<dd><p>Get the type of interval. Can be perfectavle (&#39;P&#39;) or majorable (&#39;M&#39;)</p>
</dd>
<dt><a href="#shorthand">shorthand(simple, alt, oct, dir)</a></dt>
<dd><p>Build a shorthand interval notation string from properties.</p>
</dd>
<dt><a href="#build">build(simple, alt, oct, dir)</a></dt>
<dd><p>Build a special shorthand interval notation string from properties.
The special shorthand interval notation changes the order or the standard
shorthand notation so instead of &#39;M-3&#39; it returns &#39;-3M&#39;.</p>
<p>The standard shorthand notation has a string &#39;A4&#39; (augmented four) that can&#39;t
be differenciate from &#39;A4&#39; (the A note in 4th octave), so the purpose of this
notation is avoid collisions</p>
</dd>
<dt><a href="#qToAlt">qToAlt(num, quality)</a> ⇒ <code>Integer</code></dt>
<dd><p>Get an alteration number from an interval quality string.
It accepts the standard <code>dmMPA</code> but also sharps and flats.</p>
</dd>
<dt><a href="#altToQ">altToQ(num, alt)</a> ⇒ <code>String</code></dt>
<dd><p>Get interval quality from interval type and alteration</p>
</dd>
</dl>

<a name="parse"></a>

## parse(str, strict) ⇒ <code>Object</code>
Parse a string with an interval in shorthand notation (https://en.wikipedia.org/wiki/Interval_(music)#Shorthand_notation)
and returns an object with interval properties.

**Kind**: global function  
**Returns**: <code>Object</code> - an object properties or null if not valid interval string
The returned object contains:
- `num`: the interval number
- `q`: the interval quality string (M is major, m is minor, P is perfect...)
- `simple`: the simplified number (from 1 to 7)
- `dir`: the interval direction (1 ascending, -1 descending)
- `type`: the interval type (P is perfectable, M is majorable)
- `alt`: the alteration, a numeric representation of the quality
- `oct`: the number of octaves the interval spans. 0 for simple intervals.
- `size`: the size of the interval in semitones  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | the string with the interval |
| strict | <code>Boolean</code> | (Optional) if its false, it doesn't check if the interval is valid or not. For example, parse('P2') returns null (because a perfect second is not a valid interval), but parse('P2', false) it returns { num: 2, dir: 1, q: 'P'... } |

**Example**  
```js
var parse = require('interval-notation').parse
parse('M3')
// => { num: 3, q: 'M', dir: 1, simple: 3,
//      type: 'M', alt: 0, oct: 0, size: 4 }
```
<a name="type"></a>

## type(num) ⇒ <code>String</code>
Get the type of interval. Can be perfectavle ('P') or majorable ('M')

**Kind**: global function  
**Returns**: <code>String</code> - `P` if it's perfectable, `M` if it's majorable.  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Integer</code> | the interval number |

<a name="shorthand"></a>

## shorthand(simple, alt, oct, dir)
Build a shorthand interval notation string from properties.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| simple | <code>Integer</code> | the interval simple number (from 1 to 7) |
| alt | <code>Integer</code> | the quality expressed in numbers. 0 means perfect or major, depending of the interval number. |
| oct | <code>Integer</code> | the number of octaves the interval spans. 0 por simple intervals. Positive number. |
| dir | <code>Integer</code> | the interval direction: 1 ascending, -1 descending. |

**Example**  
```js
var interval = require('interval-notation')
interval.shorthand(3, 0, 0, 1) // => 'M3'
interval.shorthand(3, -1, 0, -1) // => 'm-3'
interval.shorthand(3, 1, 1, 1) // => 'A10'
```
<a name="build"></a>

## build(simple, alt, oct, dir)
Build a special shorthand interval notation string from properties.
The special shorthand interval notation changes the order or the standard
shorthand notation so instead of 'M-3' it returns '-3M'.

The standard shorthand notation has a string 'A4' (augmented four) that can't
be differenciate from 'A4' (the A note in 4th octave), so the purpose of this
notation is avoid collisions

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| simple | <code>Integer</code> | the interval simple number (from 1 to 7) |
| alt | <code>Integer</code> | the quality expressed in numbers. 0 means perfect or major, depending of the interval number. |
| oct | <code>Integer</code> | the number of octaves the interval spans. 0 por simple intervals. Positive number. |
| dir | <code>Integer</code> | the interval direction: 1 ascending, -1 descending. |

**Example**  
```js
var interval = require('interval-notation')
interval.build(3, 0, 0, 1) // => '3M'
interval.build(3, -1, 0, -1) // => '-3m'
interval.build(3, 1, 1, 1) // => '10A'
```
<a name="qToAlt"></a>

## qToAlt(num, quality) ⇒ <code>Integer</code>
Get an alteration number from an interval quality string.
It accepts the standard `dmMPA` but also sharps and flats.

**Kind**: global function  
**Returns**: <code>Integer</code> - the interval alteration  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Integer</code> &#124; <code>String</code> | the interval number or a string representing the interval type ('P' or 'M') |
| quality | <code>String</code> | the quality string |

**Example**  
```js
qToAlt('M', 'm') // => -1 (for majorables, 'm' is -1)
qToAlt('P', 'A') // => 1 (for perfectables, 'A' means 1)
qToAlt('M', 'P') // => null (majorables can't be perfect)
```
<a name="altToQ"></a>

## altToQ(num, alt) ⇒ <code>String</code>
Get interval quality from interval type and alteration

**Kind**: global function  
**Returns**: <code>String</code> - the quality string  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Integer</code> &#124; <code>String</code> | the interval number of the the interval type ('M' for majorables, 'P' for perfectables) |
| alt | <code>Integer</code> | the interval alteration |

**Example**  
```js
altToQ('M', 0) // => 'M'
```
