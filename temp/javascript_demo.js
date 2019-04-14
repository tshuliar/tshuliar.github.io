
function myFunc01() {

	console.log( 'Hello' );
	console.log( 'Text text text.' )
}

function getA() {
	let A =  document.getElementById( 'elA' );
	return Number( A.value )
}

function getB() {
	let B = document.getElementById( 'elB' );
	return Number(B.value);
}

function setR( r ) {
	document.getElementById( 'elR' ).value = r;
}

function myMult() {
 setR(  getA() * getB() );
}

function myDiv() {
  setR( getA() / getB() );
}


function mySub() {
  setR( getA() - getB() );
}

function myAdd() {
  setR(  getA() + getB() );
}