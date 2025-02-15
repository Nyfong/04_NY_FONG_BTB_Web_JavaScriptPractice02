const input1 = document.getElementById("ip-1");
const input2 = document.getElementById("ip-2");
const select = document.getElementById("select");
const record = document.getElementById("record");
//btn click
//arr
const txt1 = `
 <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <td
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  complete javascript project
                </td>
                <td class="px-6 py-4">2025-02-04T23:31	</td>
                <td class="px-6 py-4">Height</td>
                <td class="px-6 py-4">
                  <span class="bg-orange-300 text-white p-2 rounded-lg">
                    pending</span
                  >
                </td>
              </tr>
`;
const data = [];
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const inputValue = input1.value;
  const value = input2.value;
  const selectValue = select.value;
  console.log(value);
  console.log(inputValue);
  console.log(selectValue);
  if (inputValue != "" && value != "" && selectValue != "") {
    addIntoTheTable(inputValue, value, selectValue);
  } else {
    alert("prompt it first dude");
  }
  inputValue = "";
  value = "";
  selectValue = "";
});

function addIntoTheTable(title, date, stt) {
  let txt = "";
  data.push(recordComponet(title, date, stt));

  data.map((el) => {
    txt += `
      ${el}     
    `;
  });
  record.innerHTML = txt;
}

function recordComponet(title, date, stt) {
  let txt = `
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
      <td
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        ${title}
      </td>
      <td class="px-6 py-4">${date}</td>
      <td class="px-6 py-4">${stt}</td>
      <td class="px-6 py-4">
        <span class="bg-orange-300 text-white p-2 rounded-lg">pending</span>
      </td>
    </tr>
  `;
  return txt;
}
