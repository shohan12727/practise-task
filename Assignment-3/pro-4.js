// ফাইলের নামের প্রথমে # থাকলে প্রোগ্রাম টি আউটপুট দেখাবে  "Store" 
// ফাইল টা pdf হলে প্রোগ্রাম টি আউটপুট দেখাবে  "Store" 
// ফাইল টা docx হলে প্রোগ্রাম টি আউটপুট দেখাবে  "Store"
// এর বাইরে অন্য সব কিছুর জন্য output দেখাবে  "Delete"


/** Problem 04 - (Delete / Store) */
var fileName = "slipdf.txt";
//write your code here

if (fileName.slice(0, 1) === '#') {
  console.log('Store');

} else if (fileName.slice(-4) === '.pdf') {
  console.log('Store');

} else if (fileName.slice(-5) === '.docx') {
  console.log('Store');

} else {
  console.log('Delete');

}

