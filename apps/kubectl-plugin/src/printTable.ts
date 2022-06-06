export function printTable(table: Record<string, string>[]) {
  console.log(printTableToString(table));
}

function printTableToString(table: Record<string, string>[]) {
  if (table.length === 0) {
    return "No values.";
  }

  const columns = Object.keys(table[0]);
  const columnsAndLengths = columns.map((column) => {
    let longestLength = 0;
    table.forEach((entry) => {
      if (entry[column] && entry[column].length > longestLength) {
        longestLength = entry[column].length;
      }
    });
    return { column, longestLength, length: longestLength + 3 };
  });

  const headers = columnsAndLengths
    .map((columnLength) =>
      columnLength.column.toUpperCase().padEnd(columnLength.length)
    )
    .join("");
  const rows = table
    .map((row) =>
      columnsAndLengths
        .map((columnLength) =>
          row[columnLength.column].padEnd(columnLength.length)
        )
        .join("")
    )
    .join("\n");

  return `${headers}\n${rows}`;
}
