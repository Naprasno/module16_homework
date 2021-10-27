txt=`
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(txt, "text/xml");

const listNode = xmlDoc.querySelector("list");
const students = listNode.querySelectorAll('student');
let resultList=[];
let numOfElements = listNode.querySelectorAll('student').length;

for (let i = 0; i < numOfElements; i++) {
let elem = students[i];
let firstNode = elem.querySelector("first");
let secondNode = elem.querySelector("second");
let ageNode = elem.querySelector("age"); 
let profNode = elem.querySelector("prof"); 
let nameNode = elem.querySelector("name");
  let langAttr = nameNode.getAttribute('lang'); //ru
    let result =
    {
    name: `${firstNode.textContent} ${secondNode.textContent}`,
    age: ageNode.textContent,
    prof: profNode.textContent,
    lang: langAttr,
      }
  resultList.push(result)
}
console.log('list: ', resultList);