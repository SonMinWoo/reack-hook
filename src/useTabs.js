import { useState } from "react";
//  const { currentItem, changeItem } = useTabs(1, content);

/*in return App
{content.map((section, index) => (
  <button onClick={() => changeItem(index)}>{section.tab}</button>
))}
<div>{currentItem.content}</div>
*/

const content = [
  {
    tab: "Section 1",
    content: "Section 1 content"
  },
  {
    tab: "Section 2",
    content: "Section 2 content"
  }
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

export default useTabs;
