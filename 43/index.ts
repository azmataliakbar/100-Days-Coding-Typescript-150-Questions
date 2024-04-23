/*
!Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
  */

/*
todo=> Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data. This exercise demonstrates array copying and manipulation.
*/

let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
  magicians.forEach(magician => {
      console.log(magician);
  });
}

function make_great(magicians: string[]): string[] {
    let greatMagicians:string[] = [];
    magicians.forEach(magician => {
      greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("\nOriginal magicians:");
show_magicians(magicians); // Shows original names
console.log("\nGreat magicians:");
show_magicians(greatMagicians); // Shows modified names